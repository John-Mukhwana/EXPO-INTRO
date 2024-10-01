

import { View, Text, Image ,TextInput,StyleSheet, Pressable, ToastAndroid} from 'react-native'
import { useNavigation } from 'expo-router';
import React, { useEffect, useState, } from 'react'
import Colors from './../../constants/Colors';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {collection,getDocs} from 'firebase/firestore'
import {db} from './../../config/FirebaseConfig'
import * as ImagePicker from 'expo-image-picker';
import { getDownloadURL, uploadBytes } from 'firebase/storage';


export default function AddNewPet() {
  const  navigation = useNavigation();
  const[formData,setFormData]=useState(
    [
      {category:'Dogs',sex:'Male'}
    ]
  );
  const[gender,setGender]=useState();
  const [categoryList,setCategoryList]=useState([]);
  const [selectedCategory,setSelectedCategory]=useState([]);
  const [image,setImage]=useState();
  useEffect(()=>{ 
    navigation.setOptions({
      title:'Add New Pet'
    })
    GetCategories();
  },[])

  const GetCategories=async () =>{
    setCategoryList([]);
    const snapshot = await getDocs(collection(db,'Category'));
    snapshot.forEach((doc)=>{
      setCategoryList(categoryList=>[...categoryList,doc.data()]);
  })
     
  //image picker function used to pick image from gallery
  const imagePicker=async()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }


   const handleInputChange=(fieldName,fieldValue)=>{
    setFormData(prev=>({
      ...prev,
      [fieldName]:fieldValue
    }))
  }
   
  const onSubmit=()=>{
    if(Object.keys(formData).length!=8){
      ToastAndroid.show('All fields are required',ToastAndroid.SHORT)
      return;
    }
    UploadImage();
  }
  /**
   * Method used to upload image to firebase storage
   */
   const UploadImage=async()=>{
    const resp=await fetch(image);
    const blobImage=await resp.blob();
    const storageRef=ref(storage,'/PetAdopt/'+Date.now()+'.jpg');
    
    uploadBytes(storageRef,blob).then((snapshot)=>{
      console.log('Uploaded a blob or file!');
      
    }).then(resp=>{
      getDownloadURL(storageRef).then(async(downloadUrl)=>{
        console.log(downloadUrl);
      })
    })
   }

   }
  return (
    <ScrollView style={{padding:20, }}>
      <Text style={{
        fontFamily:'outfit-medium',
        fontSize:16,
        }}>Add New Pet for adoption</Text>

        <Pressable onPress={imagePicker}>

        {!image?<Image source={require('../../assets/images/placeholder.png')} style={{
          width:100, 
          height: 100, 
          borderRadius:15 ,
          borderWidth:1,
          borderColor:Colors.GRAY
          }} />:
          <Image source={{uri:image}} style={{
            width:100, 
            height: 100, 
            borderRadius:15 
            }} />
        }
        </Pressable>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Pet Name*</Text>
          <TextInput style={styles.input}
          onChangeText={(value=>handleInputChange('name',value))}
          />
        </View>
                            
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Pet Category *</Text>
        <Picker
             selectedValue={selectedCategory}
             style={styles.input}
             onValueChange={(itemValue, itemIndex) =>{
             setSelectedCategory(itemValue);
             handleInputChange('Category',itemValue)
             }}>
              {categoryList.map((Category,index)=>(
                <Picker.Item label={Category.name} value={Category.name} key={index}/>
              ))}
         
        </Picker>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Breed*</Text>
          <TextInput style={styles.input}
          onChangeText={(value=>handleInputChange('breed',value))}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Age*</Text>
          <TextInput style={styles.input}
          keyboardType='numeric-pad'
          onChangeText={(value=>handleInputChange('age',value))}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Gender *</Text>
        <Picker
             selectedValue={gender}
             style={styles.input}
             onValueChange={(itemValue, itemIndex) =>{
             setGender(itemValue);
             handleInputChange('sex',itemValue)
             }}>
           <Picker.Item label="Male" value="Male" />
           <Picker.Item label="Female" value="Female" />
        </Picker>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Weight*</Text>
          <TextInput style={styles.input}
          keyboardType='numeric-pad'
          onChangeText={(value=>handleInputChange('weight',value))}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Address*</Text>
          <TextInput style={styles.input}
          onChangeText={(value=>handleInputChange('addres',value))}
          />
        </View>

        <View style={styles.inputContainer} >
          <Text style={styles.label}>About*</Text>
          <TextInput style={styles.input}
          numberOfLines={5}
          multiline={true}
          onChangeText={(value=>handleInputChange('about',value))}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={onSubmit}> 
          <Text style={{fontFamily:'outfit-medium',textAlign:'center'}}>Submit</Text>
        </TouchableOpacity>


    </ScrollView>
  )
}

const styles = StyleSheet.create({
  inputContainer:{
    marginVertical:5

  },
  input:{
    padding:10,
    backgroundColor:Colors.WHITE,
    borderRadius:7,
    borderWidth:1,
    fontFamily:'outfit',
    margiButon:50
    


  },
  label:{
    marginVertical:5,
    fontFamily:'outfit'

  },
  button:{
    padding:15,
    backgroundColor:Colors.PRIMARY,
    borderRadius:7,
    marginVertical:10
  }
  
})