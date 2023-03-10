import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Top';
import Adicionar from '../Adicionar/AdicionarPet';
import Mapa from '../Mapa';
import Perfil from '../TopPerfil';

const Tab = createMaterialBottomTabNavigator();

const MyBottom = () => 
    {
    return(
        <Tab.Navigator
            activeColor="#9ba1de"
            inactiveColor="#c7c7c7"
            barStyle={{ 
                backgroundColor: '#262626', 
                paddingBottom: '1%', 
                paddingTop: '1%' 
            }}
        >

        <Tab.Screen name="Home" component={Home} 
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }}
        />
            
            <Tab.Screen name="Adicionar" component={Adicionar}
                options={{
                    tabBarLabel: 'Adicionar',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="plus" color={color} size={26} />
                    ),
                }}           
            />

            <Tab.Screen name="Mapa" component={Mapa}
                options={{
                    tabBarLabel: 'Mapa',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="map" color={color} size={26} />
                    ),
                }}
            />

            <Tab.Screen name="Perfil" component={Perfil}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />

        </Tab.Navigator>
    )
}

export default MyBottom;
