
import React, { createContext, useEffect } from "react";
import * as MediaLibrary from 'expo-media-library';
import { Alert } from "react-native";


export const AuthContext = createContext({})
export default function AudioProvider({children}){

    async function AudioFiles(){
        const files = await MediaLibrary.getAssetsAsync({
            mediaType: 'audio'
        });
    }

  async function permitionFunc(){
        const permition = await MediaLibrary.getPermissionsAsync()
    if(permition.granted){
    // Se a pessoa clicar em 'Permitir'
        AudioFiles()
    }

    if(!permition.granted && permition.canAskAgain){

        // Se a pessoa clicar em 'Negar'

       const { status, canAskAgain} = await MediaLibrary.requestPermissionsAsync();

       if(status === 'denied' && canAskAgain){

           // A pessoa clicou em 'Negar' e em 'Não perguntar novamente'
            permitionAlert();
       }
       if(status === 'granted'){

           // Se a pessoa clicar em 'Permitir'
           AudioFiles()
       }
    }
}

 function permitionAlert(){
    Alert.alert('Necessário Permissão',
     'O aplicativo requer que você permita o acesso ao sua biblioteca de musicas',
     [
         {
            text:'Ok, Vamos lá',
            onPress: () => permitionFunc()
         },
         {
            text:'Cancelar',
            onPress: () => permitionAlert()
         }
     ]
     )
 }

    useEffect( () => {
        permitionFunc();
      }, [])

    return(
        <AuthContext.Provider>
        {children}
        </AuthContext.Provider>
    );    
}