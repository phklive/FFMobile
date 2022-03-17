import React from 'react'
import { View } from 'react-native'
import tw from 'twrnc'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
	return (
		<View
			style={[
				tw`h-1/18 bg-white`,
				{ backgroundColor: 'rgba(239, 235, 241, 255)' },
			]}
		/>
	)
}

export default Header
