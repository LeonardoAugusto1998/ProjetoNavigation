import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList, ScrollView, Text, StyleSheet, TouchableOpacity, View, StatusBar } from 'react-native';
import { AuthContext } from '../../Context/AudioProvider';
import { Entypo } from '@expo/vector-icons';




export default function Musicas({ navigation }){

    const { soundFiles } = React.useContext(AuthContext);
    const [button, setButton] = React.useState(true);

    const getThumbnailText = (filename) => filename[0];

    const convertTime = minutes => {
        if(minutes) {
            const hrs = minutes / 60;
            const minute = hrs.toString().split('.')[0];
            const percent = parseInt(hrs.toString().split('.')[1].slice(0,2));
            const sec = Math.ceil((60 * percent) / 100);

            if(parseInt(minute) < 10 && sec < 10) {
                return `0${minute}:0${sec}`
            }
            
            if(parseInt(minute) < 10) {
                return `0${minute}:${sec}`
            }

            if(parseInt(sec) < 10) {
                return `${minute}:${sec}`
            }

            return `${minute}:${sec}`
        }
    }

    return(
        
        <LinearGradient start={[0.1, 0.6]} colors={['white' , '#42CAFD']} style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#fff'}}>
           <StatusBar hidden/>
           <ScrollView>
                <FlatList
                data={soundFiles}
                renderItem={({item}) =>  

                    <View style={s.musicContainer}>
                        
                            <View style={s.thumbnail}>
                                <Text style={s.thumbnailText}>{getThumbnailText(item.filename)}</Text>
                            </View>

                        <View style={s.nameContainer}>
                            <TouchableOpacity onPress={ () => navigation.navigate('Player', {item})}>
                                <View >
                                    <Text numberOfLines={2} textBreakStrategy='highQuality' style={s.musicName} key={item.id}>{item.filename}</Text>                    
                                </View>

                                <View>
                                    <Text style={s.musicDuration}>{convertTime(item.duration)}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                            <TouchableOpacity style={s.iconContainer}>
                              <Entypo
                              name="dots-three-vertical"
                              size={16} 
                              color='black' 
                              style={s.icon}
                              onPress={() => {alert('clicou nas opcões')}}
                              />
                            </TouchableOpacity>

                    </View>
    }/> 
            </ScrollView>
        </LinearGradient>
    );
}

const s = StyleSheet.create({
    musicContainer:{
        flex:1,
        padding: 15,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        flexDirection:'row',
        alignItems:'center',
        position: 'relative'
    },
    musicName:{
        fontSize: 15,
        color:'#000',
        marginLeft: 10,
        flex:1,
        fontWeight:'bold'
    },
    musicDuration:{
        fontSize: 16,
        color: 'grey',
        marginLeft: 10,
        
    },
    iconContainer:{
        flex: 1,
        zIndex: 9,
        elevation: 10,
        position: 'absolute',
        right: -6,
        alignItems:'center',
        justifyContent:'center',
        width:40,
        height: 40
    },
    thumbnail:{
        backgroundColor:'white',
        width: 40,
        height: 40,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        elevation: 20,
        borderColor: 'grey',
        borderWidth: 1,
        left: -10
    },
    thumbnailText:{
        fontSize: 20
    },
    nameContainer:{
        maxWidth:250,
        left: -8
    }
})