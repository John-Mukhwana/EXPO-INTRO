
import { View, Text, ScrollView, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router'
import { useEffect } from 'react';
import PetInfo from '../../components/PetDetails/petInfo';
import PetSubInfo from '../../components/PetDetails/PetSubInfo';
import AboutPet from '../../components/PetDetails/AboutPet';
import OwnerInfo from '../../components/PetDetails/OwnerInfo';
import Colors from '../../constants/Colors';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../config/FirebaseConfig';

export default function petDetails() {
    const pet=useLocalSearchParams();
    const navigation=useNavigation();
    const router=useRouter();

    useEffect(()=>{
                   
        navigation.setOptions({
            headerTransparent:true,
            headerTitle:''    
        })
    },[])
    /**
     * used to initiate chat between user and pet owner
     */
    const InitiateChat=async()=>{
        navigation.navigate('ChatScreen');
        const docId1=user?.primaryEmailAddress?.emailAddress+'_'+pet?.email;
        const docId2=pet?.email+'_'+user?.primaryEmailAddress?.emailAddress;

        const q=query(collection(db,'Chat'),where('id','in'[docId1,docId2]));
        const querySnapshot=await getDocs(q);
        querySnapshot.forEach(doc=>{
          router.push({
            pathname:'/Chat',
            params:{id:doc.id}
          })
        })
       if(querySnapshot.docs?.length==0){
        await setDoc(doc(db,'Chat',docId1),{
          id:docId1,
          users:[
            {
              email:user?.primaryEmailAddress?.emailAddress,
              imageUrl:user?.imageUrl,
              name:user?.fullName
            },
            {
              email:pet?.email,
              imageUrl:pet?.userImage,
              name:pet?.userName
            }

          ]
        })
       }
       router.push({
        pathname:'/Chat',
        params:{id:docId1}
      })
    }

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

          <TouchableOpacity style={styles.adoptBtn} 
          onPress={InitiateChat}
          >
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