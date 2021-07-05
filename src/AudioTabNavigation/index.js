
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';

import Musicas from '../pages/Musicas';
import Player from '../pages/Player';
import PlayList from '../pages/PlayList';


export default function AudioTabNavigation(){


    function PlusBottom({bn, color}){
        return(
          <LinearGradient colors={['white' , 'purple']} style={[s.addbut, {backgroundColor: bn ? '#8EA8F5' : '#567DF0'}]}>
            <Text><Ionicons name={bn ? 'play' : 'play-outline'} size={35} color={color}/></Text>
          </LinearGradient>
        );
      }

      const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator
        tabBarOptions={{
      style:{
        backgroundColor:'#052439',
        marginRight:45,
        marginLeft:45,
        bottom:25,
        borderRadius:15,
        elevation: 20,
        position:'absolute',
        shadowColor:'black',
        shadowOpacity: 2,
        shadowOffset:{
          width: 1,
          height:0
        }     
      },
      showLabel: false,
      inactiveTintColor:'#ddd',
      activeTintColor:'#FFF'
    }}
    >
        <Tab.Screen name='Musicas' component={Musicas} options={{
          tabBarIcon: ({focused, color, size}) => {
            return <Ionicons name={ focused ? 'headset' : 'headset-outline'} size={30} color={color}/>
          }
          
        }}/>
        <Tab.Screen name='Player' component={Player} options={{
          tabBarIcon: ({focused, color, size}) => {
            return <PlusBottom bn={focused} color={color} size={size}/>
          }
        }}/>
        <Tab.Screen name='PlayList' component={PlayList} options={{
          tabBarIcon: ({focused, color, size}) => {
            return <Ionicons name={ focused ? 'list-circle' : 'list-circle-outline'} size={34} color={color}/>
          }
          
        }}/>
        
      </Tab.Navigator>
    );
}

const s = StyleSheet.create({
    addbut:{
      bottom:25,
      width:55,
      height:55,
      borderRadius:35,
      justifyContent:'center',
      alignItems:'center',
      elevation:10,
      shadowOpacity: 2,
      shadowColor:'black'
    }
  });