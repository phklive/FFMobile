import { useNavigation } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { Button, Text } from 'react-native'
import { RouteParams } from '../navigation/Stack'
import tw from 'twrnc'

interface SplashProps {}

const Splash: React.FC<SplashProps> = ({}) => {
	const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>()

	return (
		<>
			<Text style={tw`text-center text-3xl text-white`}>SPLASH</Text>
			<Button onPress={() => navigation.navigate('SignIn')} title="Sign in" />
			<Button onPress={() => navigation.navigate('SignUp')} title="Sign up" />
		</>
	)
}

export default Splash
