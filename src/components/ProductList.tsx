import React from 'react'
import { View, ListRenderItem, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import tw from 'twrnc'
import { Product, useProductsQuery } from '../generated/graphql'
import Spinner from '../ui/Spinner'
import ProductItem from './ProductItem'

interface ProductListProps {
	header?: any
}

const ProductList: React.FC<ProductListProps> = ({ header }) => {
	const { loading, error, data } = useProductsQuery()
	const renderItem: ListRenderItem<Product> = ({ item }) => {
		return (
			<ProductItem
				id={item.id}
				image={item.image}
				title={item.title}
				price={item.price}
				description={item.description}
			/>
		)
	}

	if (loading) return <Spinner />
	if (error)
		return (
			<Text style={tw`text-center text-xl`}>
				There has been an error please retry...
			</Text>
		)

	return (
		<View style={tw`flex-1`}>
			<FlatList
				data={data?.products}
				renderItem={renderItem}
				numColumns={2}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={<View>{header}</View>}
			/>
		</View>
	)
}

export default ProductList
