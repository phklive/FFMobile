import React from 'react'
import { Text, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { HomeStackParams } from '../navigation/Stack'

interface CategoryProps {
	title: string
	image: string
}

const Category: React.FC<CategoryProps> = ({ title, image }) => {
	const navigation = useNavigation<NativeStackNavigationProp<HomeStackParams>>()
	return (
		<Pressable
			style={[
				tw`flex flex-row rounded-full p-2 mr-4 items-center`,
				{ backgroundColor: '#8d99ae' },
			]}
			onPress={() => navigation.navigate('Products')}
		>
			<Ionicons name={image as any} size={24} color="#2b2d42" />
			<Text style={[tw`ml-2 text-xl`, { color: '#2b2d42' }]}>{title}</Text>
		</Pressable>
	)
}

export default Category
