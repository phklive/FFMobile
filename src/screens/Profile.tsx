import { Button, Text, View } from 'react-native'
import { useMeQuery } from '../generated/graphql'
import tw from 'twrnc'
import Spinner from '../ui/Spinner'
import useAuth from '../utils/useAuth'

const Profile: React.FC = ({}) => {
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
		<View style={tw`bg-red-400 flex-1`}>
			<Text>{data?.me?.id}</Text>
			<Text>{data?.me?.email}</Text>
			<Text>{data?.me?.name}</Text>
			<Button title="Logout" onPress={signOutHandler} />
		</View>
	)
}

export default Profile
