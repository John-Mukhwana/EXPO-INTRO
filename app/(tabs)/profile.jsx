

import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'expo-vector-icons/Ionicons'
import { useAuth, useUser } from '@clerk/clerk-expo'
import Colors from '../constants/Colors'
import { useRouter } from 'expo-router'

export default function Profile() {
  const router=useRouter()
  const {user}=useUser()
  const {signOut}=useAuth()
  const Menu=[
    {
      id:1,
      name:'Add New Pet',
      icon:'add-circle',
      path:'/../add-new-pet'
    },
    {
      id:2,
      name:'Favorites',
      icon:'heart',
      path:'/(tabs)/favorites'
    },
    {
      id:3,
      name:'Inbox',
      icon:'chatbubble',
      path:'/(tabs)/inbox'
    },
    {
      id:4,
      name:'exit',
      path:'logout'
    },
    {
      id:5,
      name:'My Posts',
      icon:'bookmark',
      path:'/../user-posts'

    }
  ]
  const onPressMenu=(item)=>{
    if(item.path=='logout'){
      signOut();
      return;
    }
    router.push(item.path)
  }
  return (
    <View style={{padding:20,margin:20}}>

      <Text
         style={{
          fontFamily:'outfit-medium',
          fontSize:20,
         }}
      >Profile
      </Text>

      <View style={{display:'flex',alignItems:'center',marginVertical:25}}>
        <Image source={{uri:user?.imageUrl}} style={{width:80,height:80,borderRadius:99}} />
        <Text style={{fontFamily:'outfit-medium',fontSize:20,marginTop:6}}>{user?.fullName}</Text>
        <Text style={{fontFamily:'outfit-regular',fontSize:15,color:Colors.GRAY}}>{user?.primaryEmailAddress.emailAddress}</Text>
      </View>
      <FlatList 
          data={Menu}
          renderItem={({item,index})=>(
           <TouchableOpacity
            onPress={()=>onPressMenu(item)}
            key={item.id}
            style={{
              display:'flex',
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'space-between',
              marginVertical:10,
              backgroundColor:Colors.LIGHT_GRAY,
              padding:10,
              borderRadius:10,
           }}>
            <Ionicons name={item.icon} size={30} color={Colors.PRIMARY}
             style={{
                 padding:10,
                 backgroundColor:Colors.LIGHT_PRIMARY,
                 borderRadius:10,
               }}
             />
         </TouchableOpacity>
          )}
          />
         <Text style={{
            fontFamily:'outfit-medium',
            fontSize:20,
           }}>
            {item.name}
         </Text>
    </View>
  )
}