import React, { useState } from 'react'
import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	TouchableOpacity,
	Dimensions,
	TextInput,
} from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Picker } from '@react-native-community/picker'
import apiClient from '../../../../api/client'
import MapView, { Marker } from 'react-native-maps'
import * as ImagePicker from 'expo-image-picker'
const { height, width } = Dimensions.get('window')

let dimensions = Dimensions.get('window')
let imageHeight = Math.round((dimensions.width * 9) / 16)
let imageWidth = dimensions.width

export default class ConhecerPet extends React.Component {
	criarPets = async () => {
		return await apiClient.post('/create', this.state)
	}

	constructor() {
		super()
		this.state = {
			bairro: '',
			lat: '',
			long: '',
			cor: 'Branco',
			data: '',
			email: '',
			especie: 'Cachorro',
			id: '',
			imagem: '',
			mensagem: '',
			name: '#Encontrado',
			porte: 'Pequeno',
			raca: '',
			state: 'Encontrado',
		}
	}
	submit() {
		this.state.id = new Date().getTime().toString()
		// const dataCreate = this.state
		this.criarPets(this.state)
	}

	createMarker(lat, long) {
		this.render(
			<Marker
				coordinate={{
					latitude: lat,
					longitude: long,
				}}
			/>
		)
	}
	onChangeValue = region => {
		this.setState({ lat: region.latitude })
		this.setState({ long: region.longitude })

		// console.log(this.state)
	}

	openImagePicker = async () => {
		const response = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
		})
		this.setState({ imagem: response.uri })
	}

	render() {
		return (
			<View style={styles.container}>
				<ScrollView>
					<Text style={styles.texto}>Sobre o pet</Text>

					<Text style={styles.informacoes}> Espécie</Text>
					<View style={styles.escolha}>
						<Picker
							style={styles.escolha2}
							selectedValue={this.state.especie}
							onValueChange={itemValue =>
								this.setState({ especie: itemValue })
							}>
							<Picker.Item label="Cachorro" value="Cachorro" />
							<Picker.Item label="Gato" value="Gato" />
						</Picker>
					</View>

					<Text style={styles.informacoes}> Raça</Text>
					<TextInput
						style={styles.input}
						onChangeText={text => {
							this.setState({ raca: text })
						}}
					/>

					<Text style={styles.informacoes}> Porte </Text>

					<View style={styles.escolha}>
						<Picker
							style={styles.escolha2}
							selectedValue={this.state.porte}
							onValueChange={itemValue => this.setState({ porte: itemValue })}>
							<Picker.Item label="Pequeno" value="Pequeno" />
							<Picker.Item label="Médio" value="Médio" />
							<Picker.Item label="Grande" value="Grande" />
						</Picker>
					</View>

					<Text style={styles.informacoes}> Cor aproximada </Text>

					<View style={styles.escolha}>
						<Picker
							style={styles.escolha2}
							selectedValue={this.state.cor}
							onValueChange={itemValue => this.setState({ cor: itemValue })}>
							<Picker.Item label="Branco" value="branco" />
							<Picker.Item label="Preto" value="preto" />
							<Picker.Item label="Marrom" value="marrom" />
							<Picker.Item label="Caramelo" value="caramelo" />
							<Picker.Item label="Amarelo" value="amarelo" />
							<Picker.Item label="Cinza" value="cinza" />
							<Picker.Item label="Preto e branco" value="preto e branco" />
							<Picker.Item label="Laranja" value="laranja" />
						</Picker>
					</View>

					<View>
						<Text style={styles.informacoes}> Imagem do pet </Text>
						<TouchableOpacity
							style={styles.btnUpload}
							onPress={this.openImagePicker}>
							<Text style={styles.txtUpload}> Upload </Text>
						</TouchableOpacity>
						{this.state.imagem != '' ? (
							<Image style={styles.img} source={{ uri: this.state.imagem }} />
						) : null}
					</View>

					<Text style={styles.texto}>Data e região onde foi encontrado</Text>

					<Text style={styles.informacoes}> Data (dd/mm/aa)</Text>
					<TextInput
						style={styles.input}
						onChangeText={text => {
							this.setState({ data: text })
						}}
					/>

					<Text style={[styles.informacoes, styles.margBot1]}>
						{' '}
						Região aproximada{' '}
					</Text>
					<MapView
						style={styles.map}
						initialRegion={{
							latitude: -23.55,
							longitude: -46.63,
							latitudeDelta: 0.1,
							longitudeDelta: 0.05,
						}}
						zoomControlEnabled={true}
						onRegionChangeComplete={this.onChangeValue}>
						<View style={{ top: '50%', left: '50%' }}>
							<Image
								style={{ height: 48, width: 48 }}
								source={{ uri: '../../../../assets/img/pin.png' }}
							/>
						</View>
					</MapView>

					<Text style={styles.texto}>Informações para contato</Text>

					<Text style={styles.informacoes}> Email</Text>
					<TextInput
						style={styles.input}
						onChangeText={text => {
							this.setState({ email: text })
						}}
					/>

					<Text style={styles.informacoes}>Mensagem (opcional)</Text>
					<TextInput
						style={styles.input}
						onChangeText={text => {
							this.setState({ mensagem: text })
						}}
					/>
					<Text style={styles.ultimo} />

					<View style={styles.bottomView}>
						<TouchableOpacity
							style={styles.botao}
							onPress={() => {
								this.submit()
							}}>
							<Text style={styles.textobotao}> Adicionar </Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#121212',
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
		fontSize: RFValue(18, 680),
		color: 'white',
		marginTop: '7%',
		marginLeft: '5%',
		marginRight: '5%',
		marginBottom: '7%',
	},

	botao: {
		backgroundColor: '#9096de',
		alignItems: 'center',
		height: 56,
		width: width,
		justifyContent: 'center',
	},

	textobotao: {
		color: '#FFFF',
		fontWeight: 'bold',
		fontSize: RFValue(12, 680),
	},

	bottomView: {
		width: width,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		bottom: 0,
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

	escolha: {
		height: 40,
		margin: 12,
		marginBottom: '7%',
		marginTop: '1.5%',
		marginHorizontal: '4%',
		borderWidth: 1,
		borderRadius: 5,
		borderColor: '#9ba1de',
	},

	escolha2: {
		height: 30,
		margin: 12,
		marginBottom: '5%',
		marginTop: '1.5%',
		color: '#FFFF',
	},
	imagem2: {
		height: height / 4,
		width: width * 0.9,
		alignSelf: 'center',
		borderRadius: 15,
		marginTop: '5%',
	},
	ultimo: {
		marginBottom: '5%',
	},
	margBot1: {
		marginBottom: '1%',
	},
	btnUpload: {
		marginLeft: '4%',
		marginTop: '1%',
		// marginBottom: '4%',
		backgroundColor: '#9ba1de',
		width: Dimensions.get('window').width * 0.3,
		height: 30,
		borderRadius: 6,
		justifyContent: 'center',
	},
	txtUpload: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 14,
		fontWeight: '700',
	},
	img: {
		width: Dimensions.get('window').width * 0.7,
		height: Dimensions.get('window').width * 0.4,
		marginLeft: '4%',
		marginTop: '2%',
		borderRadius: 6,
	},
})
