import React from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouteParams } from '../navigation/Stack'
import useAuth from '../utils/useAuth'
import { useLoginUserMutation } from '../generated/graphql'

const SignIn: React.FC = () => {
	const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>()
	const [signInMutation] = useLoginUserMutation()
	const { signIn } = useAuth()

	const loginHandler = async (email: string, password: string) => {
		try {
			const token = await signInMutation({ variables: { email, password } })
			signIn(token.data?.loginUser as string)
			Alert.alert('Successfully logged in.')
		} catch (e: any) {
			Alert.alert(e.message)
		}
	}

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: Yup.object({
			email: Yup.string().min(3, 'must be long').required('Email is required.'),
			password: Yup.string().required('Password is required.'),
		}),
		onSubmit: values => {
			loginHandler(values.email, values.password)
		},
	})

	return (
		<View style={styles.container}>
			<Text>Sign in</Text>
			<View>
				<Text>Email:</Text>
				<TextInput
					style={styles.textInput}
					placeholder="Enter your email"
					onChangeText={formik.handleChange('email')}
					onBlur={formik.handleBlur('email')}
					value={formik.values.email}
					autoCapitalize="none"
				/>
			</View>
			<View>
				<Text>Password:</Text>
				<TextInput
					style={styles.textInput}
					placeholder="Enter your password"
					onChangeText={formik.handleChange('password')}
					onBlur={formik.handleBlur('password')}
					value={formik.values.password}
					autoCapitalize="none"
				/>
			</View>

			<Text style={styles.question}>
				Don't have an account?
				<Text onPress={() => navigation.navigate('SignUp')}> Sign up.</Text>
			</Text>

			<Button
				onPress={() => {
					formik.handleSubmit()
				}}
				title="Sign in"
			/>
		</View>
	)
}

export default SignIn

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'gray',
		padding: 5,
		margin: 5,
		borderRadius: 10,
	},
	question: {
		fontSize: 17,
		textAlign: 'center',
	},
	textInput: {
		backgroundColor: 'white',
		borderWidth: 2,
		borderColor: 'black',
		padding: 5,
		marginVertical: 5,
		borderRadius: 20,
		fontSize: 20,
	},
	button: {
		textAlign: 'center',
		borderWidth: 2,
		padding: 4,
		marginTop: 10,
		borderRadius: 10,
		borderColor: 'black',
		backgroundColor: 'white',
		color: 'black',
		fontSize: 20,
	},
})
