import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import { GameStackParams } from '../navigation/Stack'

type GameProps = NativeStackScreenProps<GameStackParams, 'Game'>

const Game: React.FC<GameProps> = ({ route }) => {
	return (
		<View>
			<Text>Game page</Text>
			<Text>Game id: {route.params.id}</Text>
		</View>
	)
}

export default Game
