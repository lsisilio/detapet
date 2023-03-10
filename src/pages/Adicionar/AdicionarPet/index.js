import React from 'react'
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	TouchableOpacity,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const { height, width } = Dimensions.get('window')

let dimensions = Dimensions.get('window')
let imageHeight = Math.round((dimensions.width * 9) / 16)
let imageWidth = dimensions.width

export default function AdicionarPet({ navigation }) {
	const conhecer = () => {
		navigation.navigate('Conhecer')
	}

	const conhecerpet = () => {
		navigation.navigate('ConhecerPet')
	}

	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={styles.centro}>
					<View style={styles.mesmalinha}>
						<MaterialCommunityIcons
							style={styles.icone2}
							name="dog-side"
							color="#FFFF"
							size={60}
						/>
						<Text style={styles.texto}>O seu pet está perdido?</Text>
						<TouchableOpacity style={styles.botao} onPress={() => conhecer()}>
							<Text style={styles.textobotao}> Adicionar animal perdido </Text>
						</TouchableOpacity>
					</View>
					<View
						style={{
							borderBottomColor: '#383838',
							borderBottomWidth: 1,
							marginBottom: '30%',
							marginTop: '15%',
						}}
					/>

					<View style={styles.mesmalinha}>
						<MaterialCommunityIcons
							style={styles.icone}
							name="account-question"
							color="#FFFF"
							size={60}
						/>
						<Text style={styles.texto}>
							Achou um pet mas não sabe quem é o dono?
						</Text>
						<TouchableOpacity
							style={styles.botao}
							onPress={() => conhecerpet()}>
							<Text style={styles.textobotao}>
								{' '}
								Adicionar animal encontrado{' '}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
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
		color: 'white',
		textAlign: 'center',
		marginBottom: '5%',
		marginLeft: '5%',
		marginRight: '5%',
	},

	centro: {
		marginTop: '20%',
		alignSelf: 'center',
	},

	mesmalinha: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		paddingBottom: '2%',
	},

	botao: {
		backgroundColor: '#9096de',
		alignItems: 'center',
		height: 48,
		width: width * 0.9,
		justifyContent: 'center',
		borderRadius: 10,
		alignSelf: 'center',
	},

	textobotao: {
		color: '#FFFF',
		fontWeight: 'bold',
		fontSize: RFValue(12, 680),
	},

	icone: {
		alignSelf: 'center',
		marginBottom: '4%',
		marginTop: '-10%',
	},

	icone2: {
		alignSelf: 'center',
		marginBottom: '4%',
	},
})
