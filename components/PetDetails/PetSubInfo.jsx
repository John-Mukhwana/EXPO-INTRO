
import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'

export default function PetSubInfo({pet}) {
  return (
    <View style={{padding:20}}>
      <View style={{display:'flex',flexDirection:'row'}} >

        <View style={{display:'flex',flex:1, flexDirection:'row',alignItems:'center', backgroundColor:Colors.WHITE,padding:10,margin:10,borderRadius:8}}>
            <Image source={require('./../../assets/images/calendar.png')} style={{width:40,height:40}}/>
            <View>
                <Text style={{fontFamily:'outfit',fontSize:16,color:Colors.GRAY}}>Age</Text>
                <Text>{pet?.age}</Text>
            </View>
        </View>
        <View style={{display:'flex',flex:1, flexDirection:'row',alignItems:'center', backgroundColor:Colors.WHITE,padding:10,margin:10,borderRadius:8}}>
            <Image source={require('./../../assets/images/calendar.png')} style={{width:40,height:40}}/>
            <View>
                <Text style={{fontFamily:'outfit',fontSize:16,color:Colors.GRAY}}>Age</Text>
                <Text>{pet?.age}</Text>
            </View>
        </View>

      </View>
    </View>
  )
}