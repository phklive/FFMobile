import React, { useEffect, useState } from 'react'
import { View, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { HomeStackParams } from '../navigation/Stack'

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = ({}) => {
	const navigation = useNavigation<NativeStackNavigationProp<HomeStackParams>>()
	const [searchValue, setSearchValue] = useState<string>('')
	const [focused, setFocused] = useState<boolean>(false)

	const searchHandler = () => {
		if (searchValue) navigation.push('Products', { search: searchValue })
	}

	return (
		<View
			style={{
				backgroundColor: 'rgba(239,235,241,255)',
			}}
		>
			<View
				style={tw`flex flex-row bg-white w-11/12 self-center items-center p-2 rounded-lg shadow-sm mb-2`}
			>
				<Ionicons name="search-outline" size={20} color={'black'} />

				<TextInput
					onChangeText={value => setSearchValue(value)}
					onSubmitEditing={searchHandler}
					onFocus={() => setFocused(true)}
					value={searchValue}
					style={[tw` text-xl ml-1 w-10/12`, { lineHeight: 24 }]}
					autoCapitalize="none"
					placeholder="Search"
					maxLength={20}
				/>

				{focused && (
					<Ionicons
						style={tw`ml-auto`}
						name="close-outline"
						size={20}
						color={'black'}
						onPress={() => setSearchValue('')}
					/>
				)}
			</View>
		</View>
	)
}

export default SearchBar
