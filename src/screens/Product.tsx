import React from 'react'
import { Image, View } from 'react-native'
import tw from 'twrnc'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { HomeStackParams } from '../navigation/Stack'

type ProductProps = NativeStackScreenProps<HomeStackParams, 'Product'>

const Product: React.FC<ProductProps> = ({ route }) => {
	return (
		<View style={tw`flex-1`}>
			<Image source={{ uri: 'h' }} />
		</View>
	)
}

export default Product
