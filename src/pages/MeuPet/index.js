import React from 'react'
import {
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	ScrollView,
	TouchableOpacity,
} from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const { height, width } = Dimensions.get('window')

let dimensions = Dimensions.get('window')
let imageHeight = Math.round((dimensions.width * 9) / 16)
let imageWidth = dimensions.width

export default function PetPerdido() {
	return (
		<ScrollView style={styles.container}>
			<View>
				<Image
					style={styles.imagem}
					source={require('../Perfil/img/vip.jpg')}
				/>
			</View>

			<View style={styles.fundo}>
				<View style={styles.mesmalinha2}>
					<Text style={styles.texto}>
						{' '}
						Scobby
						<MaterialCommunityIcons name="star" color="#ecf542" size={24} />
					</Text>

					<Text style={styles.editar}>Editar Perfil</Text>
				</View>

				<View style={styles.mesmalinha}>
					<View>
						<Text style={styles.titulo}> Cachorro </Text>
						<Text style={styles.subtitulo}> Espécie </Text>
					</View>

					<View
						style={{
							borderRightColor: '#c4c4c4',
							borderRightWidth: 1,
						}}
					/>

					<View>
						<Text style={styles.titulo}> Vira-Lata </Text>
						<Text style={styles.subtitulo}> Raça </Text>
					</View>

					<View
						style={{
							borderRightColor: '#c4c4c4',
							borderRightWidth: 1,
						}}
					/>

					<View>
						<Text style={styles.titulo}> Médio </Text>
						<Text style={styles.subtitulo}> Porte </Text>
					</View>
				</View>

				<View style={styles.espaco}>
					<Text style={styles.titulo2}>Informações:</Text>

					<Text style={styles.subtitulo2}>Devidamente vacinado, 4 anos</Text>
				</View>

				<View>
					<MapView
						style={styles.map}
						initialRegion={{
							latitude: -23.565166,
							longitude: -46.663472,
							longitudeDelta: 0.05,
							latitudeDelta: 0.1,
						}}>
						<Marker
							coordinate={{
								latitude: -23.565166,
								longitude: -46.663472,
							}}></Marker>
					</MapView>
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#282828',
	},
	map: {
		width: Dimensions.get('window').width * 0.92,
		marginLeft: '4%',
		marginRight: '4%',
		marginBottom: '8%',
		height: Dimensions.get('window').height / 2,
		borderRadius: 6,
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

	mesmalinha2: {
		flexDirection: 'row',
		justifyContent: 'space-between',
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
	},

	textobotao: {
		color: '#FFFF',
		fontWeight: 'bold',
		fontSize: RFValue(12, 680),
	},

	editar: {
		color: '#FFFF',
		textDecorationLine: 'underline',
		marginTop: '7%',
		marginRight: '5%',
		fontSize: RFValue(11, 680),
	},
})
