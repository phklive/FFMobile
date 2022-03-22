import { Button, Text, Image, View, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useMeQuery } from '../generated/graphql'
import tw from 'twrnc'
import Spinner from '../ui/Spinner'
import useAuth from '../utils/useAuth'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { HomeStackParams } from '../navigation/Stack'

const Profile: React.FC = ({}) => {
	const navigation = useNavigation<NativeStackNavigationProp<HomeStackParams>>()
	const { signOut } = useAuth()
	const { loading, error, data } = useMeQuery({ fetchPolicy: 'network-only' })

	const signOutHandler = () => {
		signOut()
	}

	if (loading) return <Spinner />
	if (error)
		return (
			<View style={tw`bg-red-400`}>
				<Text>{error.message}</Text>
				<Button title="Logout" onPress={signOutHandler} />
			</View>
		)

	return (
		<View style={tw`flex-1`}>
			<Image
				source={require('../../assets/IMG_3624.png')}
				style={tw`mt-10 h-40 w-40 rounded-full self-center`}
			/>

			<View style={tw`self-center my-2`}>
				<Text style={tw`text-center font-bold text-2xl`}>{data?.me?.name}</Text>
				<Text style={tw`text-center text-base`}>{data?.me?.email}</Text>
			</View>

			<View style={tw`self-center mt-2 flex flex-row mb-5`}>
				<View style={tw`flex-1`}>
					<Text style={tw`text-center text-base`}>0</Text>
					<Text style={tw`text-center `}>Games</Text>
				</View>

				<View style={tw`flex-1`}>
					<Text style={tw`text-center text-base`}>{data?.me?.points}</Text>
					<Text style={tw`text-center `}>Points</Text>
				</View>

				<View style={tw`flex-1`}>
					<Text style={tw`text-center text-base`}>0</Text>
					<Text style={tw`text-center `}>Likes</Text>
				</View>
			</View>

			<Pressable
				style={tw`flex flex-row bg-red-200 w-11/12 self-center h-1/10 justify-center items-center rounded my-2`}
				onPress={() => navigation.navigate('Likes')}
			>
				<Ionicons name="heart-outline" color={'black'} size={30} />
				<Text style={tw`text-center text-2xl ml-2`}>Likes</Text>
			</Pressable>

			<Pressable
				style={tw`flex flex-row bg-blue-200 w-11/12 self-center h-1/10 justify-center items-center rounded my-2`}
				onPress={signOutHandler}
			>
				<Ionicons name="close-circle-outline" color={'black'} size={30} />
				<Text style={tw`text-center text-2xl ml-2`}>Disconnect</Text>
			</Pressable>
		</View>
	)
}

export default Profile
