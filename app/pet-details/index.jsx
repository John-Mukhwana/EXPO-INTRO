
import { View, Text, ScrollView, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { useEffect } from 'react';
import PetInfo from '../../components/PetDetails/petInfo';
import PetSubInfo from '../../components/PetDetails/PetSubInfo';
import AboutPet from '../../components/PetDetails/AboutPet';
import OwnerInfo from '../../components/PetDetails/OwnerInfo';
import Colors from '../../constants/Colors';

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
       <View style={{height:70}}>
      
       </View>
        
       </ScrollView>
     
       {/**Adopt me button */}
        <View style={styles?.bottomContainer}>

          <TouchableOpacity style={styles.adoptBtn} >
                <Text style={{textAlign:'center',fontFamily:'outfit-medium'}}>Adopt Me</Text>
          </TouchableOpacity>

        </View>
    </View>


  )
}

const styles = StyleSheet.create({
     adoptBtn:{
      padding:15,
      backgroundColor:Colors.PRIMARY,
        
     },
     bottomContainer:{
      position:'absolute',
      width:'100%',
      bottom:0,

     }
    
})