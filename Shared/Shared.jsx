
import {doc,getDoc,setDoc} from 'firebase/firestore';
import {db} from './../config/FirebaseConfig'

export const GetFavList=async(user)=>{
    const docSnap=await getDoc(doc(db,'UserFavPet',user?.primaryEmailAddress?.emaiAddress))
    if(docSnap.exists())
    {
        return docSnap.data();
    }
    else{
        await setDoc(doc(db,'UserFavPet',user?.primaryEmailAddress?.emaiAddress),{
            email:user?.primaryEmailAddress?.emaiAddress
        })
    }
}