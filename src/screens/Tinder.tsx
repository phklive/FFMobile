import React from 'react'
import tw from 'twrnc'
import { View, Text } from 'react-native'

interface TinderProps {}

const Tinder: React.FC<TinderProps> = ({}) => {
	return (
		<View style={tw`bg-red-300 flex-1`}>
			<Text>
				Lot du jour ou tout le monde sur l'app peut participer pour un gros lot!
				chacun peut mettre autant qu'il veut en argent, places limitees, quand
				plus de places, notifications a tous les joueurs, timer se lance, un
				gagnant est pick.
			</Text>
		</View>
	)
}

export default Tinder
