import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Image, Dimensions, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import MaskInput from 'react-native-mask-input';
import {Picker} from '@react-native-community/picker';

const {height, width} = Dimensions.get('window');

export default function Final() {
  let dimensions = Dimensions.get("window");
  let imageHeight = Math.round((dimensions.width * 9) / 16);
  let imageWidth = dimensions.width;
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [phone, setPhone] = React.useState('');


  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "transparent" translucent = {true}/>
      <View style={styles.imagem}> 
        <Image style={styles.cachorro} source={require('../images/logo_lilas.png')} />
      </View>

      <View>
          <Text style={styles.texto1}> 2/2 </Text>
      </View>

      <View style={styles.centro}>
      <Image style={styles.barra} source={require('../images/barra2.png')} />
      </View>

      <View style={styles.login}> 
        <Text style={styles.preencha}> Preencha as informações para criar sua conta. </Text>

        <Text style={styles.informacoes}> Cidade: </Text>

          <View style={styles.escolha}>

            <Picker
                style={styles.escolha2}
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
            }>
              <Picker.Item label="São Paulo - SP" value="são paulo" />
              <Picker.Item label="Guarulhos - SP" value="guarulhos" />
              <Picker.Item label="Campinas - SP" value="campinas" />
              <Picker.Item label="São Bernardo do Campo - SP" value="são bernardo do campo" />
              <Picker.Item label="São José dos Campos - SP" value="são josé dos campos" />
              <Picker.Item label="Santo André - SP" value="santo andré" />
              <Picker.Item label="Ribeirão Preto  - SP" value="riberão preto" />
              <Picker.Item label="Osasco - SP" value="osasco" />
              <Picker.Item label="Sorocaba - SP" value="sorocaba" />
              <Picker.Item label="Mauá - SP" value="mauá" />
            </Picker>

          </View>

        <Text style={styles.informacoes}> Endereço: </Text>
          <TextInput
            style={styles.input}
            maxLength={35}
            keyboardType="name-phone-pad"
          />

        <View style={styles.duaslinhas}>
          <Text style={styles.informacoes}> CEP: </Text>
              <Text style={styles.esquerda}> Número Casa/Apto: </Text>
        </View>

          <View style={styles.duaslinhas}>
            <TextInput
              style={styles.cep}
              maxLength={8}
              keyboardType="numeric"
            />  
            
            <TextInput
              style={styles.cep2}
              maxLength={5}
              keyboardType="numeric"
            />  
          </View>

        <Text style={styles.informacoes}> Bairro: </Text>
          <TextInput
            style={styles.input}
            maxLength={35}
            keyboardType="name-phone-pad"
        /> 

        <Text style={styles.informacoes}> Telefone: </Text>
        <MaskInput
            style={styles.input}
            value={phone}

          onChangeText={(masked, unmasked, obfuscated) => {
            setPhone(masked);
            console.log(masked); 
            console.log(unmasked); 
            console.log(obfuscated); 
          }}

          mask= {[
            '(',
            /\d/, 
            /\d/,
            ')',
            ' ',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
          ]}
        />

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textobotao}> Cadastrar </Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
  },

  imagem: {
    height: height / 4,
    width: width,
    justifyContent: 'center',
  },

  texto1: {
    color: '#FFFF',
    textAlign: 'center',
  },

  centro: {
    justifyContent: 'center',
    paddingTop: "2%",
  },

  cachorro: {
    alignSelf: 'center',
    width: width / 2.8,
    height: height / 6.2,
  },

  barra: {
    width: width / 1.2,
    height: 7,
    borderRadius: 25,
    alignSelf: 'center',
  },

  texto: {
    color: '#FFFF',
    textAlign: 'center',
    fontSize: RFValue(14, 680),
    marginLeft: 30,
    marginRight: 30,
    marginTop: "3%",
  },

  subtexto: {
    color: '#FFFF',
    marginLeft: "8%",
    fontSize: RFValue(10, 680),
    marginTop: "10%",
  },

  login: {
    backgroundColor: "#282828",
    marginTop: "5%",
    marginBottom: "20%",
    paddingBottom: "3%",
    borderRadius: 20,
  },

  preencha: {
    color: "#B9B9B9",
    marginLeft: "5%",
    marginTop: "5%",
    marginBottom: "6%",
    fontSize: RFValue(11, 680),
  },

  esqueceu: {
    color: "#B9B9B9",
    marginLeft: "5%",
    marginBottom: "6%",
    fontSize: RFValue(9, 680),
  },

  informacoes: {
    color: "#B9B9B9",
    marginLeft: "4%",
  },

  cep: {
    height: 40,
    margin: 12,
    marginBottom: '7%',
    marginTop: '1.5%',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: '#9ba1de',
    width: width / 2.65,
    color: 'white',
  },

  cep2: {
    height: 40,
    margin: 12,
    marginBottom: '7%',
    marginTop: '1.5%',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: '#9ba1de',
    width: width / 2.5,
    color: 'white',
  },

  input: {
    height: 40,
    margin: 12,
    marginBottom: '7%',
    marginTop: '1.5%',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: '#9ba1de',
    color: 'white',
  },

  final: {
    color: "#9599F5",
    fontSize: 10,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },

  bottom: {
    bottom: 0, 
    marginLeft: '34%',
    marginRight: '34%',
  },  

  botao: {
    backgroundColor: "#606ACD",
    alignItems: "center",
    height: 48,
    justifyContent: 'center',
    borderRadius: 15,
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "5%",
  },

  textobotao: {
    color: "#FFFF",
    fontWeight: 'bold',
    fontSize: RFValue(12, 680),
  },

  escolha: {
    height: 40,
    margin: 12,
    marginBottom: '7%',
    marginTop: '1.5%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#9ba1de',
  },

  escolha2: {
    height: 30,
    margin: 12,
    marginBottom: '5%',
    marginTop: '1.5%',
    color: "#FFFF",
  },

  duaslinhas: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  esquerda: {
    color: "#B9B9B9",
    position: 'absolute',
    right: 30,
  },

});