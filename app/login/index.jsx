import { View, Text ,Image} from 'react-native'
import React from 'react'

export default function LoginScreen () {
  return (
    <View className=" h-full ">

     <Image source = {require('./../../assets/images/login.png')}
       className="w-full h-[500px] " />

      < View className="flex p-5 items-center">

        <Text className="text-3xl text-center font-[outfit-bold]"  >
          Ready to make a new friend ?
        </Text>
        <Text className="text-center font-[outfit] text-[18px]">Lets adopt the pet which you like and make there life happy again</Text>

      </View>

    </View>
  )
}