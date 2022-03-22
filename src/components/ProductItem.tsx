import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { Text, View, Image, Pressable } from 'react-native'
import tw from 'twrnc'
import { Product } from '../generated/graphql'
import { HomeStackParams } from '../navigation/Stack'

const ProductItem: React.FC<Product> = ({ id, image, price, title }) => {
	const navigation = useNavigation<NativeStackNavigationProp<HomeStackParams>>()

	return (
		<Pressable
			style={tw`flex flex-col items-center mx-auto my-3`}
			onPress={() => navigation.navigate('Product', { id })}
		>
			<Image
				source={{
					uri: `${image}`,
				}}
				style={[tw`rounded-xl `, { width: 150, height: 150 }]}
			/>
			<Text style={tw`mt-2 font-bold`}>{`$${price}`}</Text>
			<Text style={tw`text-xl font-bold`}>{title}</Text>
		</Pressable>
	)
}

export default ProductItem
