import React from 'react'
import { StyleSheet, Dimensions, View, Text } from 'react-native'
import EncontradosList from './EncontradosList'
const { height, width } = Dimensions.get('window')

let dimensions = Dimensions.get('window')
let imageHeight = Math.round((dimensions.width * 9) / 16)
let imageWidth = dimensions.width

export default function Encontrados({ pets }) {
	return (
		<View style={styles.container}>
			<EncontradosList data={pets} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: '5%',
		backgroundColor: '#121212',
	},
})
