import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import Home from '../components/Home'
import Profile from '../components/Profile'
import Search from '../components/Search'
import Login from '../components/SignIn'

export type RouteParams = {
	Home: undefined
	Profile: undefined
	Search: undefined
	Login: undefined
}

const Tab = createBottomTabNavigator<RouteParams>()

export const AppStack: React.FC = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerStyle: {
					height: 50,
				},
				headerShown: true,
				headerTitle: '',
				tabBarIcon: ({ focused, color, size }) => {
					let iconName
					if (route.name === 'Home') {
						iconName = focused ? 'home-outline' : 'home-outline'
					} else if (route.name === 'Profile') {
						iconName = focused ? 'person-outline' : 'person-outline'
					} else if (route.name === 'Search') {
						iconName = focused ? 'search-outline' : 'search-outline'
					} else if (route.name === 'Login') {
						iconName = focused ? 'person-add-outline' : 'person-add-outline'
					}
					return <Ionicons name={iconName as any} size={size} color={color} />
				},
				tabBarStyle: { backgroundColor: 'black' },
				tabBarActiveTintColor: 'white',
				tabBarInactiveTintColor: 'gray',
			})}
		>
			<Tab.Group>
				<Tab.Screen name="Home" component={Home} />
				<Tab.Screen name="Login" component={Login} />
				<Tab.Screen name="Search" component={Search} />
			</Tab.Group>
		</Tab.Navigator>
	)
}

export const AuthStack: React.FC = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerStyle: {
					height: 50,
				},
				headerShown: true,
				headerTitle: '',
				tabBarIcon: ({ focused, color, size }) => {
					let iconName

					if (route.name === 'Home') {
						iconName = focused ? 'home-outline' : 'home-outline'
					} else if (route.name === 'Profile') {
						iconName = focused ? 'person-outline' : 'person-outline'
					} else if (route.name === 'Search') {
						iconName = focused ? 'search-outline' : 'search-outline'
					} else if (route.name === 'Login') {
						iconName = focused ? 'person-add-outline' : 'person-add-outline'
					}
					return <Ionicons name={iconName as any} size={size} color={color} />
				},
				tabBarStyle: { backgroundColor: 'black' },
				tabBarActiveTintColor: 'white',
				tabBarInactiveTintColor: 'gray',
			})}
		>
			<Tab.Group>
				<Tab.Screen name="Home" component={Home} />
				<Tab.Screen name="Profile" component={Profile} />
				<Tab.Screen name="Search" component={Search} />
			</Tab.Group>
		</Tab.Navigator>
	)
}
