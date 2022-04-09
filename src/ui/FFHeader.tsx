import React from 'react'
import tw from 'twrnc'
import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { HomeStackParams } from '../navigation/Stack'
import { Zocial } from '@expo/vector-icons'
import { useMeQuery } from '../generated/graphql'
import Spinner from './Spinner'

interface FFHeaderProps {
	version?: string
}

const FFHeader: React.FC<FFHeaderProps> = ({ version }) => {
	const { loading, error, data } = useMeQuery()
	const navigation = useNavigation<NativeStackNavigationProp<HomeStackParams>>()

	if (loading) return <Spinner />
	if (error) return <Text>There has been an error: {error.message}</Text>
	if (version === 'back')
		return (
			<View style={tw`flex flex-row justify-between items-center mb-2 px-2`}>
				<View style={tw`flex flex-row items-center`}>
					<Ionicons
						name="chevron-back-outline"
						size={32}
						color="black"
						onPress={() => navigation.goBack()}
						style={tw``}
					/>

					<Text style={tw`text-base`}>$3942</Text>
					<Ionicons
						name="add-circle-outline"
						size={28}
						color="black"
						onPress={() => navigation.navigate('Store')}
						style={tw`mr-2 ml-1`}
					/>
				</View>
				<Text
					onPress={() => navigation.navigate('Home')}
					style={[tw`text-2xl font-bold`]}
				>
					FiftyFiftys
				</Text>
				<View style={tw`flex flex-row items-center`}>
					<Ionicons
						name="notifications-outline"
						size={28}
						color="black"
						onPress={() => navigation.navigate('Feed')}
						style={tw`mx-4`}
					/>

					<Ionicons
						name="heart-outline"
						size={28}
						color="black"
						onPress={() => navigation.navigate('Likes')}
						style={tw`ml-2`}
					/>
				</View>
			</View>
		)

	if (version === 'tinder')
		return (
			<View style={tw`flex flex-row justify-between items-center mb-2 px-2`}>
				<View style={tw`flex flex-row items-center`}>
					<Ionicons name="flash-outline" color={'yellow'} size={28} />
					<Text style={tw`text-xl`}>Flash</Text>
				</View>
				<Text style={[tw`text-2xl font-bold`]}>FiftyFiftys</Text>
				<View style={tw`flex flex-row items-center`}>
					<Text style={tw`text-base`}>$3942</Text>
					<Ionicons
						name="add-circle-outline"
						size={28}
						color="black"
						onPress={() => navigation.navigate('Store')}
					/>
				</View>
			</View>
		)

	if (version === 'product')
		return (
			<View style={tw`flex flex-row justify-between items-center mb-2 px-2`}>
				<Text style={[tw`text-2xl font-bold`]}>FiftyFiftys</Text>
				<View style={tw`flex flex-row items-center`}>
					<Text style={tw`text-base`}>$3942</Text>
					<Ionicons
						name="add-circle-outline"
						size={28}
						color="black"
						onPress={() => navigation.navigate('Store')}
					/>
				</View>
			</View>
		)

	return (
		<View style={tw`flex flex-row items-center mb-2 px-2`}>
			<Text style={[tw`text-2xl font-bold`]}>FiftyFiftys</Text>
			<View style={tw`flex flex-row items-center ml-auto`}>
				<Text style={tw`text-xl mr-1`}>{data?.me?.points}</Text>
				<Zocial name="bitcoin" color={'#f2a900'} size={22} />
				<Ionicons
					name="add-circle-outline"
					size={28}
					color="black"
					onPress={() => navigation.navigate('Store')}
					style={tw`mr-2 ml-4`}
				/>

				<Ionicons
					name="notifications-outline"
					size={28}
					color="black"
					onPress={() => navigation.navigate('Feed')}
					style={tw`mr-2`}
				/>
			</View>
		</View>
	)
}

export default FFHeader
