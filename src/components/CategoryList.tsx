import React from 'react'
import { View, FlatList, ListRenderItem } from 'react-native'
import { category } from '../types'
import CategoryItem from './CategoryItem'
import tw from 'twrnc'

const data: category[] = [
	{
		id: 1,
		title: 'Games',
		image: 'game-controller-outline',
	},
	{
		id: 2,
		title: 'Cars',
		image: 'car-sport-outline',
	},
	{
		id: 3,
		title: 'Clothes',
		image: 'shirt-outline',
	},
	{
		id: 4,
		title: 'Phones',
		image: 'phone-portrait-outline',
	},
	{
		id: 5,
		title: 'Computers',
		image: 'laptop-outline',
	},
]

interface CategoriesProps {}

const Categories: React.FC<CategoriesProps> = ({}) => {
	const renderItem: ListRenderItem<category> = ({ item }) => {
		return <CategoryItem title={item.title} image={item.image} />
	}

	return (
		<View style={tw`my-4 p-2`}>
			<FlatList
				data={data}
				renderItem={renderItem}
				keyExtractor={item => item.id.toString()}
				showsHorizontalScrollIndicator={false}
				horizontal
			/>
		</View>
	)
}

export default Categories
