

import { View, Text } from 'react-native'
import React from 'react'

export default function AboutPet({pet}) {
  return (
    <View style={{padding:20}}>

      <Text style={{fontFamily:'outfit-medium',fontSize:20}}>About{pet?.name}</Text>
    </View>
  )
}