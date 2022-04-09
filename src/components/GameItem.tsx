import React from 'react'
import tw from 'twrnc'
import { Text, Pressable, Image, View } from 'react-native'
import { Game, useMeQuery } from '../generated/graphql'
import Spinner from '../ui/Spinner'

interface GameItemProps {
	game: Game
	navigation: any
}

const GameItem: React.FC<GameItemProps> = ({ game, navigation }) => {
	const { loading, error, data } = useMeQuery()

	if (loading) return <Spinner />
	if (error) return <Text>There has been an error:{error.message}</Text>
	return (
		<Pressable
			style={tw`w-11/12 h-60 bg-white shadow-lg my-2 p-2 self-center rounded`}
			onPress={() => navigation.navigate('Game', { id: game.id })}
		>
			<Text style={tw`text-center text-2xl`}>{game.product.title}</Text>
			<View style={tw`flex-1 flex-row`}>
				<Image
					source={{ uri: game.product.image }}
					style={tw`h-full w-1/2 rounded`}
					resizeMode="cover"
				/>
				<View style={tw`flex-1 pl-2`}>
					<Text style={tw``}>{game.slots}</Text>
					{game.winner ? (
						<Text style={tw``}>
							{game.winner === data?.me?.id ? 'you have won' : 'you have lost'}
						</Text>
					) : (
						<Text>No winner yet</Text>
					)}
					<Text style={tw``}>{game.started.toString()}</Text>
					<Text>Num of players:{game.players.length}</Text>
				</View>
			</View>
		</Pressable>
	)
}

export default GameItem
