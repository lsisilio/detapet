import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image } from 'react-native';
import { Card } from 'react-native-material-cards';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {height, width} = Dimensions.get('window');

let dimensions = Dimensions.get("window");
let imageHeight = Math.round((dimensions.width * 9) / 16);
let imageWidth = dimensions.width;


export default function MeusPets({navigation}) {

    const pet = () => {
        navigation.navigate("MeusPet")
      }
      
    return (
        
        <ScrollView style={styles.container}>
            <Card style={styles.metade2} onPress={() => pet()}>
            <View styles={styles.fundo}>

                <View style={styles.borda}>
                    <Image
                    style={styles.imagem}
                    source={require('../img/vip.jpg')}
                    />
                </View>

                    <Text style={styles.titulo}> 
                        Scobby
                    </Text>

                    <View style={styles.mesmalinha}>

                        <Text style={styles.subtitulo}> 
                            São Paulo - Aclimação
                        </Text>    

                            

                    <MaterialCommunityIcons style={styles.subtitulo2} name="star" color='#ecf542' size={24} />

                    </View> 

            </View>
            </Card>
        </ScrollView>

    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: '5%',
        backgroundColor: '#121212',
    },

    metade2: {
        borderRadius: 10,
        backgroundColor: '#383838',
        marginBottom: '10%',
        marginLeft: '4%',
        marginRight: '4%',
    },

    fundo: {
        backgroundColor: '#383838',
        borderRadius: 5,
    },

    imagem: {
        height: height / 3.2,
        width: width * 0.885,
        borderRadius: 5,
    },

    borda: {
        padding: "2%",
    },

    titulo: {
        fontSize: RFValue(20, 680),
        fontWeight: 'bold',
        color: '#9ba1de',
        paddingTop: '3%',
        marginLeft: '4%',
        marginBottom: '0.5%',
    },

    subtitulo: {
        fontSize: RFValue(11.5, 680),
        color: '#ededed',
        marginLeft: '4%',
        marginBottom: '5%',
    },

    subtitulo2: {
        position: 'absolute',
        right: 0,
        marginRight: '1.5%',
        marginTop: '-0.5%',
    },

    mesmalinha: {
        flexDirection: 'row',
    },

   

});