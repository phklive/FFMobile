import React from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouteParams } from '../navigation/Stack'
import useAuth from '../utils/useAuth'
import { useCreateUserMutation } from '../generated/graphql'

const SignUp: React.FC = () => {
	const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>()
	const [signUpMutation] = useCreateUserMutation()
	const { signIn } = useAuth()

	const signUpHandler = async (
		name: string,
		email: string,
		password: string
	) => {
		try {
			const token = await signUpMutation({
				variables: { name, email, password },
			})
			signIn(token.data?.createUser as string)
			Alert.alert('Successfully signed up.')
		} catch (e: any) {
			Alert.alert(e.message)
		}
	}

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.min(3, 'Must be longer than 3 characters.')
				.max(20, 'Must not be longer than 20 characters.')
				.required('Name is required.'),
			email: Yup.string().min(3, 'must be long').required('Email is required.'),
			password: Yup.string().required('Password is required.'),
		}),
		onSubmit: values => {
			signUpHandler(values.name, values.email, values.password)
		},
	})

	return (
		<View style={styles.container}>
			<Text style={{ textAlign: 'center', fontSize: 30 }}>Sign up</Text>
			<View>
				<Text>Name:</Text>
				<TextInput
					style={styles.textInput}
					placeholder="Enter your name"
					onChangeText={formik.handleChange('name')}
					onBlur={formik.handleBlur('name')}
					value={formik.values.name}
					autoCapitalize="none"
				/>
			</View>

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
				Already have an account?
				<Text
					onPress={() => navigation.navigate('SignIn')}
					style={styles.questionLink}
				>
					{' '}
					Sign in.
				</Text>
			</Text>
			<Button
				onPress={() => {
					formik.handleSubmit()
				}}
				title="Sign up"
			/>
		</View>
	)
}

export default SignUp

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
	questionLink: {},
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
