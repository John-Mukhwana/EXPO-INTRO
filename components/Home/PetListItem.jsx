
import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from './../../constants/Colors'
import {useRouter} from 'expo-router';
import MarkFav from './../../components/MarkFav';


export default function PetListItem({pet}) {

  const router=useRouter();
  return (
    <TouchableOpacity 
     onPress={()=>router.push({
      pathname:'/pet-details',
      params:pet
     })}
    
    style={{
        padding:10,
        marginRight:15,
        backgroundColor:'skyblue',
        borderRadius:15,
        
     }}>
      <View style={{position:'absolute',zIndex:10,right:10,top:15}} >
        <MarkFav pet={pet} color={'white'}/>
      </View>

      <Image source={{uri:pet.imageUrl}}
         className="w-[150px] h-[140px] rounded-2xl"
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
    </TouchableOpacity>
  )
}