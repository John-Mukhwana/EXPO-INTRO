
import { View, Text,Image } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'

export default function PetSubInfoCard({icon,title,value}) {
  return (
    <View style={{display:'flex',flex:1, flexDirection:'row',alignItems:'center', backgroundColor:Colors.WHITE,padding:10,margin:10,borderRadius:8}}>
    <Image source={icon} style={{width:40,height:40}}/>
    <View>
        <Text style={{fontFamily:'outfit',fontSize:16,color:Colors.GRAY}}>{title}</Text>
        <Text>{value}</Text>
    </View>
</View>
  )
}