import React from 'react'
import tw from 'twrnc'
import { View, Image, Text } from 'react-native'

interface POTDProps {}

const POTD: React.FC<POTDProps> = ({}) => {
	return (
		<View style={tw`mt-2`}>
			<Image
				source={{
					uri: 'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
				}}
				style={tw`h-55 w-11/12 self-center rounded`}
			/>
		</View>
	)
}

export default POTD
