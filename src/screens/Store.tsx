import React, { useState } from 'react'
import tw from 'twrnc'
import { Alert, Text, View } from 'react-native'
import StoreList from '../components/StoreList'
import { StripeProvider, useStripe } from '@stripe/stripe-react-native'
import {
	useCreatePaymentIntentMutation,
	useGetPublishableKeyQuery,
} from '../generated/graphql'
import Spinner from '../ui/Spinner'

interface StoreProps {}

const Store: React.FC<StoreProps> = ({}) => {
	const [loading, setLoading] = useState<boolean>(false)
	const {
		loading: pubLoading,
		error: pubError,
		data: pubData,
	} = useGetPublishableKeyQuery()
	const [fetchUserSecret] = useCreatePaymentIntentMutation()
	const { initPaymentSheet, presentPaymentSheet } = useStripe()

	const handleItemPress = (amount: number) => {
		console.log('loading')
		setLoading(true)
		fetchUserSecret({ variables: { planAmount: amount } })
			.then(res =>
				initializePaymentSheet(res.data?.createPaymentIntent.userSecret!)
			)
			.then(() => {
				openPaymentSheet()
				setLoading(false)
				console.log('loading ended')
			})
			.catch(err => Alert.alert(err.message))
	}

	const initializePaymentSheet = async (secret: string) => {
		const { error } = await initPaymentSheet({
			applePay: true,
			merchantCountryCode: 'FR',
			paymentIntentClientSecret: secret,
		})

		if (error) {
			Alert.alert(error.message)
		}
	}

	const openPaymentSheet = async () => {
		const { error } = await presentPaymentSheet()

		if (error) {
			Alert.alert(error.message)
		}
	}

	if (pubLoading) return <Spinner />
	if (pubError) return <Text>There has been an error:{pubError.message}</Text>
	return (
		<StripeProvider
			publishableKey={pubData?.getPublishableKey!}
			merchantIdentifier={'merchant.fiftyfiftys.com'}
		>
			<View style={tw`flex-1`}>
				<View style={tw`w-11/12 bg-red-500 self-center rounded my-4`}>
					<Text style={tw`text-center text-2xl text-white font-bold`}>
						FF Coins
					</Text>
				</View>
				<StoreList onPress={handleItemPress} loading={loading} />
			</View>
		</StripeProvider>
	)
}

export default Store
