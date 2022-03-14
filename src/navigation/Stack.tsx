import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import Home from '../components/Home'
import Profile from '../components/Profile'
import Search from '../components/Search'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

export type RouteParams = {
	Home: undefined
	Profile: undefined
	Search: undefined
	SignIn: undefined
	SignUp: undefined
}

const Tab = createBottomTabNavigator<RouteParams>()
const Stack = createStackNavigator<RouteParams>()

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
					} else if (route.name === 'SignIn') {
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

export const AuthStack: React.FC = () => {
	return (
		<Stack.Navigator>
			<Stack.Group>
				<Stack.Screen name="SignIn" component={SignIn} />
				<Stack.Screen name="SignUp" component={SignUp} />
			</Stack.Group>
		</Stack.Navigator>
	)
}
