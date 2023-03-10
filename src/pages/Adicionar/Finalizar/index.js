import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';

const {height, width} = Dimensions.get('window');

let dimensions = Dimensions.get("window");
let imageHeight = Math.round((dimensions.width * 9) / 16);
let imageWidth = dimensions.width;

export default function Conhecer({navigation}) {

    const routes = () => {
        navigation.navigate("Routes")
      }

    const [selectedLanguage, setSelectedLanguage] = useState();
    const [value, setValue] = React.useState('first');
    const [phone, setPhone] = React.useState('');

    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    return (
        <View style={styles.container}>

            <Text style={styles.texto}> 
                Finalizando...
            </Text>

                <Text style={styles.informacoes}> Email de contato </Text>
                    <TextInput
                        style={styles.input}
                    />

                <Text style={styles.informacoes}> Telefone (opcional) </Text>
                    <TextInput
                        style={styles.input}
                    />

                <Text style={styles.informacoes}> Recompensa (opcinal) </Text>
                    <TextInput
                        style={styles.input}
                    />

                <Text style={styles.informacoes}> Mensagem (opcional) </Text>
                    <TextInput
                        style={styles.input}
                    />

            <View style={styles.bottomView}>
            <TouchableOpacity style={styles.botao} onPress={showDialog}>
                <Text style={styles.textobotao}> Publicar </Text>
            </TouchableOpacity>

            </View>

            <Provider>
                <View>
                    <Portal>
                        <Dialog visible={visible} style={{ backgroundColor: '#9096de', borderRadius: 10}}>
                                <Dialog.Content>
                                    <Paragraph style={{
                                        textAlign: 'center', 
                                        fontWeight: 'bold', 
                                        fontSize: RFValue(14, 680),
                                        marginTop: '5%',
                                        color: '#FFFF',
                                        }}>
                                            O perfil do seu pet desaparecido foi completado! 
                                    </Paragraph>
                                </Dialog.Content>
            
                                    <MaterialCommunityIcons style={styles.icone} name="check-all" color='#53e051' size={80} />

                                <Dialog.Actions>
                                    <Button onPress={() => routes()}>OK</Button>
                                </Dialog.Actions>
                        </Dialog>
                    </Portal>
                </View>
            </Provider>

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

      icone: {
        alignSelf: 'center',
    },

});