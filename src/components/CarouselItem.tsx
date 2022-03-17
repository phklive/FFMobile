import React from 'react'
import tw from 'twrnc'
import { Image, useWindowDimensions, View } from 'react-native'

interface CarouselItemProps {
	image: string
}

const CarouselItem: React.FC<CarouselItemProps> = ({ image }) => {
	const { width } = useWindowDimensions()
	return (
		<View style={[tw``, { width: width - 20 }]}>
			<Image
				source={{
					uri: `${image}`,
				}}
				style={[
					{
						width: width - 20,
						height: 200,
						alignSelf: 'center',
						resizeMode: 'contain',
					},
				]}
			/>
		</View>
	)
}

export default CarouselItem
