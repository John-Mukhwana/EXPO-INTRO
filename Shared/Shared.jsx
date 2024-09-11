
import {doc,getDoc,setDoc, updateDoc} from 'firebase/firestore';
import {db} from './../config/FirebaseConfig'

 const GetFavList=async(user)=>{
    const docSnap=await getDoc(doc(db,'UserFavPet',user?.primaryEmailAddress?.emaiAddress))
    if(docSnap?.exists())
    {
        return docSnap.data();
    }
    else{
        await setDoc(doc(db,'UserFavPet',user?.primaryEmailAddress?.emaiAddress),{
            email:user?.primaryEmailAddress?.emaiAddress,
            favorites:[] 
        })
    }
}

const UpdateFav=async(user,favorites)=>{
      const docRef=doc(db,'UserFavPet',user?.primaryEmailAddress?.emaiAddress)
      try{
        await updateDoc(docRef,{
            favorites:favorites
        })
      }catch(e){

      }
}

export default{
    GetFavList,
    UpdateFav
}