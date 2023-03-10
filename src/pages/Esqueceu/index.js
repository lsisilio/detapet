import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image, Dimensions, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const {height, width} = Dimensions.get('window');

export default function Esqueceu() {
  let dimensions = Dimensions.get("window");
  let imageHeight = Math.round((dimensions.width * 9) / 16);
  let imageWidth = dimensions.width;
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#FFFF" translucent = {true}/>
      <View style={styles.imagem}> 
        <Image style={styles.cachorro} source={require('../images/logo_lilas.png')} />
      </View>

      <View style={styles.login}> 
        <Text style={styles.registre}> Esqueceu a senha? </Text>
        <Text style={styles.preencha}> Sem problema, coloque seu email e te enviaremos um link para resetar sua senha. </Text>

        <Text style={styles.informacoes}> Email: </Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
          />
        
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textobotao}> Resetar Senha </Text>
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
    height: height / 3.6,
    width: width,
    paddingTop: 65,
    justifyContent: 'center',

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
    marginTop: "18%",
    marginBottom: "20%",
    paddingBottom: "3%",
    borderRadius: 20,
  },

  registre: {
    color: "#FFFF",
    textAlign: 'center',
    marginTop: '8%',
    fontSize: RFValue(20, 680),
    fontWeight: 'bold',
  },

  preencha: {
    color: "#B9B9B9",
    textAlign: 'center',
    fontSize: RFValue(11.5, 680),
    marginBottom: '10%',
    marginTop: '1%',
    marginLeft: '4%',
    marginRight: '4%',
  },

  esqueceu: {
    color: "#B9B9B9",
    marginLeft: "5%",
    marginBottom: "6%",
    fontSize: RFValue(9, 680),
  },

  informacoes: {
    color: "#B9B9B9",
    marginLeft: "5%",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: '#606ACD',
    color: 'white',
  },

  final: {
    color: "#9599F5",
    fontSize: 10,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },

  bottom: {
    paddingTop: '40%',
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
    marginBottom: "5%",
  },

  textobotao: {
    color: "#FFFF",
    fontWeight: 'bold',
    fontSize: RFValue(12, 680),
  },

});