import { View, Text } from 'react-native'
import React from 'react'

export default function LoginScreen () {
  return (
    <View className=" h-full ">

     <Image source = {require('./../../assets/images/login.png')}
       style={{
          width: '100%',
          height: 200
       }}
     />
      < View>
        <Text className="font-outfit-bold">Ready To make a new Friend</Text>
      </View>

    </View>
  )
}