
import { View, Text, FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import Category from './Category'
import { collection,getDocs,query,where } from 'firebase/firestore'
import { db } from './../../config/FirebaseConfig'
import PetListItem from './PetListItem'


export default function PetListByCategory() {

   const [PetList,setPetList]=useState([]);
   const [loader,setLoader]=useState(false);
      
        useEffect(()=>{
          GetPetList('Dogs');
        },[])

   const GetPetList=async(category)=>{
     setLoader(true);
     setPetList([]);
    const q=query(collection(db,'Pets'),where('category','==',category?category:'Dogs'));
    const querySnapshot =await getDocs(q);

    querySnapshot.forEach(doc=>{
      console.log(doc.data());
       setPetList(petList=>[...petList,doc.data()]); 
    })
    setLoader(false);
   }
  return (
    <View>
      <Category category={(value)=>GetPetList(value)} />
        <FlatList
            data={PetList}
            style={{marginTop:20}}
            refreshing={loader}
            showsHorizontalScrollIndicator={false}
            onRefresh={()=>GetPetList()}
            horizontal={true}
            renderItem={({item,index})=>(
              <View>
                 <PetListItem pet={item} />
              </View>
            )}
        />
    </View>
  )
}