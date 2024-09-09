

import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors';

export default function AboutPet({pet}) {
    const [readMore,setReadMore]=React.useState(true);
  return (
    <View style={{padding:20}}>

      <Text style={{fontFamily:'outfit-medium',fontSize:20}}>About  {pet?.name}</Text>
      <Text numberOfLines={readMore?3:20} style={{fontFamily:'outfit',fontSize:16}}>{pet?.about}</Text>
      {readMore&&
        <Pressable onPress={()=>setReadMore(false)}>
            <Text style={{fontFamily:'outfit-medium',fontSize:14,color:Colors.SECONDARY}} >
                ReadMore
            </Text>
       </Pressable>}
    </View>
  )
}