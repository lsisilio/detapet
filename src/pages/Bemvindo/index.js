import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Dimensions} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const {height, width} = Dimensions.get('window');

export default function Bemvindo({navigation}) {

  const tutorial = () => {
    navigation.navigate("Tutorial")
  }

  const politica = () => {
    navigation.navigate("Politica")
  }

  return (
    <View style={styles.container}>   

    <View>
      <Text style={styles.titulo}> Seja Bem vindo ao </Text>
    </View>

    <View>
      <Text style={styles.titulo2}> DETAPET </Text>
    </View>

    <View style={styles.responsivotexto}>
        <Text style={styles.texto}> 
          Leia nossos Termos de Serviço & Política de Privacidade abaixo 
          e continue para começar o tutorial.
        </Text>
    </View>

    <View style={styles.imagem}>    
      <Image style={styles.logo} source={require('../images/inicio.png')} />
    </View>

    <View style={styles.termos}>
        <Text style={styles.politica} onPress={ () => politica() }> Termos de Serviço </Text>
        <Text style={styles.politica} onPress={ () => politica() }> Política de Privacidade </Text>
      </View>
        <TouchableOpacity style={styles.botao} onPress={() => tutorial()}>
          <Text style={styles.textobotao}> Aceitar & Continuar </Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1f1f1f',
  },

  titulo: {
    fontSize: RFValue(24, 680),
    fontWeight: 'bold',
    color: '#f7f7f7',
  },

  titulo2: {
    fontSize: RFValue(24, 680),
    fontWeight: 'bold',
    color: '#606ACD',
  },

  responsivotexto: {
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '5%',
    paddingBottom: '10%',
    color: '#ebebeb'

  },

  texto: {
    fontSize: RFValue(11, 680),
    textAlign: 'center',
    color: '#c4c4c4',
    textAlign: 'center',
  },

  imagem: {
    height: height / 4,
    width: width,
    justifyContent: 'center',
    marginTop: '10%',
    paddingTop: '4%',
  },

  logo: {
    alignSelf: 'center',
    width: width / 1.2,
    height: height / 3,
  },

  termos: {
    marginTop: '25%',
  },

  politica: {
    fontSize: RFValue(10, 680),
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: '1%',
    color: '#FFFF',
    textAlign: 'center',
  },

  botao: {
    backgroundColor: "#606ACD",
    alignItems: "center",
    height: 52,
    justifyContent: 'center',
    borderRadius: 15,
    paddingLeft: '15%',
    paddingRight: '15%',
    marginTop: "10%",
  },

  textobotao: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: RFValue(13, 680),
  },
});