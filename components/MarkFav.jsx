
import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function MarkFav() {
  return (
    <Pressable>
           <Ionicons name="heart-outline" size={24} color="black" />
    </Pressable>
  )
}