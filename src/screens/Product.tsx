import React, { useState } from 'react'
import {
	Image,
	Pressable,
	ScrollView,
	Text,
	useWindowDimensions,
	View,
	Share,
} from 'react-native'
import tw from 'twrnc'
import {
	NativeStackNavigationProp,
	NativeStackScreenProps,
} from '@react-navigation/native-stack'
import { HomeStackParams } from '../navigation/Stack'
import { useProductQuery } from '../generated/graphql'
import Spinner from '../ui/Spinner'
import { Ionicons } from '@expo/vector-icons'
import { NavigationRouteContext, useNavigation } from '@react-navigation/native'
import GameController from '../components/GameController'

type ProductProps = NativeStackScreenProps<HomeStackParams, 'Product'>

const Product: React.FC<ProductProps> = ({ route }) => {
	const navigation = useNavigation<NativeStackNavigationProp<HomeStackParams>>()
	const { width, height } = useWindowDimensions()
	const [likeClicked, setLikeClicked] = useState<boolean>(false)

	const { loading, data, error } = useProductQuery({
		variables: { productId: route.params.id },
	})

	const likeClickHandler = () => {
		setLikeClicked(oldState => !oldState)
		console.log('like clicked')
	}

	const shareClickHandler = async () => {
		console.log('share clicked')
		const test = await Share.share({
			message: 'hello world',
		})
		console.log(test)
	}

	if (loading) return <Spinner />
	if (error) return <Text>There has been an error please reload.</Text>
	return (
		<ScrollView style={tw``} showsVerticalScrollIndicator={false}>
			<View style={[tw`flex flex-row`]}>
				<Pressable
					style={tw`bg-white rounded-full p-1 justify-center items-center w-10 h-10 m-2`}
					onPress={() => navigation.goBack()}
				>
					<Ionicons name={'chevron-back-outline'} size={20} color={'black'} />
				</Pressable>
				<View style={tw`flex flex-row ml-auto`}>
					<Pressable
						style={tw`bg-white rounded-full p-1 justify-center items-center w-10 h-10 m-2`}
						onPress={shareClickHandler}
					>
						<Ionicons name={'share-outline'} size={20} color={'black'} />
					</Pressable>
					<Pressable
						style={tw`bg-white rounded-full p-1 justify-center items-center w-10 h-10 m-2`}
						onPress={likeClickHandler}
					>
						<Ionicons
							name={likeClicked ? 'heart' : 'heart-outline'}
							size={20}
							color={'black'}
						/>
					</Pressable>
				</View>
			</View>

			<Image
				source={{ uri: data?.product?.image }}
				style={tw`self-center rounded h-11/12 w-11/12 mt-2`}
			/>
			<View>
				<Text style={tw`text-2xl text-center mt-2`}>
					{data?.product?.title}
				</Text>
				<Text style={tw`text-xl font-bold text-center`}>
					{'$'}
					{data?.product?.price}
				</Text>
				<Text style={tw`text-xl text-center mt-4 mb-10`}>
					{data?.product?.description}
				</Text>
				<Text style={tw`text-xl text-center`}>{data?.product?.tags}</Text>
			</View>
			<GameController />
		</ScrollView>
	)
}

export default Product
