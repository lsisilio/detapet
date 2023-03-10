import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import {
	StyleSheet,
	View,
	Image,
	Dimensions,
	Text,
	TextInput,
	TouchableOpacity,
	ScrollView,
	Alert,
} from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import Icon from 'react-native-vector-icons/FontAwesome'

const { height, width } = Dimensions.get('window')

export default function Login({ navigation }) {
	const registrar = () => {
		navigation.navigate('Registrar')
	}

	const esqueceu = () => {
		navigation.navigate('Esqueceu')
	}

	const routes = () => {
		navigation.reset({
			index: 0,
			routes: [{ name: 'Routes' }],
		})
	}

	let dimensions = Dimensions.get('window')
	let imageHeight = Math.round((dimensions.width * 9) / 16)
	let imageWidth = dimensions.width

	return (
		<ScrollView style={styles.container}>
			<StatusBar
				barStyle="dark-content"
				hidden={false}
				backgroundColor="transparent"
				translucent={true}
			/>
			<View style={styles.imagem}>
				<Image
					style={{
						height: height / 3.2,
						width: width,
					}}
					source={require('../images/login.png')}
				/>
			</View>

			<View>
				<Text style={styles.texto}>
					AJUDE DONOS A ACHAREM SEUS ANIMAIS COM O SISTEMA DE NOTIFICAÇÃO DO
				</Text>

				<Text style={styles.texto1}>DETAPET.</Text>
			</View>

			<View style={styles.duaslinhas}>
				<Text style={styles.subtexto}>Login |</Text>
				<Text style={styles.subtexto2} onPress={() => registrar()}>
					Registre-se
				</Text>
			</View>

			<View style={styles.login}>
				<View style={styles.mesmalinha}>
					<Text style={styles.faca_login}> LOGIN </Text>
					<Icon style={styles.icone} name="sign-in" color="white" size={30} />
				</View>

				<Text style={styles.bemvindo}>
					{' '}
					Seja bem-vindo de volta à sua conta.{' '}
				</Text>

				<Text style={styles.informacoes}> Email: </Text>
				<TextInput style={styles.input} />

				<Text style={styles.informacoes}> Senha: </Text>
				<TextInput secureTextEntry style={styles.input2} />

				<Text style={styles.esqueceu} onPress={() => esqueceu()}>
					{' '}
					Esqueceu a senha?{' '}
				</Text>

				<TouchableOpacity style={styles.botao} onPress={() => routes()}>
					<Text style={styles.textobotao}> Continuar </Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#151515',
	},

	imagem: {
		marginTop: '10%',
	},

	texto: {
		color: '#FFFF',
		textAlign: 'center',
		fontSize: RFValue(13.5, 680),
		marginLeft: '6%',
		fontWeight: '700',
		marginRight: '6%',
		marginTop: '4%',
	},

	texto1: {
		color: '#606ACD',
		textAlign: 'center',
		fontSize: RFValue(16, 680),
		marginLeft: '6%',
		fontWeight: '700',
		marginRight: '6%',
	},

	subtexto: {
		color: '#FFFF',
		marginLeft: '4%',
		fontSize: RFValue(12.5, 680),
		fontWeight: 'bold',
		marginTop: '10%',
	},

	subtexto2: {
		color: '#C4C4C4',
		marginLeft: '2%',
		marginTop: '10.1%',
		fontSize: RFValue(12.5, 680),
		textDecorationLine: 'underline',
	},

	duaslinhas: {
		flexDirection: 'row',
	},

	login: {
		backgroundColor: '#282828',
		marginTop: '3%',
		paddingBottom: '10%',
		borderRadius: 20,
	},

	faca_login: {
		color: '#FFFF',
		textAlign: 'center',
		marginTop: '8%',
		fontSize: RFValue(20, 680),
		fontWeight: 'bold',
	},

	icone: {
		marginTop: '7%',
		marginLeft: '1%',
	},

	bemvindo: {
		color: '#B9B9B9',
		textAlign: 'center',
		fontSize: RFValue(12, 680),
		marginBottom: '10%',
		marginTop: '1%',
	},

	esqueceu: {
		color: '#B9B9B9',
		marginLeft: '4%',
		marginBottom: '6%',
		fontSize: RFValue(11, 680),
	},

	informacoes: {
		color: '#B9B9B9',
		marginLeft: '4%',
	},

	input: {
		height: 40,
		marginTop: '1%',
		marginLeft: '4%',
		marginRight: '4%',
		marginBottom: '8%',
		borderWidth: 1,
		borderRadius: 5,
		padding: 10,
		borderColor: '#9ba1de',
		color: '#FFFF',
	},

	input2: {
		height: 40,
		marginTop: '1%',
		marginLeft: '4%',
		marginRight: '4%',
		marginBottom: '2%',
		borderWidth: 1,
		borderRadius: 5,
		padding: 10,
		borderColor: '#9ba1de',
		color: '#FFFF',
	},

	final: {
		color: '#9599F5',
		fontSize: 10,
		textDecorationLine: 'underline',
		textAlign: 'center',
	},

	botao: {
		backgroundColor: '#606ACD',
		alignItems: 'center',
		height: 48,
		justifyContent: 'center',
		borderRadius: 15,
		marginLeft: '5%',
		marginRight: '5%',
		marginTop: '5%',
	},

	textobotao: {
		color: '#FFFF',
		fontWeight: 'bold',
		fontSize: RFValue(12, 680),
	},

	mesmalinha: {
		flexDirection: 'row',
		alignSelf: 'center',
	},

	label: {
		fontSize: RFValue(12, 680),
		color: '#fff',
		marginBottom: '1%',
		marginLeft: '4%',
	},
})
