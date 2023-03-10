import React from 'react'
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	ScrollView,
	Image,
} from 'react-native'
import { Card } from 'react-native-material-cards'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

const { height, width } = Dimensions.get('window')

let dimensions = Dimensions.get('window')
let imageHeight = Math.round((dimensions.width * 9) / 16)
let imageWidth = dimensions.width

export default function Perdidos({ navigation }) {
	const post = () => {
		navigation.navigate('MeusPost')
	}

	return (
		<ScrollView style={styles.container}>
			<Card style={styles.metade2} onPress={() => post()}>
				<View styles={styles.fundo}>
					<View style={styles.borda}>
						<Image
							style={styles.imagem}
							source={require('../img/cachorro.jpg')}
						/>
					</View>

					<Text style={styles.titulo}>Nick</Text>

					<View style={styles.mesmalinha}>
						<Text style={styles.subtitulo}>Aclimação</Text>

						<Text style={styles.subtitulo2}>05/10/21</Text>
					</View>
				</View>
			</Card>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: '5%',
		backgroundColor: '#121212',
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
