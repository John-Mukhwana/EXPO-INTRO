

import { View, Text, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-react'

export default function Header() {
    const {user} = useUser()
  return (
    <View className="flex flex-row justify-between items-center ">
         
         <View>
            <Text className="font-[outfit] text-[18px]">Welcome</Text>
            <Text className="font-[outfit-medium] text-[25px]">{user?.fullName}</Text>
         </View>

        <Image source ={{uri:user?.imageUrl}} className="w-[40px] h-[40px] rounded-3xl"/>
        

    </View>
  )
}