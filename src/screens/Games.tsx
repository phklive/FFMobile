import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import tw from 'twrnc'
import GameList from '../components/GameList'
import { Game, useUserGamesQuery } from '../generated/graphql'
import { GameStackParams } from '../navigation/Stack'
import Spinner from '../ui/Spinner'

interface GamesProps {}

const Games: React.FC<GamesProps> = ({}) => {
	const { loading, error, data } = useUserGamesQuery({
		fetchPolicy: 'network-only',
	})
	const navigation = useNavigation<NativeStackNavigationProp<GameStackParams>>()
	if (loading) return <Spinner />
	if (error) return <Text>There has been an error {error.message}</Text>
	return (
		<View style={tw`flex-1`}>
			<Text style={tw`text-center text-3xl my-2`}>My games</Text>
			{data?.userGames?.length! > 0 ? (
				<GameList data={data?.userGames as Game[]} navigation={navigation} />
			) : (
				<Text style={tw`text-2xl text-center`}>You have no active games</Text>
			)}
		</View>
	)
}

export default Games
