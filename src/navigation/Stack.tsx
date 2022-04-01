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
import Flash from '../screens/Flash'
import Product from '../screens/Product'
import Store from '../screens/Store'
import Feed from '../screens/Feed'
import Likes from '../screens/Likes'
import Search from '../screens/Search'
import MyGames from '../screens/MyGames'

export type AppParams = {
	HomeStack: undefined
	ProfileStack: undefined
	Flash: undefined
	MyGames: undefined
	LikesStack: undefined
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
}

export type LikeStackParams = {
	Likes: undefined
	Product: {
		id: string
		title?: string
		image?: string
		price?: number
	}
}

export type AuthParams = {
	Splash: undefined
	SignIn: undefined
	SignUp: undefined
}

const AppNav = createBottomTabNavigator<AppParams>()
const AuthNav = createStackNavigator<AuthParams>()

const HomeNav = createStackNavigator<HomeStackParams>()
const LikesNav = createStackNavigator<LikeStackParams>()
const ProfileNav = createStackNavigator<ProfileStackParams>()

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
	</ProfileNav.Navigator>
)

const LikesStack: React.FC = () => (
	<LikesNav.Navigator
		screenOptions={{
			headerShown: false,
		}}
		initialRouteName={'Likes'}
	>
		<LikesNav.Screen name="Likes" component={Likes} />
		<LikesNav.Screen name="Product" component={Product} />
	</LikesNav.Navigator>
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
						} else if (route.name === 'Flash') {
							iconName = focused ? 'flash-outline' : 'flash-outline'
						} else if (route.name === 'MyGames') {
							iconName = focused
								? 'game-controller-outline'
								: 'game-controller-outline'
						} else if (route.name === 'LikesStack') {
							iconName = focused ? 'heart-outline' : 'heart-outline'
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
					<AppNav.Screen
						name="MyGames"
						component={MyGames}
						options={{ title: 'Games' }}
					/>
					<AppNav.Screen name="Flash" component={Flash} />
					<AppNav.Screen
						name="LikesStack"
						component={LikesStack}
						options={{ title: 'Likes' }}
					/>
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
