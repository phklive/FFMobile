import React from 'react'
import { Text, FlatList, ListRenderItem } from 'react-native'
import { Game } from '../generated/graphql'
import GameItem from './GameItem'

interface GameListProps {
	data: Game[]
	navigation: any
}

const GameList: React.FC<GameListProps> = ({ data, navigation }) => {
	const renderItem: ListRenderItem<Game> = ({ item }) => {
		return <GameItem game={item} navigation={navigation} />
	}
	return (
		<FlatList
			data={data}
			renderItem={renderItem}
			keyExtractor={item => item.id}
		/>
	)
}

export default GameList
