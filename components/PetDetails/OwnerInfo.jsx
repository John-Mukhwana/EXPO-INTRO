import { View, Text, Image,StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function OwnerInfo({pet}) {
  return (
    <View style={styles.container}>
       <View style={styles.leftView}>
       <Image source={{uri:pet?.userImage}} style={{width:40,height:40,borderRadius:99}}/>
       <View>
              <Text style={{fontFamily:'outfit-medium', fontSize:17}}>{pet?.userName}</Text>
              <Text style={styles.petOwner} >Pet Owner</Text>
       </View>
       </View>
       <Ionicons name="send-sharp" size={24} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:20,
        paddingHorizontal:20,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:20,
        borderWidth:1,
        borderRadius:15,
        padding:10,
        backgroundColor:Colors.WHITE,
        justifyContent:'space-between'
    },
    leftView:{
        display:'flex',
        flexDirection:'row',
        gap:20
    },
    petOwner:{
        color:Colors.GRAY
    }
})