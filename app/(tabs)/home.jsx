

import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import PetListByCategory from '../../components/Home/PetListByCategory'

export default function Home() {
  return (
    <View className="p-[20px] mt-[20px]">

      {/* header */}
        <Header/>

      {/* Slider */}
      <Slider/>

      {/* List of Pets  annd Category */}
        <PetListByCategory/>



      {/* Add new pet option */}


    </View>
  )
}