
import React, { createContext, useEffect, useState } from "react";
import * as MediaLibrary from 'expo-media-library';
import { Alert } from "react-native";
import { Audio } from 'expo-av';


export const AuthContext = createContext({})
export default function AudioProvider({children}){

    const [soundFiles, setSoundFiles] = useState([]);
    const [sound, setSound] = useState()
    

    async function AudioFiles(){
        let media = await MediaLibrary.getAssetsAsync({
            mediaType: 'audio'
        });
        

        media = await MediaLibrary.getAssetsAsync({
            mediaType: 'audio',
            first:  media.totalCount,
        });

        setSoundFiles(media.assets)

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
      }, []);


      async function playSound(){

      }

    return(
        <AuthContext.Provider value={{ soundFiles }}>
        {children}
        </AuthContext.Provider>
    );    
}