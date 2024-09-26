

import { View, Text, Image ,TextInput,StyleSheet} from 'react-native'
import { useNavigation } from 'expo-router';
import React, { useEffect, useState, } from 'react'
import Colors from './../../constants/Colors';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';


export default function AddNewPet() {
  const  navigation = useNavigation();
  const[formData,setFormData]=useState();

  useEffect(()=>{ 
    navigation.setOptions({
      title:'Add New Pet'
    })
  })
  const handleInputChange=(fieldName,fieldValue)=>{
    setFormData(prev=>({
      ...prev,
      [fieldName]:fieldValue
    }))
  }

  return (
    <ScrollView style={{padding:20, }}>
      <Text style={{
        fontFamily:'outfit-medium',
        fontSize:16,
        }}>Add New Pet for adoption</Text>
        <Image source={require('../../assets/images/placeholder.png')} style={{width:100, height: 100, borderRadius:15 ,borderWidth:1,borderColor:Colors.GRAY}} />

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Pet Name*</Text>
          <TextInput style={styles.input}
          onChangeText={(value=>handleInputChange('name',value))}
          />
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
          onChangeText={(value=>handleInputChange('age',value))}
          />
        </View>

        <Picker
             selectedValue={selectedLanguage}
             onValueChange={(itemValue, itemIndex) =>
             setSelectedLanguage(itemValue)
            }>
           <Picker.Item label="Male" value="Male" />
           <Picker.Item label="Female" value="Female" />
        </Picker>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Weight*</Text>
          <TextInput style={styles.input}
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
        <TouchableOpacity style={styles.button}>
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