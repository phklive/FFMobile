import { NativeStackScreenProps } from '@react-navigation/native-stack'
import FFHeader from '../ui/FFHeader'
import React from 'react'
import ProductList from '../components/ProductList'
import SearchBar from '../components/SearchBar'
import { HomeStackParams } from '../navigation/Stack'

type ProductsProps = NativeStackScreenProps<HomeStackParams, 'Products'>

const Products: React.FC<ProductsProps> = ({}) => {
	return (
		<>
			<FFHeader version="back" />
			<SearchBar />
			<ProductList />
		</>
	)
}

export default Products
