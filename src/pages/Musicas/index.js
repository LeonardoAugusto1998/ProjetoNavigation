import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text} from 'react-native';



export default function Musicas({ navigation }){
    return(
        <LinearGradient colors={['white' , 'blue']} style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#fff'}}>
            <Text>Página Musicas</Text>
        </LinearGradient>
    );
}