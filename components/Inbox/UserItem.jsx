

import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import { Link } from 'expo-router'

export default function UserItem({userInfo}) {
  return (
    <Link href={'/chat?id='+userInfo.docId}>
    <View style={{
        marginVertical:7,
        display:'flex',
        flexDirection:'row',
        gap:10,
        alignItems:'center'

    }}>
      <Image source={{uri:userInfo.imageUrl}} 
      style={{
        height:40,
        width:40,
        borderRadius:99
      }}/>
        <Text style={{
            fontFamily:'outfit-medium',
            fontSize:20
        }}>{userInfo.name}</Text>
        
    </View>
    <View style={{
           borderWidth:0.2, 
           marginVertical:5,
           borderColor:Colors.GRAY
        }}>

        </View>
    </Link>
  )
}