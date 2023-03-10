import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Alert, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MeusPets from '../Perfil/MeusPets';
import MeusPosts from '../Perfil/MeusPosts';
import Vip from '../Perfil/Vip';
import Configuracoes from '../Perfil/Configuracoes';
import Sair from '../Perfil/Sair';
import { color } from 'react-native-reanimated';

const Drawer = createDrawerNavigator();

const MyDrawer = ({navigation}) =>
 {
    const login = () => {
        navigation.reset ({
          index: 0,
          routes: [{ name: "Login" }]
        })
      }
    return (   
        <Drawer.Navigator
            screenOptions={{
                drawerActiveTintColor: '#9ba1de',
                drawerInactiveTintColor: '#c7c7c7',
                headerStyle: { backgroundColor: '#262626' },
                headerStatusBarHeight: 10,
                headerTintColor: 'white',
                headerTitleAlign: 'center',
                drawerContentStyle: { backgroundColor: '#262626' },
                drawerLabelStyle: { fontWeight: 'bold', fontSize: 14 },
            }}
        >

            <Drawer.Screen name="Meus Pets" component={MeusPets}
                options={{
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name="dog" color={color} size={24} />
                    ),
                }} />

            <Drawer.Screen name="Meus Posts" component={MeusPosts}
                options={{
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name="card-text-outline" color={color} size={24} />
                    ),
                }} />

            <Drawer.Screen name="Planos VIP's" component={Vip}
                options={{
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name="star" color={color} size={24} />
                    ),
                }} />

            <Drawer.Screen name="Configurações" component={Configuracoes}
                options={{
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name="cog" color={color} size={24} />
                    ),
                }} />

            <Drawer.Screen name="Sair" component={Sair}
                options={{
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name="exit-to-app" color={color} size={24} />
                    ),
                }}  />

        </Drawer.Navigator>
    );

}

export default MyDrawer;



