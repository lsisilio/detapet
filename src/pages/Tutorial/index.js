import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {height, width} = Dimensions.get('window');
 
const slides = [
  {
    key: '1',
    title: 'Seu cachorro está perdido? Você encontrou o app certo!',
    text: 'Ajude outros donos à acharem animais de estimação que se perderam ou poste um anúncio do seu pet no nosso aplicativo!',
    image: require('../images/informacao.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: '2',
    title: 'Nos baseamos na sua localização para melhor utilização do aplicativo',
    text: 'Baseado na sua localização, você tem acesso às informações de outros donos procurandos seus animais na sua região.',
    image: require('../images/localizacao.png'),
    backgroundColor: '#febe29',
  },
  {
    key: '3',
    title: 'Adicione informações importantes sobre seus pets perdidos',
    text: 'Informações como nome, cor, raça, tamanho, local que foi visto pela última vez podem te ajudar a achar mais rápido seu animalzinho :)',
    image: require('../images/notificacao.png'),
    backgroundColor: '#22bcb5',
  }
];

export default function Tutorial({navigation}) {
    const login = () => {
        navigation.navigate("Login")
    }

    const [showHome, setHome] = useState(false);

    function renderSlides({ item }){
        return(
            <View style={{ flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#1f1f1f' }}> 
          

                <Text 
                    style={{
                        paddingTop: 25,
                        paddingBottom: '10%',
                        fontSize: 22,
                        fontWeight: 'bold',
                        color: 'white',
                        alignSelf: 'center', 
                        textAlign: 'center',
                        marginLeft: '3%',
                        marginRight: '3%',
                    }}> 
                {item.title} </Text>

                <Image 
                    source={item.image}
                    style={{
                        width: width / 1.5,
                        height: height / 3.5,
                        marginVertical: 32,
                    }}
                />

                <Text style={{
                    textAlign: 'center',
                    color: '#f7f7f7',
                    paddingHorizontal: 25,
                    marginLeft: '5%',
                    paddingTop: '10%',
                    marginRight: '5%',
                    fontSize: 15,
                }}> 
                    {item.text} </Text>
                
                
            </View>
        )
    }

        return(
            <AppIntroSlider 
                renderItem={renderSlides}
                data={slides}
                activeDotStyle={{
                    backgroundColor: '#606ACD',
                    width: 30,
                }}
                dotStyle={{
                    backgroundColor: "#f7f7f7"
                }}
                renderNextButton={ () => {} }

                renderDoneButton={ () => 
                <View 
                    style={{ width: 42,
                        height: 42,
                        backgroundColor: '#b9beed',
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center',   
                        }}>

                    <Icon
                        name="md-checkmark"
                        color="#5d68d4"
                        size={24}
                    /> 
                </View>
                }

                onDone={() => login() }
            />
        );
    }

