
import { View, Text, FlatList, Image,StyleSheet, TouchableOpacity } from 'react-native'
import React,{ useEffect,useState } from 'react'
import {collection,getDocs} from 'firebase/firestore'
import {db} from './../../config/FirebaseConfig'
import Colors from './../../constants/Colors'

export default function Category() {

      const [selectedCategory,setSelectedCategory]=useState('Dogs');
      const [categoryList,setCategoryList]=useState([]);

      useEffect(()=>{
        GetCategories();
      },[])
  
    const GetCategories=async () =>{
          setCategoryList([]);
         const snapshot = await getDocs(collection(db,'Category'));
         snapshot.forEach((doc)=>{
            setCategoryList(categoryList=>[...categoryList,doc.data()]);
         })

    }

  return (
    <View className="mt-[20]">
      <Text className="font-[outfit-medium] text-[20px]">category</Text>
          
        <FlatList
            data={categoryList}
            numColumns={4}
            renderItem={({item,index})=>(

                <TouchableOpacity 
                          onPress={()=>setSelectedCategory(item.name)}
                    style={{flex:1}}>

                      <View style={[styles.container ,selectedCategory==item.name&&styles.selectedCategoryContainer]}>

                          <Image source={{uri: item?.imageUrl}}
                           style={{width:40,height:40}}
                          />
                      </View>
                      <Text className="text-center font-[outfit-medium] text-[12px]">{item?.name}</Text>
                </TouchableOpacity>
            )}
        
        />    
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.LIGHT_SECONDARY,
    padding:15,
    alignItems:'center',
    borderWidth:1,
    borderRadius:15,
    borderColor:Colors.PRIMARY,
    margin:5
  },
  selectedCategoryContainer:{
    backgroundColor:Colors.SECONDARY,
    borderColor:Colors.SECONDARY,
  }
  
})