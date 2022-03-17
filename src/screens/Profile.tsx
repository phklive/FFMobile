import { Button, Text, View } from 'react-native'
import { useUserQuery } from '../generated/graphql'
import Spinner from '../ui/Spinner'
import useAuth from '../utils/useAuth'

const Profile: React.FC = ({}) => {
	const { signOut } = useAuth()
	const { loading, error, data } = useUserQuery({ fetchPolicy: 'network-only' })

	const signOutHandler = () => {
		signOut()
	}

	if (loading) return <Spinner />
	if (error)
		return (
			<View>
				<Text>{error.message}</Text>
				<Button title="Logout" onPress={signOutHandler} />
			</View>
		)

	return (
		<View>
			<Text>{data?.user?.id}</Text>
			<Text>{data?.user?.email}</Text>
			<Text>{data?.user?.name}</Text>
			<Button title="Logout" onPress={signOutHandler} />
		</View>
	)
}

export default Profile
