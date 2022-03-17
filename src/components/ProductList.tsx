import React from 'react'
import { View, ListRenderItem } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import tw from 'twrnc'
import { product } from '../types'
import ProductItem from './ProductItem'

const data: product[] = [
	{
		id: 1,
		title: 'Playstation 5',
		price: 500,
		image:
			'https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=707&q=80',
	},
	{
		id: 2,
		title: 'Dji air 2s',
		price: 800,
		image:
			'https://images.unsplash.com/photo-1585868830608-f0bde8523cbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
	},
	{
		id: 3,
		title: 'BMW Series 1',
		price: 10000,
		image:
			'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
	},
	{
		id: 4,
		title: 'MacBook pro M1',
		price: 1500,
		image:
			'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
	},
	{
		id: 5,
		title: 'Sony A7 IV',
		price: 4000,
		image:
			'https://images.unsplash.com/photo-1603457893497-4de5ef1d8ab1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
	},
	{
		id: 6,
		title: 'Yeezy 350 V2',
		price: 350,
		image:
			'https://images.unsplash.com/photo-1548369735-f548cbe6a294?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=737&q=80',
	},
]

interface ProductListProps {
	header: any
}

const ProductList: React.FC<ProductListProps> = ({ header }) => {
	const renderItem: ListRenderItem<product> = ({ item }) => {
		return (
			<ProductItem
				id={item.id}
				image={item.image}
				title={item.title}
				price={item.price}
			/>
		)
	}

	return (
		<View>
			<FlatList
				data={data}
				renderItem={renderItem}
				numColumns={2}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={<View>{header}</View>}
			/>
		</View>
	)
}

export default ProductList
