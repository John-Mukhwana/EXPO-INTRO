
{/* Add comments */}
// Import necessary dependencies
import { View, Image, FlatList, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from './../../config/FirebaseConfig'
import { collection, getDocs } from "firebase/firestore";

// Define the Slider component
export default function Slider() {

    // Define state variable to store the slider list
    const [sliderList, setSliderList] = useState([]);

    // Fetch the sliders from the database on component mount
    useEffect(() => {
        GetSliders();
    }, [])

    // Function to fetch the sliders from the database
    const GetSliders = async () => {
        // Clear the slider list
        setSliderList([]);
        // Fetch the sliders from the "Sliders" collection in the database
        const snapshot = await getDocs(collection(db, 'Sliders'));
        // Iterate over each slider document and add it to the slider list
        snapshot.forEach((doc) => {
           
            setSliderList(sliderList => [...sliderList, doc.data()]);
        })
    }

    // Render the Slider component
    return (
        <View className="mt-[15]">
            {/* Render a FlatList to display the sliders */}
            <FlatList
                data={sliderList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View>
                        {/* Render an Image component for each slider */}
                        <Image source={{ uri: item?.imageUrl }}
                            style={styles?.sliderImage}
                        />
                    </View>
                )}
            />
        </View>
    )
}

{/* Define the styles for the Slider component*/} 
const styles=StyleSheet.create({
    sliderImage:{
        width:Dimensions.get('screen').width*0.9,
        height:170,
        marginRight:15,
        borderRadius:15
    }
})