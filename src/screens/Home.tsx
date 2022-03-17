import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { HomeStackParams } from '../navigation/Stack'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import CategoryList from '../components/CategoryList'
import ProductList from '../components/ProductList'
import CarouselList from '../components/CarouselList'

const Home: React.FC = () => {
	const navigation = useNavigation<NativeStackNavigationProp<HomeStackParams>>()

	return (
		<View style={tw`flex-1`}>
			<ProductList
				header={
					<>
						<View style={tw`flex flex-row justify-between mb-2 p-2`}>
							<Text style={[tw`text-3xl font-bold`]}>FiftyFiftys</Text>
							<Feather
								name="bell"
								size={24}
								color="black"
								onPress={() => navigation.navigate('Feed')}
							/>
						</View>
						<CarouselList />
						<CategoryList />
					</>
				}
			/>
		</View>
	)
}

export default Home
