import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import petsAPI from '../../../api/petsAPI'
import { useNavigation } from '@react-navigation/native'
// import * as Location from 'expo-location'
// import * as Permissions from 'expo-permissions'

export default function Mapa() {
	const navigation = useNavigation()

	const [petsEncontrados, setPetsEncontrados] = useState([])
	const [petsPerdidos, setPetsPerdidos] = useState([])
	const [todosPets, setTodosPets] = useState([])

	function filtrarEncontrados(value) {
		if (value.state == 'Encontrado') {
			return value
		}
	}
	function filtrarPerdidos(value) {
		if (value.state == 'Perdido') {
			return value
		}
	}

	const filterPets = async () => {
		const allPets = await petsAPI
			.getAll()
			.then(function (response) {
				setTodosPets([...response.data])
				setPetsEncontrados([...response.data])
				setPetsPerdidos([...response.data])

				//encontrados
				const encontradoFinal = petsEncontrados.filter(filtrarEncontrados)
				setPetsEncontrados(encontradoFinal)

				//perdidos
				const perdidoFinal = petsPerdidos.filter(filtrarPerdidos)
				setPetsPerdidos(perdidoFinal)
				// console.log(response.data, 'AllPets')
			})
			.catch(error => {
				console.log(error)
			})
	}

	useEffect(() => {
		filterPets()
	}, [])

	useEffect(() => {
		// console.log(petsEncontrados)
		// console.log(petsPerdidos)
	}, [petsEncontrados || petsPerdidos])

	function marcador() {
		return todosPets.map(item => {
			var lati = parseFloat(item.lat)
			var longi = parseFloat(item.long)
			return (
				<Marker
					key={item.id}
					coordinate={{
						latitude: lati,
						longitude: longi,
					}}
					pinColor={'#606ACD'}>
					<Callout
						onPress={() => navigation.navigate('PaginaPet', { item })}
						item={item}>
						<View>
							<View style={styles.bubble}>
								<Text style={styles.titleCallout}>
									{item.name}, {item.raca}
								</Text>
								<Text style={{ color: 'white' }}>Saber mais</Text>
								<Image
									style={styles.imageCallout}
									source={{ uri: item.imagem }}
								/>
							</View>
							<View style={styles.arrowBorder} />
							<View style={styles.arrow} />
						</View>
					</Callout>
				</Marker>
			)
		})
	}

	return (
		<View style={styles.container}>
			<MapView
				style={styles.map}
				initialRegion={{
					latitude: -23.55,
					longitude: -46.63,
					latitudeDelta: 0.1,
					longitudeDelta: 0.05,
				}}
				zoomControlEnabled={true}>
				{marcador()}
			</MapView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	texto: {
		fontWeight: 'bold',
		fontSize: 25,
	},

	map: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},

	bubble: {
		flexDirection: 'column',
		alignSelf: 'flex-start',
		backgroundColor: '#151515',
		borderRadius: 6,
		borderColor: 'transparent',
		borderWidth: 0.5,
		padding: 15,
		width: 150,
	},

	arrow: {
		backgroundColor: '#fff',
		borderColor: 'transparent',
		borderTopColor: '#151515',
		borderWidth: 16,
		alignSelf: 'center',
		marginTop: -32,
	},
	arrowBorder: {
		backgroundColor: '#151515',
		borderColor: 'transparent',
		borderTopColor: '#151515',
		borderWidth: 16,
		alignSelf: 'center',
		marginTop: -0.5,
		// marginBottom: -15
	},

	titleCallout: {
		fontSize: 16,
		marginBottom: 5,
		color: 'white',
		fontWeight: 'bold',
	},

	imageCallout: {
		width: '100%',
		height: 80,
	},
})
