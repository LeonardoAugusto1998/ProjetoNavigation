import * as React from 'react';
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function PlayList(){
    return(
        <LinearGradient start={[0.1, 0.6]} colors={['white' , 'green']} style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#fff'}}>
            <Text>Página Musicas</Text>
        </LinearGradient>
    );
}