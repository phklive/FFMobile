import { NativeStackScreenProps } from '@react-navigation/native-stack'
import FFHeader from '../ui/FFHeader'
import React from 'react'
import ProductList from '../components/ProductList'
import SearchBar from '../components/SearchBar'
import { HomeStackParams } from '../navigation/Stack'

type ProductsProps = NativeStackScreenProps<HomeStackParams, 'Products'>

const Products: React.FC<ProductsProps> = ({ route }) => {
	return (
		<>
			<FFHeader version="back" />
			<SearchBar initialText={route.params.search} />
			<ProductList search={route.params.search} />
		</>
	)
}

export default Products
