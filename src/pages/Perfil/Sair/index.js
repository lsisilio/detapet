import React from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'

export default function Sair({ navigation }) {
	const back = () => {
		navigation.reset({
			index: 0,
			routes: [{ name: 'Login' }],
		})
	}

	return (
		<View style={styles.container}>
			<Text style={styles.texto} onPress={() => back()}>
				{' '}
				SAIR{' '}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		color: '#383838',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	texto: {
		fontWeight: 'bold',
		fontSize: 25,
	},
})
