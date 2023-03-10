import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {height, width} = Dimensions.get('window');

let dimensions = Dimensions.get("window");
let imageHeight = Math.round((dimensions.width * 9) / 16);
let imageWidth = dimensions.width;


export default function Configuracoes({navigation}) {

    const politica = () => {
        navigation.navigate("Politica")
      }

    return (
        <View style={styles.container}>
            <MaterialCommunityIcons style={styles.icone} name="cog" color='#FFFF' size={80} />
            <View style={styles.centro}>

                <View style={styles.mesmalinha}>
                    <Text style={styles.texto}>
                        Mudar Senha
                    </Text>
                        <MaterialCommunityIcons name="pencil" color='#9ba1de' size={24} />
                </View>

                <View
                    style={{
                        borderBottomColor: '#383838',
                        borderBottomWidth: 1,
                        marginBottom: '5%',
                        marginLeft: '7%',
                        marginRight: '7%',
                    }}
                />
                
            
                <View style={styles.mesmalinha}>
                    <Text style={styles.texto}>
                        Atualizar Informações
                    </Text>
                        <MaterialCommunityIcons name="folder" color='#9ba1de' size={24} />
                </View>

                
                <View
                    style={{
                        borderBottomColor: '#383838',
                        borderBottomWidth: 1,
                        marginBottom: '5%',
                        marginLeft: '7%',
                        marginRight: '7%',
                    }}
                />

                <View style={styles.mesmalinha}>
                    <Text style={styles.texto} onPress={ () => politica() }>
                        Termos de serviço
                    </Text>
                        <MaterialCommunityIcons name="book-open-variant" color='#9ba1de' size={24} onPress={ () => politica() }/>
                </View>

                
                <View
                    style={{
                        borderBottomColor: '#383838',
                        borderBottomWidth: 1,
                        marginBottom: '5%',
                        marginLeft: '7%',
                        marginRight: '7%',
                    }}
                />

                <View style={styles.mesmalinha}>
                    <Text style={styles.texto} onPress={ () => politica() }>
                        Política de privacidade
                    </Text>
                        <MaterialCommunityIcons name="book-open-variant" color='#9ba1de' size={24} onPress={ () => politica() }/>
                </View>

                <View
                    style={{
                        borderBottomColor: '#383838',
                        borderBottomWidth: 1,
                        marginBottom: '5%',
                        marginLeft: '7%',
                        marginRight: '7%',
                    }}
                />
            
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#121212'
    },

    texto: {
        fontWeight: 'bold',
        fontSize: RFValue(16, 680),
        color: 'white',
    },

    centro: {
        marginTop: '25%',
    },

    mesmalinha: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: '2%',
        marginLeft: '7%',
        marginRight: '7%',
    },

    icone: {
        alignSelf: 'center',
        paddingTop: '15%',
    },
});