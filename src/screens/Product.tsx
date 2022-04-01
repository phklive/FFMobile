import React, { useEffect, useState } from 'react'
import { Image, Pressable, ScrollView, Text, View, Share } from 'react-native'
import tw from 'twrnc'
import {
	NativeStackNavigationProp,
	NativeStackScreenProps,
} from '@react-navigation/native-stack'
import { HomeStackParams } from '../navigation/Stack'
import {
	useLikeProductMutation,
	useMeQuery,
	useProductQuery,
	useUnLikeProductMutation,
	MeDocument,
} from '../generated/graphql'
import Spinner from '../ui/Spinner'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import GameController from '../components/GameController'
import FFHeader from '../ui/FFHeader'

type ProductProps = NativeStackScreenProps<HomeStackParams, 'Product'>

const Product: React.FC<ProductProps> = ({ route }) => {
	const navigation = useNavigation<NativeStackNavigationProp<HomeStackParams>>()
	const [likeClicked, setLikeClicked] = useState<boolean>()
	const [selectedOption, setSelectedOption] = useState()

	const [likeProduct] = useLikeProductMutation({
		refetchQueries: [{ query: MeDocument }],
	})
	const [unLikeProduct] = useUnLikeProductMutation({
		refetchQueries: [{ query: MeDocument }],
	})

	const { loading, data, error } = useProductQuery({
		variables: { productId: route.params.id },
	})

	const { data: meData } = useMeQuery()

	useEffect(() => {
		if (meData) {
			const productLiked = meData?.me?.likes
				.map(el => el?.id)
				.includes(route.params.id)
			if (productLiked) {
				setLikeClicked(true)
			} else {
				setLikeClicked(false)
			}
		}
	}, [meData])

	const likeClickHandler = async () => {
		if (likeClicked === false) {
			setLikeClicked(true)
			await likeProduct({ variables: { productId: route.params.id } })
		} else {
			setLikeClicked(false)
			await unLikeProduct({ variables: { productId: route.params.id } })
		}
	}

	const shareClickHandler = async () => {
		await Share.share({
			message: 'hello world',
		})
	}

	const gameOptionHandler = async (option: number) => {}

	if (loading) return <Spinner />
	if (error) return <Text>There has been an error please reload.</Text>
	return (
		<>
			<FFHeader version="product" />
			<ScrollView style={tw``} showsVerticalScrollIndicator={false}>
				<View style={[tw`flex flex-row mx-2`]}>
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
				<View style={tw`h-80 w-11/12 self-center rounded shadow-2xl mb-2`}>
					<Image
						source={{ uri: data?.product?.image }}
						style={tw`self-center rounded w-full h-full mt-2`}
						resizeMode={'cover'}
					/>
				</View>
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
				</View>
				<GameController />
			</ScrollView>
		</>
	)
}

export default Product
