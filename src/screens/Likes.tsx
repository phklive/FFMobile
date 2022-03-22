import React from 'react'
import { Text, View } from 'react-native'
import ProductList from '../components/ProductList'

interface LikesProps {}

const Likes: React.FC<LikesProps> = ({}) => {
	return (
		<View>
			<Text>Likes page</Text>
			<ProductList />
		</View>
	)
}

export default Likes
