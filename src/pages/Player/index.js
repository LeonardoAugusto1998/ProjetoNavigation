import * as React from 'react';
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Player(){
    return(
        <LinearGradient colors={['white' , 'red']} style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#fff'}}>
            <Text>Página Player</Text>
        </LinearGradient>
    );
}