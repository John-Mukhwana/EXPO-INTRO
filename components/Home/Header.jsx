

import { View, Text } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-react'

export default function Header() {
    const {user} = useUser()
  return (
    <View>
         
         <View>
            <Text className="font-[outfit] text-[18px]">Welcome</Text>
            <Text className="font-[outfit-medium] text-[25px]">{user?.fullName}</Text>
         </View>

         


    </View>
  )
}