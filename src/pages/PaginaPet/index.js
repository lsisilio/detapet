import React, { useState } from 'react'
import {
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	ScrollView,
	TouchableOpacity,
	Button,
} from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import Modal from 'react-native-modal'
import MapView, { Marker } from 'react-native-maps'

const { height, width } = Dimensions.get('window')

let dimensions = Dimensions.get('window')
let imageHeight = Math.round((dimensions.width * 9) / 16)
let imageWidth = dimensions.width

export default function PaginaPet({ route }) {
	const [isModalVisible, setModalVisible] = useState(false)

	const toggleModal = () => {
		setModalVisible(!isModalVisible)
	}

	const {
		name,
		raca,
		especie,
		porte,
		cor,
		lat,
		long,
		data,
		bairro,
		imagem,
		email,
		mensagem,
		state,
		id,
	} = route.params.item

	return (
		<ScrollView style={styles.container}>
			<View>
				<Image style={styles.imagem} source={{ uri: imagem }} />
			</View>

			<View style={styles.fundo}>
				<Text style={styles.texto}> {name}</Text>

				<View style={styles.mesmalinha}>
					<View>
						<Text style={styles.titulo}> {especie} </Text>
						<Text style={styles.subtitulo}> Espécie </Text>
					</View>

					<View
						style={{
							borderRightColor: '#c4c4c4',
							borderRightWidth: 1,
						}}
					/>

					<View>
						<Text style={styles.titulo}> {raca} </Text>
						<Text style={styles.subtitulo}> Raça </Text>
					</View>

					<View
						style={{
							borderRightColor: '#c4c4c4',
							borderRightWidth: 1,
						}}
					/>

					<View>
						<Text style={styles.titulo}> {porte} </Text>
						<Text style={styles.subtitulo}> Porte </Text>
					</View>
				</View>

				<View style={styles.espaco}>
					<Text style={styles.titulo2}>{state} desde:</Text>

					<Text style={styles.subtitulo2}>{data}</Text>
				</View>

				<View style={mensagem ? styles.espaco : styles.nada}>
					<Text style={styles.titulo2}>Informações extras:</Text>

					<Text style={styles.subtitulo2}>{mensagem}</Text>
				</View>

				<View style={styles.espaco}>
					<Text style={styles.titulo2}>
						Região onde foi {state.toLowerCase()}:
					</Text>
				</View>
				<MapView
					style={styles.map}
					initialRegion={{
						latitude: lat,
						longitude: long,
						longitudeDelta: 0.05,
						latitudeDelta: 0.1,
					}}>
					<Marker
						coordinate={{
							latitude: lat,
							longitude: long,
						}}></Marker>
				</MapView>

				<TouchableOpacity style={styles.botao} onPress={toggleModal}>
					<Text style={styles.textobotao}> Entrar em contato </Text>
				</TouchableOpacity>

				<Modal isVisible={isModalVisible}>
					<View style={styles.modal}>
						<Text style={styles.modalText}>Email: {email}</Text>
						<TouchableOpacity style={styles.botao} onPress={toggleModal}>
							<Text style={styles.textobotao}> Fechar </Text>
						</TouchableOpacity>
					</View>
				</Modal>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#282828',
	},

	texto: {
		fontWeight: 'bold',
		fontSize: RFValue(22, 680),
		color: 'white',
		marginTop: '4%',
		marginLeft: '5%',
	},

	imagem: {
		height: height / 3,
		width: width,
	},

	imagem2: {
		height: height / 4,
		width: width * 0.9,
		alignSelf: 'center',
		borderRadius: 15,
		marginTop: '5%',
	},

	fundo: {
		backgroundColor: '#282828',
		marginTop: '-4%',
		paddingBottom: '10%',
		borderRadius: 20,
	},

	titulo: {
		fontSize: RFValue(14, 680),
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
	},

	titulo2: {
		fontSize: RFValue(13, 680),
		fontWeight: 'bold',
		color: 'white',
	},

	subtitulo: {
		fontSize: RFValue(10, 680),
		color: '#c4c4c4',
		textAlign: 'center',
	},

	subtitulo2: {
		fontSize: RFValue(11.5, 680),
		color: '#c4c4c4',
	},

	mesmalinha: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: '10%',
		marginRight: '5%',
		marginLeft: '5%',
		marginBottom: '10%',
	},

	espaco: {
		marginLeft: '6%',
		marginRight: '6%',
		marginBottom: '5%',
	},

	botao: {
		backgroundColor: '#9096de',
		alignItems: 'center',
		height: 48,
		justifyContent: 'center',
		borderRadius: 15,
		marginLeft: '5%',
		marginRight: '5%',
		marginTop: '10%',
		marginBottom: '3%',
	},

	textobotao: {
		color: '#FFFF',
		fontWeight: 'bold',
		fontSize: RFValue(12, 680),
	},
	nada: {
		display: 'none',
	},
	modal: {
		marginLeft: '5%',
		marginRight: '5%',
		marginTop: '30%',
		marginBottom: '30%',
		backgroundColor: '#828ADA',
		borderColor: '#151515',
		justifyContent: 'center',
		borderRadius: 15,
	},
	modalText: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: RFValue(12, 680),
		alignSelf: 'center',
		marginTop: '7%',
	},
	map: {
		width: Dimensions.get('window').width * 0.92,
		marginLeft: '4%',
		marginRight: '4%',
		marginBottom: '8%',
		height: Dimensions.get('window').height / 2,
		borderRadius: 6,
	},
})
