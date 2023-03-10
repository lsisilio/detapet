import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from './src/pages/Login/index'
import Registrar from './src/pages/Registrar/index'
import Esqueceu from './src/pages/Esqueceu/index'
import Final from './src/pages/Final/index'
import Tutorial from './src/pages/Tutorial'
import Bemvindo from './src/pages/Bemvindo'
import Politica from './src/pages/Politica/index'
import Routes from './src/pages/routes'
import PetPerdido from './src/pages/PetPerdido'
import PaginaPet from './src/pages/PaginaPet'
import MeusPet from './src/pages/MeuPet'
import MeusPost from './src/pages/MeuPost'
import Conhecer from './src/pages/Adicionar/Conhecer'
import Completar from './src/pages/Adicionar/Completar'
import FotoPet from './src/pages/Adicionar/FotoPet'
import Finalizar from './src/pages/Adicionar/Finalizar'
import ConhecerPet from './src/pages/Adicionar/ConhecerPet'
import CompletarPet from './src/pages/Adicionar/CompletarPet'
import FotoPetDois from './src/pages/Adicionar/FotoPetDois'
import FinalizarPet from './src/pages/Adicionar/FinalizarPet'

const Stack = createStackNavigator()

function MyStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Bemvindo"
				component={Bemvindo}
				options={{
					headerShown: false,
					gestureEnabled: true,
					cardOverlayEnabled: true,
				}}
			/>

			<Stack.Screen
				name="Tutorial"
				component={Tutorial}
				options={{
					headerShown: false,
					gestureEnabled: true,
					cardOverlayEnabled: true,
				}}
			/>

			<Stack.Screen
				name="Politica"
				component={Politica}
				options={{
					headerTintColor: 'black',
					headerStyle: { backgroundColor: 'white' },
					title: '',
				}}
			/>

			<Stack.Screen
				name="Login"
				component={Login}
				options={{
					headerShown: false,
					gestureEnabled: true,
					cardOverlayEnabled: true,
				}}
			/>

			<Stack.Screen
				name="Registrar"
				component={Registrar}
				options={{
					headerTintColor: 'white',
					headerStyle: { backgroundColor: '#121212' },
					title: '',
				}}
			/>

			<Stack.Screen
				name="Esqueceu"
				component={Esqueceu}
				options={{
					headerTintColor: 'white',
					headerStyle: { backgroundColor: '#121212' },
					title: '',
				}}
			/>

			<Stack.Screen
				name="Final"
				component={Final}
				options={{
					headerTintColor: 'white',
					headerStyle: { backgroundColor: '#121212' },
					title: '',
				}}
			/>

			<Stack.Screen
				name="Routes"
				component={Routes}
				options={{
					headerShown: false,
					gestureEnabled: true,
					cardOverlayEnabled: true,
				}}
			/>

			<Stack.Screen
				name="PetPerdido"
				component={PetPerdido}
				options={{
					headerTintColor: 'white',
					headerStyle: { backgroundColor: '#282828' },
					title: '',
				}}
			/>

			<Stack.Screen
				name="PaginaPet"
				component={PaginaPet}
				options={{
					headerTintColor: 'white',
					headerStyle: { backgroundColor: '#282828' },
					title: '',
				}}
			/>

			<Stack.Screen
				name="MeusPet"
				component={MeusPet}
				options={{
					headerTintColor: 'white',
					headerStyle: { backgroundColor: '#282828' },
					title: '',
				}}
			/>

			<Stack.Screen
				name="MeusPost"
				component={MeusPost}
				options={{
					headerTintColor: 'white',
					headerStyle: { backgroundColor: '#282828' },
					title: '',
				}}
			/>

			<Stack.Screen
				name="Conhecer"
				component={Conhecer}
				options={{
					headerTintColor: 'white',
					headerStyle: { backgroundColor: '#121212' },
					title: 'Adicionar Pet Perdido',
				}}
			/>

			<Stack.Screen
				name="Completar"
				component={Completar}
				options={{
					headerTintColor: 'white',
					headerStyle: { backgroundColor: '#121212' },
					title: '2/4',
				}}
			/>

			<Stack.Screen
				name="FotoPet"
				component={FotoPet}
				options={{
					headerTintColor: 'white',
					headerStyle: { backgroundColor: '#121212' },
					title: '3/4',
				}}
			/>

			<Stack.Screen
				name="Finalizar"
				component={Finalizar}
				options={{
					headerTintColor: 'white',
					headerStyle: { backgroundColor: '#121212' },
					title: '4/4',
				}}
			/>

			<Stack.Screen
				name="ConhecerPet"
				component={ConhecerPet}
				options={{
					headerTintColor: 'white',
					headerStyle: { backgroundColor: '#121212' },
					title: 'Adicionar Pet Encontrado',
				}}
			/>

			<Stack.Screen
				name="CompletarPet"
				component={CompletarPet}
				options={{
					headerTintColor: 'white',
					headerStyle: { backgroundColor: '#121212' },
					title: '2/4',
				}}
			/>

			<Stack.Screen
				name="FotoPetDois"
				component={FotoPetDois}
				options={{
					headerTintColor: 'white',
					headerStyle: { backgroundColor: '#121212' },
					title: '3/4',
				}}
			/>

			<Stack.Screen
				name="FinalizarPet"
				component={FinalizarPet}
				options={{
					headerTintColor: 'white',
					headerStyle: { backgroundColor: '#121212' },
					title: '4/4',
				}}
			/>
		</Stack.Navigator>
	)
}

export default function App() {
	return (
		<NavigationContainer>
			<MyStack />
		</NavigationContainer>
	)
}
