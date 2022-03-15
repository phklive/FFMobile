import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Search from '../screens/Search'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import Splash from '../screens/Splash'

export type RouteParams = {
	Home: undefined
	Profile: undefined
	Search: undefined
	SignIn: undefined
	SignUp: undefined
	Splash: undefined
}

const Tab = createBottomTabNavigator<RouteParams>()
const Stack = createStackNavigator<RouteParams>()

export const AppStack: React.FC = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				headerLeft: () => null,
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
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				headerLeft: () => null,
				cardStyle: {
					backgroundColor: 'blue',
					paddingTop: 50,
				},
			}}
		>
			<Stack.Group>
				<Stack.Screen name="Splash" component={Splash} />
				<Stack.Screen name="SignIn" component={SignIn} />
				<Stack.Screen name="SignUp" component={SignUp} />
			</Stack.Group>
		</Stack.Navigator>
	)
}
