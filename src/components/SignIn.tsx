import React, { useContext } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { gql, useMutation } from '@apollo/client'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouteParams } from '../navigation/Stack'
import useAuth from '../utils/useAuth'

const SIGN_IN_MUTATION = gql`
	mutation Mutation($email: String!, $password: String!) {
		signIn(email: $email, password: $password) {
			user {
				id
				name
				email
			}
			token
		}
	}
`

const Login: React.FC = () => {
	const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>()
	const [signInMutation] = useMutation(SIGN_IN_MUTATION)
	const { signIn } = useAuth()

	const loginHandler = (email: string, password: string) => {
		signInMutation({ variables: { email, password } })
			.then(res => {
				const token = res.data.signIn.token
				signIn(token)
			})
			.then(() => navigation.navigate('Home'))
			.then(() => Alert.alert('Successfully signed in'))
			.catch(e => Alert.alert(e.message))
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
			<Text style={{ textAlign: 'center', fontSize: 30 }}>Login</Text>
			<TextInput
				style={styles.textInput}
				onChangeText={formik.handleChange('email')}
				onBlur={formik.handleBlur('email')}
				value={formik.values.email}
				autoCapitalize="none"
			/>
			<TextInput
				style={styles.textInput}
				onChangeText={formik.handleChange('password')}
				onBlur={formik.handleBlur('password')}
				value={formik.values.password}
				autoCapitalize="none"
			/>
			<Button
				onPress={() => {
					formik.handleSubmit()
				}}
				title="Login"
			/>
		</View>
	)
}

export default Login

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'gray',
		padding: 5,
		margin: 5,
		borderRadius: 10,
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
