import React from 'react'
import SearchBar from '../components/SearchBar'
import tw from 'twrnc'
import { Text, View } from 'react-native'

const Search: React.FC = () => {
	return (
		<View style={tw`flex-1`}>
			<SearchBar initialText="" />
		</View>
	)
}

export default Search
