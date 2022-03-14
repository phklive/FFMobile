import { NavigationContainer } from '@react-navigation/native'
import useAuth from '../utils/useAuth'
import { AppStack, AuthStack } from './Stack'

export const Router = () => {
	const { token } = useAuth()

	return (
		<NavigationContainer>
			{token ? <AppStack /> : <AuthStack />}
		</NavigationContainer>
	)
}

export default Router
