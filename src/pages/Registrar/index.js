import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image, Dimensions, Text, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Icon from 'react-native-vector-icons/FontAwesome';

const {height, width} = Dimensions.get('window');

export default function Registrar({navigation}) {

  const routes = () => {
    navigation.reset ({
      index: 0,
      routes: [{ name: "Routes" }]
    })
  }

  let dimensions = Dimensions.get("window");
  let imageHeight = Math.round((dimensions.width * 9) / 16);
  let imageWidth = dimensions.width;
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "transparent" translucent = {true}/>
      <View style={styles.imagem}> 
        <Image style={styles.cachorro} source={require('../images/logo_lilas.png')} />
      </View>

      <View style={styles.login}> 

        <Text style={styles.registre}> REGISTRE-SE </Text>

        <Text style={styles.preencha}> Preencha as informações para criar sua conta. </Text>

        <Text style={styles.informacoes}> Nome e sobrenome: </Text>
          <TextInput
            style={styles.input}
            keyboardType="name-phone-pad"
          />

        <Text style={styles.informacoes}> Email: </Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
          />

        <Text style={styles.informacoes}> Senha: </Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            keyboardType="numeric"
          />        
        
        <TouchableOpacity style={styles.botao} onPress={() => routes()}>
          <Text style={styles.textobotao}> Continuar </Text>
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
    width: width ,
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
    width: width / 3,
    height: height / 6.6,
  },

  barra: {
    width: width / 1.2,
    height: 7,
    borderRadius: 20,
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

  input: {
    height: 40,
    margin: 12,
    marginBottom: '7%',
    marginTop: '1.5%',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: '#9ba1de',
    color: '#FFFF',
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

});