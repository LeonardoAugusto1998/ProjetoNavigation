import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList, ScrollView, Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { AuthContext } from '../../Context/AudioProvider';
import { Entypo } from '@expo/vector-icons'



export default function Musicas({ navigation }){

    const { soundFiles } = React.useContext(AuthContext)

    function iconButton(){
        return(
            <TouchableOpacity>
               <Text><Ionicons /></Text> 
            </TouchableOpacity>
        );
    }

    return(
        <LinearGradient colors={['white' , 'blue']} style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#fff'}}>
           <ScrollView>
                <FlatList
                data={soundFiles}
                renderItem={({item}) =>  

                    <View style={s.musicContainer} onPress={ () => navigation.navigate('Player', {item}) }>
                        
                            <View style={s.thumbnail}>
                                <Text><Entypo name='controller-play' size={28} color='black'/></Text>
                            </View>

                        <View>
                            <View style={s.musicName}>
                                <Text style={s.titleContainer} key={item.id}>{item.filename}</Text>                    
                            </View>

                            <View>
                                <Text style={s.musicDuration}>{item.duration}</Text>
                            </View>
                        </View>

                            <View style={s.iconContainer}>
                              <Entypo name="dots-three-vertical" size={16} color='black' style={s.icon}/>
                            </View>

                    </View>
    }/> 
            </ScrollView>
        </LinearGradient>
    );
}

const s = StyleSheet.create({
    musicContainer:{
        padding: 15,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        top: 20,
        flexDirection:'row',
        alignItems:'center',
        
    },
    musicName:{
        fontSize: 20,
        color:'#000',
        marginLeft: 10,
        flex:1,
        
    },
    musicDuration:{
        fontSize: 16,
        color: 'grey',
        marginLeft: 10,
        
    },
    iconContainer:{
        flex: 1,
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
    icon:{
        alignItems:'flex-end'
    },
    thumbnail:{
        backgroundColor:'white',
        width: 42,
        height: 42,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
    }
})