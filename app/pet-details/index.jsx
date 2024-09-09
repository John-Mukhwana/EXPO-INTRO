
import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { useEffect } from 'react';
import PetInfo from '../../components/PetDetails/petInfo';
import PetSubInfo from '../../components/PetDetails/PetSubInfo';
import AboutPet from '../../components/PetDetails/AboutPet';

export default function petDetails() {
    const pet=useLocalSearchParams();
    const navigation=useNavigation();

    useEffect(()=>{
                   
        navigation.setOptions({
            headerTransparent:true,
            headerTitle:''    
        })
    },[])
  return (
    <View>
      <ScrollView>

       {/* Pet info */}
        <PetInfo pet={pet}/>
       {/* Pet properties */}
         <PetSubInfo pet={pet}/>
       {/* about */}
       <AboutPet pet={pet}/>

       {/*owner details*/}
       </ScrollView>

       {/**Adopt me button */}
    </View>
  )
}