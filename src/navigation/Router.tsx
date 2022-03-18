import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import useAuth from '../utils/useAuth'
import { Auth, App } from './Stack'

const MyTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: 'rgba(239,235,241,255)',
	},
}

export const Router = () => {
	const { token } = useAuth()

	return (
		<NavigationContainer theme={MyTheme}>
			{token ? <App /> : <App />}
		</NavigationContainer>
	)
}

export default Router
