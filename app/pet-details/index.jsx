
import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { useEffect } from 'react';
import PetInfo from '../../components/PetDetails/petInfo';
import PetSubInfo from '../../components/PetDetails/PetSubInfo';
import AboutPet from '../../components/PetDetails/AboutPet';
import OwnerInfo from '../../components/PetDetails/OwnerInfo';

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
       <OwnerInfo pet={pet}/>
       </ScrollView>
       <View style={{height:70}}>

       </View>

       {/**Adopt me button */}
    </View>
  )
}