
import { View, Text,Image } from 'react-native'
import React from 'react'
import Color from './../../constants/Colors'


export default function PetListItem({pet}) {
  return (
    <View style={{
        padding:10,
        marginRight:15,
        backgroundColor:'skyblue',
        borderRadius:15,
        
     }}>

      <Image source={{uri:pet.imageUrl}}
         className="w-[150px] h-[140px] rounded-3xl"
      />
      <Text
        style={{fontFamily:'outfit-medium',fontSize:17}}>{pet.name}
      </Text>

      <View className="flex flex-row justify-between">
         <Text className="text-[outfit-medium]" style={{color:Color.GRAY}}>{pet?.breed}</Text>
         <Text className="text-[outfit]" style={{
            color:Color.PRIMARY,
            paddingHorizontal:7,
            borderRadius:5,
            fontSize:12,
            backgroundColor:Color.LIGHT_PRIMARY
          }}
         >{pet?.age} YRS</Text>
      </View>
    </View>
  )
}