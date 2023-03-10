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
					source={require('../Home/img/cachorro.jpg')}
				/>
			</View>

			<View style={styles.fundo}>
				<Text style={styles.texto}> Nick</Text>

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
						<Text style={styles.titulo}> Samoieda </Text>
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
					<Text style={styles.titulo2}>Perdido desde:</Text>
					<Text style={styles.subtitulo2}>05/10/21</Text>
				</View>

				<View style={styles.espaco}>
					<Text style={styles.titulo2}>Informações extras:</Text>
					<Text style={styles.subtitulo2}>
						Nick tem os pelos branco, quando se perdeu usava um lenço xadrez no
						pescoço
					</Text>
				</View>

				<View style={styles.espaco}>
					<Text style={styles.titulo2}>Onde se perdeu:</Text>
					<Text style={styles.subtitulo2}>
						Aclimação, próximo ao Parque Aclimação
					</Text>
				</View>

				<TouchableOpacity style={styles.botao}>
					<Text style={styles.textobotao}> Entrar em contato com o dono </Text>
				</TouchableOpacity>
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
	},

	textobotao: {
		color: '#FFFF',
		fontWeight: 'bold',
		fontSize: RFValue(12, 680),
	},
})
