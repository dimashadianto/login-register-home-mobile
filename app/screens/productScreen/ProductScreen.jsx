import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Slider from './Slider'

export default function ProductScreen() {
  return (
    <View>
      <FlatList
      ListHeaderComponent={() => (
        <>
        <Slider/>
        </>
      )}/>
    </View>
  )
}