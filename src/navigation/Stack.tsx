import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import Splash from '../screens/Splash'
import Header from '../ui/Header'
import Feed from '../screens/Feed'
import Products from '../screens/Products'
import Tinder from '../screens/Tinder'
import Product from '../screens/Product'

export type AppParams = {
	HomeStack: undefined
	Profile: undefined
	Tinder: undefined
}

export type HomeStackParams = {
	Home: undefined
	Feed: undefined
	Products: { search: string }
	Product: { id?: string; name: string }
}

export type AuthParams = {
	Splash: undefined
	SignIn: undefined
	SignUp: undefined
}

const AppNav = createBottomTabNavigator<AppParams>()
const HomeNav = createStackNavigator<HomeStackParams>()
const AuthNav = createStackNavigator<AuthParams>()

const HomeStack: React.FC = () => (
	<HomeNav.Navigator
		screenOptions={{
			headerShown: false,
		}}
		initialRouteName={'Home'}
	>
		<HomeNav.Screen name="Home" component={Home} />
		<HomeNav.Screen name="Feed" component={Feed} />
		<HomeNav.Screen name="Products" component={Products} />
		<HomeNav.Screen name="Product" component={Product} />
	</HomeNav.Navigator>
)

export const App: React.FC = () => {
	return (
		<>
			<Header />
			<AppNav.Navigator
				initialRouteName={'HomeStack'}
				screenOptions={({ route }) => ({
					headerShown: false,
					headerLeft: () => null,
					tabBarIcon: ({ focused, color, size }) => {
						let iconName
						if (route.name === 'HomeStack') {
							iconName = focused ? 'home-outline' : 'home-outline'
						} else if (route.name === 'Profile') {
							iconName = focused ? 'person-outline' : 'person-outline'
						} else if (route.name === 'Tinder') {
							iconName = focused ? 'search-outline' : 'search-outline'
						} else if (route.name === 'SignIn') {
							iconName = focused ? 'person-add-outline' : 'person-add-outline'
						}
						return <Ionicons name={iconName as any} size={size} color={color} />
					},
					tabBarStyle: {
						backgroundColor: '#2b2d42',
						borderTopColor: '#2b2d42',
					},
					tabBarActiveTintColor: '#edf2f4',
					tabBarInactiveTintColor: '#8d99ae',
				})}
			>
				<AppNav.Group>
					<AppNav.Screen
						name="HomeStack"
						component={HomeStack}
						options={{ title: 'Home' }}
					/>
					<AppNav.Screen name="Tinder" component={Tinder} />
					<AppNav.Screen name="Profile" component={Profile} />
				</AppNav.Group>
			</AppNav.Navigator>
		</>
	)
}

export const Auth: React.FC = () => {
	return (
		<>
			<Header />
			<AuthNav.Navigator
				initialRouteName={'Splash'}
				screenOptions={{
					headerShown: false,
					headerLeft: () => null,
				}}
			>
				<AuthNav.Group>
					<AuthNav.Screen name="Splash" component={Splash} />
					<AuthNav.Screen name="SignIn" component={SignIn} />
					<AuthNav.Screen name="SignUp" component={SignUp} />
				</AuthNav.Group>
			</AuthNav.Navigator>
		</>
	)
}
