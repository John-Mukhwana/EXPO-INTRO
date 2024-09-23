

import { View, Text,StyleSheet,} from 'react-native'
import { Link } from 'expo-router';
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import PetListByCategory from '../../components/Home/PetListByCategory'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Colors from '../../constants/Colors'

export default function Home() {
  return (
    <View className="p-[20px] mt-[20px]">

      {/* header */}
        <Header/>

      {/* Slider */}
      <Slider/>

      {/* List of Pets  annd Category */}
        <PetListByCategory/>



      {/* Add new pet option */}
      < Link href={'/add-new-pet'}
       style={styles?.addNewPetContainer} >
      <MaterialIcons name="pets" size={24} color="black" />

        <Text style={{fontFamily:'outfit-medium',fontSize:18}}>Add New Pet</Text>

      </Link>


    </View>
  )
}

const styles = StyleSheet.create({
  addNewPetContainer:{
    display:'flex',
    flexDirection:'row',
    borderStyle:'dashed',
    gap:10,
    padding:15,
    marginTop:20,
    borderWidth:1,
    borderColor:Colors.PRIMARY,
    borderRadius:15,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:Colors.LIGHT_PRIMARY
    
  }
  
})