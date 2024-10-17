
import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import {collection,deleteDoc,doc,where } from 'firebase/firestore'
import {db} from '../../config/FirebaseConfig'
import {query} from 'firebase/database'
import {useUser} from '@clerk/clerk-react'
import PetListItem from '../../components/Home/PetListItem'
import { StyleSheet } from 'react-native-web'

export default function UserPost() {
    const {user}=useUser()
    const navigation = useNavigation();
    const [userPostList,setUserPostList]=useState([]);
    const [loader,setLoader]=useState(false);

    useEffect(()=>{
        navigation.setOptions({
            headerTitle:'User Posts'
        })
      user&&GetUserPost
    },[user])
   
    /*
    *used to get User Post 
    */
    const GetUserPost=async()=>{
        setLoader(true);
        const q=query(collection(db,'pet'),where('email','=='.user?.primaryEmailAddress.emailAddress));
        const querySnapshot=await getDocs(q);

        querySnapshot.forEach((doc)=>{
            setUserPostList([...userPostList,doc.data()])

        })
        setLoader(false);

    }
     
    const OnDeletePost=(docId)=>{
        Alert.alert('Delete Post','Are you sure you want to delete this post?',[
            {
               text:'Cancel',
            //    onPress:()=>console.log('Cancel Pressed')
            },
            {
                text:'Delete',
                onPress:()=>deletePost(docId)
            }
        ])

    }
     const deletePost=async(docId)=>{
        await deleteDoc(doc(db,'pet',docId));
        GetUserPost();

     }
  return (
    <View style={{
        padding:20
        }}>

      <Text style={{
            fontFamily:'outfit-medium',
            fontSize:20,
            textAlign:'center'
      }}> User Posts</Text>

      <FlatList
        data={userPostList}
        numColumns={2}
        refreshing={loader}
        onRefresh={GetUserPost}
        renderItem={(item,index)=>(
            <View>
            <PetListItem  pet={item} key={index}/>
            <Pressable onPress={()=>OnDeletePost(item?.id)} style={styles.deleteButton}>
                <Text style={{fontFamily:'outfit',textAlign:'center'}}>Delete</Text>
            </Pressable>
            </View>
        )}
      />
      {userPostList.length==0 &&<Text style={{fontFamily:'outfit',textAlign:'center'}}>No Post Found</Text>}
    </View>
  )
}

const  styles=StyleSheet.create({
    deleteButton:{
        backgroundColor:Colors.Light_PRIMARY,
        padding:5,
        borderRadius:5,
        marginTop:5,
        marginRight:10
    }
})