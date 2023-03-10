import React from 'react'
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	Dimensions,
} from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const { height, width } = Dimensions.get('window')

let dimensions = Dimensions.get('window')
let imageHeight = Math.round((dimensions.width * 9) / 16)
let imageWidth = dimensions.width

export default function Vip() {
	return (
		<View style={styles.container}>
			<MaterialCommunityIcons
				style={styles.icone}
				name="card-account-details-star-outline"
				color="#FFFF"
				size={80}
			/>

			<Text style={styles.texto}>
				Temos um plano VIP disponível para compra que oferece ao usuário uma
				coleira recarregável com um rastreador, para caso o usuário perca seu
				pet, ele seja facilmente rastreado.
			</Text>

			<View style={styles.bottomView}>
				<TouchableOpacity style={styles.botao}>
					<Text style={styles.textobotao}> Assinar plano VIP </Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#121212',
	},

	texto: {
		fontWeight: 'bold',
		fontSize: RFValue(14, 680),
		textAlign: 'center',
		color: 'white',
		marginTop: '30%',
		marginLeft: '5%',
		marginRight: '5%',
	},

	botao: {
		backgroundColor: '#9096de',
		alignItems: 'center',
		height: 48,
		width: width * 0.9,
		justifyContent: 'center',
		borderRadius: 10,
	},

	textobotao: {
		color: '#FFFF',
		fontWeight: 'bold',
		fontSize: RFValue(12, 680),
	},

	bottomView: {
		width: width,
		marginBottom: '10%',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		bottom: 0,
	},

	icone: {
		alignSelf: 'center',
		paddingTop: '15%',
	},
})
