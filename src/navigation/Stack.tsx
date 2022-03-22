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
import Products from '../screens/Products'
import Tinder from '../screens/Tinder'
import Product from '../screens/Product'
import Store from '../screens/Store'
import Feed from '../screens/Feed'
import Likes from '../screens/Likes'

export type AppParams = {
	HomeStack: undefined
	ProfileStack: undefined
	Tinder: undefined
}

export type HomeStackParams = {
	Home: undefined
	Feed: undefined
	Likes: undefined
	Store: undefined
	Products: { search: string }
	Product: {
		id: string
		title?: string
		image?: string
		price?: number
	}
}

export type ProfileStackParams = {
	Profile: undefined
	Likes: undefined
}

export type AuthParams = {
	Splash: undefined
	SignIn: undefined
	SignUp: undefined
}

const AppNav = createBottomTabNavigator<AppParams>()
const HomeNav = createStackNavigator<HomeStackParams>()
const ProfileNav = createStackNavigator<ProfileStackParams>()
const AuthNav = createStackNavigator<AuthParams>()

const HomeStack: React.FC = () => (
	<HomeNav.Navigator
		screenOptions={{
			headerShown: false,
		}}
		initialRouteName={'Home'}
	>
		<HomeNav.Screen name="Home" component={Home} />
		<HomeNav.Screen name="Products" component={Products} />
		<HomeNav.Screen name="Product" component={Product} />
		<HomeNav.Screen name="Feed" component={Feed} />
		<HomeNav.Screen name="Store" component={Store} />
		<HomeNav.Screen name="Likes" component={Likes} />
	</HomeNav.Navigator>
)

const ProfileStack: React.FC = () => (
	<ProfileNav.Navigator
		screenOptions={{
			headerShown: false,
		}}
		initialRouteName={'Profile'}
	>
		<ProfileNav.Screen name="Profile" component={Profile} />
		<ProfileNav.Screen name="Likes" component={Likes} />
	</ProfileNav.Navigator>
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
						} else if (route.name === 'ProfileStack') {
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
						borderBottomColor: '#2b2d42',
						borderTopColor: '#2b2d42',
						borderWidth: 2,
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
					<AppNav.Screen
						name="ProfileStack"
						component={ProfileStack}
						options={{ title: 'Profile' }}
					/>
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
