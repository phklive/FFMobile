import { gql, useQuery } from '@apollo/client'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Button, Text, View } from 'react-native'
import { RouteParams } from '../navigation/Stack'
import useAuth from '../utils/useAuth'

const USER_QUERY = gql`
	query Query {
		user {
			id
			name
			email
		}
	}
`

const Profile: React.FC = ({}) => {
	const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>()
	const { signOut } = useAuth()
	const { loading, error, data } = useQuery(USER_QUERY)

	const signOutHandler = () => {
		signOut()
		navigation.navigate('Home')
	}

	if (loading) return <Text>loading...</Text>
	if (error)
		return (
			<View>
				<Text>{error.message}</Text>
				<Button title="Logout" onPress={signOutHandler} />
			</View>
		)

	return (
		<View>
			<Text>{data.user.id}</Text>
			<Text>{data.user.name}</Text>
			<Text>{data.user.email}</Text>
			<Button title="Logout" onPress={signOutHandler} />
		</View>
	)
}

export default Profile
