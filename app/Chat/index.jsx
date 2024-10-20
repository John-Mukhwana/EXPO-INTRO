

import { View, Text } from 'react-native'
import React, { useEffect,useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { getDoc,doc, collection } from 'firebase/firestore';
import { GiftedChat } from 'react-native-gifted-chat';
import { db } from '../../config/FirebaseConfig';
import {useUser} from '@clerk/clerk-expo'
import moment from 'moment';


export default function ChatScreen() {
  const params=useLocalSearchParams();
 const navigation=useNavigation();
 const user=useUser();
 const [messages, setMessages] = useState([])

  useEffect(()=>{
    GetUserDetails();

    const unsubscribe=onSnapshot(collection(db,'Chat',params?.id,'messages'),(snapshot)=>{
      const messageDat=snapShot.docs.map((doc)=>({
        _id:doc.id,
        ...doc.data()
      }))
      setMessages(messageData);
    });
    return ()=>unsubscribe();
  },[])

  const GetUserDetails=async()=>{
    const docRef=doc(db,'Chat',params?.id);
    const docSnap=await getDoc(docRef);
    const result=docSnap.data();

    const otherUser=result?.user.filter(item=>item.email!=user?.primaryEmailAddress?.emailAddress);
    console.log('otherUser',otherUser);
    navigation.setOptions({
      headerTitle:otherUser?.name
    })
  }
  const onSend=async(newMessage)=>{
   setMessages((previousMessage)=>GiftedChat.append(previousMessage,newMessage) ); 
   newMessage[0].createdAt=moment().format('MM-DD-YYYY HH:mm:ss');
   await addDoc(collection(db,'Chat',params?.id,'messages'),newMessage[0]);
  }
  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      showUserAvatar={true}
      user={{
        _id: user?.primaryEmailAddress?.emailAddress,
        namse:user?.fullName,
        avatar:user?.imageUrl
      }}
    />  
  )
}