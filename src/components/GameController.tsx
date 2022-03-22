import React from 'react'
import tw from 'twrnc'
import { Pressable, Text, View } from 'react-native'
import { gameMode } from '../types'

const data: gameMode[] = [
	{
		id: 1,
		title: '1vs1',
		numPlayers: 2,
	},
	{
		id: 2,
		title: '5 players',
		numPlayers: 5,
	},
	{
		id: 3,
		title: '10 players',
		numPlayers: 10,
	},
	{
		id: 4,
		title: '100 players',
		numPlayers: 100,
	},
]

interface GameControllerProps {}

const GameController: React.FC<GameControllerProps> = ({}) => {
	return (
		<View style={tw`flex flex-row flex-wrap`}>
			{data.map(gameMode => {
				return (
					<Pressable
						style={tw`items-center p-2 bg-blue-200 my-2 mx-auto w-2/5 rounded`}
						key={gameMode.id}
					>
						<Text style={tw`text-center text-xl`}>{gameMode.title}</Text>
					</Pressable>
				)
			})}
		</View>
	)
}

export default GameController
