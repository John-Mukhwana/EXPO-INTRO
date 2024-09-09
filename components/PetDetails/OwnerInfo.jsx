import { View, Text, Image } from 'react-native'
import React from 'react'

export default function OwnerInfo({pet}) {
  return (
    <View>
       <Image source={{uri:pet?.userImage}} style={{width:40,height:40}}/>
    </View>
  )
}