import React, { Component } from 'react'
import {
	View,
	Text,
	Image,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'

const { height, width } = Dimensions.get('window')
let dimensions = Dimensions.get('window')
let imageHeight = Math.round((dimensions.width * 9) / 16)
let imageWidth = dimensions.width

export default function CardPet({ item }) {
	const navigation = useNavigation()
	const {
		name,
		raca,
		especie,
		porte,
		cor,
		data,
		bairro,
		imagem,
		email,
		mensagem,
		state,
		id,
	} = item

	const uriImagem = `../../../../assets/img/${imagem}`
	return (
		<View style={styles.metade2}>
			<TouchableOpacity
				onPress={() => navigation.navigate('PaginaPet', { item })}
				item={item}>
				<View styles={styles.fundo}>
					<View style={styles.borda}>
						<Image
							style={styles.imagem}
							//fazendo assim dá erro de chamada inválida
							//require(`../../../../assets/img/${imagem}`)

							//dessa forma não da erro, mas também não carrega a foto
							source={{ uri: item.imagem }}
						/>
					</View>
					<Text style={styles.titulo}>{name}</Text>
					<View style={styles.mesmalinha}>
						<Text style={styles.subtitulo}>{raca}</Text>
						<Text style={styles.subtitulo2}>{data}</Text>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	metade: {
		alignItems: 'center',
		alignSelf: 'center',
		backgroundColor: '#383838',
		borderRadius: 10,
		marginBottom: '10%',
		width: width / 1.1,
		height: height / 3.5,
	},

	metade2: {
		borderRadius: 10,
		backgroundColor: '#383838',
		marginBottom: '10%',
		marginLeft: '4%',
		marginRight: '4%',
	},

	fundo: {
		backgroundColor: '#383838',
		borderRadius: 5,
	},

	imagem: {
		height: height / 3.2,
		width: width * 0.885,
		borderRadius: 5,
	},

	borda: {
		padding: '2%',
	},

	titulo: {
		fontSize: RFValue(20, 680),
		fontWeight: 'bold',
		color: '#9ba1de',
		paddingTop: '3%',
		marginLeft: '4%',
		marginBottom: '0.5%',
	},

	subtitulo: {
		fontSize: RFValue(11.5, 680),
		color: '#ededed',
		marginLeft: '4%',
		marginBottom: '5%',
	},

	subtitulo2: {
		fontSize: RFValue(10, 680),
		color: '#c7c7c7',
		position: 'absolute',
		right: 0,
		marginRight: '1.5%',
		marginTop: '0.5%',
	},

	mesmalinha: {
		flexDirection: 'row',
	},
})
