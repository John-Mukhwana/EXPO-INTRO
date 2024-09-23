

import { View, Text, Image } from 'react-native'
import { useNavigation } from 'expo-router';
import React, { useEffect } from 'react'
import Colors from './../../constants/Colors';
import { TextInput } from 'react-native-web';

export default function AddNewPet() {
  const  navigation = useNavigation();

  useEffect(()=>{
    navigation.setOptions({
      title:'Add New Pet'
    })
  })
  return (
    <View style={{padding:20}}>
      <Text style={{
        fontFamily:'outfit-medium',
        fontSize:16,
        }}>Add New Pet for adoption</Text>
        <Image source={require('../../assets/images/placeholder.png')} style={{width:100, height: 100, marginTop:20,borderRadius:15 ,borderWidth:1,borderColor:Colors.GRAY}} />

        <View>
          <Text>Pet Name*</Text>
          <TextInput/>
        </View>
    </View>
  )
}