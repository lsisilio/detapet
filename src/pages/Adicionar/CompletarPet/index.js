import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions, TextInput, Image } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaskInput from 'react-native-mask-input';

const {height, width} = Dimensions.get('window');

let dimensions = Dimensions.get("window");
let imageHeight = Math.round((dimensions.width * 9) / 16);
let imageWidth = dimensions.width;

export default function Conhecer({navigation}) {

    const fotopetdois = () => {
        navigation.navigate("FotoPetDois")
      }

    const [selectedLanguage, setSelectedLanguage] = useState();
    const [value, setValue] = React.useState('first');
    const [phone, setPhone] = React.useState('');


    return (
        <View style={styles.container}>

            <Text style={styles.texto}> 
                Informações importantes
            </Text>

            <Text style={styles.informacoes}> Data que foi perdido </Text>

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
                        /\d/, 
                        /\d/,
                        '/',
                        /\d/,
                        /\d/,
                        '/',
                        /\d/,
                        /\d/,
                        /\d/,
                        /\d/,
                    ]}
                />

                <Text style={styles.informacoes}> Local que o animal foi achado </Text>
                    <Image style={styles.imagem2} source={require('../images/mapa.png')} /> 
                    

            <View style={styles.bottomView}>
            <TouchableOpacity style={styles.botao} onPress={() => fotopetdois()}>
                <Text style={styles.textobotao}> Próximo </Text>
            </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#121212',
    },

    texto: {
        fontWeight: 'bold',
        fontSize: RFValue(18, 680),
        color: 'white',
        marginTop: '10%',
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: '10%',
    },

    botao: {
        backgroundColor: "#9096de",
        alignItems: "center",
        height: 56,
        width: width,
        justifyContent: 'center',
      },
    
      textobotao: {
        color: "#FFFF",
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
        color: "#B9B9B9",
        marginLeft: "4%",
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
        marginBottom: '9%',
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

      imagem2: {
        height: height / 4,
        width: width * 0.9,
        alignSelf: 'center',
        borderRadius: 15,
        marginTop: '5%',
    },

});