import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import CardPet from './CardPet'

const EncontradosList = ({ data, navigation }) => {
	const paginapet = () => {
		navigation.navigate('PaginaPet')
	}
	return (
		<FlatList
			data={data}
			keyExtractor={item => item.id}
			renderItem={({ item }) => (
				<CardPet item={item} onPress={() => paginapet()} />
			)}></FlatList>
	)
}
export default EncontradosList
