import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Perdidos from '../Home/Perdidos/index'
import Encontrados from '../Home/Encontrados/index'
import petsAPI from '../../../api/petsAPI'

const Top = createMaterialTopTabNavigator()

const MyTop = () => {
	const [petsEncontrados, setPetsEncontrados] = useState([])
	const [petsPerdidos, setPetsPerdidos] = useState([])

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
				//encontrados
				// setPetsEncontrados([...response.data])
				var temporario = [...response.data]
				const encontradoFinal = temporario.filter(filtrarEncontrados)
				setPetsEncontrados(encontradoFinal)

				//perdidos
				// setPetsPerdidos([...response.data])
				const perdidoFinal = temporario.filter(filtrarPerdidos)
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

	return (
		<Top.Navigator
			screenOptions={{
				tabBarActiveTintColor: '#9ba1de',
				tabBarInactiveTintColor: '#dedede',
				tabBarPressColor: '#9096de',
				tabBarLabelStyle: { fontWeight: 'bold' },
				tabBarIndicatorStyle: { backgroundColor: '#9ba1de', height: '5%' },
				tabBarStyle: {
					backgroundColor: '#262626',
					paddingBottom: '1%',
					paddingTop: '10%',
				},
			}}>
			<Top.Screen
				name="Perdidos"
				children={() => <Perdidos pets={petsPerdidos} />}
			/>

			<Top.Screen
				name="Encontrados"
				children={() => <Encontrados pets={petsEncontrados} />}
			/>
		</Top.Navigator>
	)
}

export default MyTop
