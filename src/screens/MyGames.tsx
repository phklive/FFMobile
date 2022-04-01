import React from 'react'
import { View, Text } from 'react-native'
import tw from 'twrnc'

interface MyGamesProps {}

const MyGames: React.FC<MyGamesProps> = ({}) => {
	return (
		<View>
			<Text style={tw`text-2xl text-center mt-2`}>MyGames page</Text>
		</View>
	)
}

export default MyGames
