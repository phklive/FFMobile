import React from 'react'
import { Text, View, Image } from 'react-native'
import tw from 'twrnc'
import { product } from '../types'

const Product: React.FC<product> = ({ image, price, title }) => {
	return (
		<View style={tw`flex flex-col flex-1 items-center mb-4`}>
			<Image
				source={{
					uri: `${image}`,
				}}
				style={[tw`rounded-xl `, { width: 150, height: 150 }]}
			/>
			<Text style={tw`mt-2 font-bold`}>{`$${price}`}</Text>
			<Text style={tw`text-xl font-bold`}>{title}</Text>
		</View>
	)
}

export default Product
