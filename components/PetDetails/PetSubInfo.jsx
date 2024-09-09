
import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import PetSubInfoCard from './PetSubInfoCard'

export default function PetSubInfo({pet}) {
  return (
    <View style={{padding:20}}>
      <View style={{display:'flex',flexDirection:'row'}} >

       <PetSubInfoCard/>
      </View>
    </View>
  )
}