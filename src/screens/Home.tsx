import React from 'react'
import { View, Text, Image } from 'react-native'
import tw from 'twrnc'
import CategoryList from '../components/CategoryList'
import ProductList from '../components/ProductList'
import CarouselList from '../components/CarouselList'
import SearchBar from '../components/SearchBar'
import FFHeader from '../ui/FFHeader'
import POTD from '../components/POTD'

const Home: React.FC = () => {
	return (
		<View style={tw`flex-1`}>
			<FFHeader version="" />
			<SearchBar initialText="" />
			<ProductList
				header={
					<>
						<POTD />
						<CategoryList />
					</>
				}
			/>
		</View>
	)
}

export default Home
