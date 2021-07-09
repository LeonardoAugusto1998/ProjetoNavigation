
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
          <LinearGradient start={[0.1, 0.4]} colors={['white' , 'grey']} style={[s.addbut, {backgroundColor: bn ? '#8EA8F5' : '#567DF0'}]}>
            <Text><Ionicons name={bn ? 'play' : 'play-outline'} size={35} color={color}/></Text>
          </LinearGradient>
        );
      }

      const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator
        tabBarOptions={{
      style:{
        backgroundColor:'rgba(255,255,255,0.2)',
        marginRight:70,
        marginLeft:70,
        bottom:25,
        borderRadius:25,
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
            return <Ionicons name={ focused ? 'headset' : 'headset-outline'} size={30} color={focused ? 'black' : '#d9d7dd'}/>
          }
          
        }}/>
        <Tab.Screen name='Player' component={Player} options={{
          tabBarIcon: ({focused, color, size}) => {
            return <PlusBottom bn={focused} color={focused ? 'black' : '#d9d7dd'} size={size}/>
          }
        }}/>
        <Tab.Screen name='PlayList' component={PlayList} options={{
          tabBarIcon: ({focused, color, size}) => {
            return <Ionicons name={ focused ? 'list-circle' : 'list-circle-outline'} size={34} color={focused ? 'black' : '#d9d7dd'}/>
          }
          
        }}/>
        
      </Tab.Navigator>
    );
}

const s = StyleSheet.create({
    addbut:{
      bottom:15,
      width:55,
      height:55,
      borderRadius:35,
      justifyContent:'center',
      alignItems:'center',
      elevation:20,
      shadowOpacity: 2,
      shadowColor:'black'
    }
  });