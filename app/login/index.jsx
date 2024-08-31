import { View, Text ,Image} from 'react-native'
import React from 'react'

export default function LoginScreen () {
  return (
    <View className=" h-full ">

     <Image source = {require('./../../assets/images/login.png')}
       className="w-full h-1/2 "
       style={{width: "100%", height: 500}}
     />
      < View className="flex p-5 items-center">

        <Text className="text-3xl text-center" style={{fontFamily:'outfit-bold'}} >
          Ready to make a new friend ?
        </Text>
        <Text></Text>

      </View>

    </View>
  )
}