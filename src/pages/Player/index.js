import * as React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Player({ route }){
    

        return(
    
        <LinearGradient start={[0.1, 0.6]} colors={['white' , 'red']} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Página Player</Text>
            <Text>{route.params.item.filename}</Text>
            <Text>{route.params.item.duration}</Text>
        </LinearGradient>
        );
    
}