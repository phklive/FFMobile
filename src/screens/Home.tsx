import React from 'react'
import { View } from 'react-native'
import tw from 'twrnc'
import CategoryList from '../components/CategoryList'
import ProductList from '../components/ProductList'
import CarouselList from '../components/CarouselList'
import SearchBar from '../components/SearchBar'
import FFHeader from '../ui/FFHeader'

const Home: React.FC = () => {
	return (
		<View style={tw`flex-1`}>
			<FFHeader />
			<SearchBar />
			<ProductList
				header={
					<>
						<CarouselList />
						<CategoryList />
					</>
				}
			/>
		</View>
	)
}

export default Home
