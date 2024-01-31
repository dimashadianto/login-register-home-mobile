import { View, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../utils/Colors';
import React from 'react'

export default function StoreScreen() {
  return (
    <View style={{ paddingTop: 30 }}>
      <View style={{ marginBottom: 10, display: 'flex', flexDirection: 'row', gap: 6, paddingHorizontal: 12 }}>
        <TextInput placeholder='Search' style={{ backgroundColor: Colors.WHITE, borderRadius: 8, padding: 7, width: '88%', fontSize: 14, }} />
        <FontAwesome name="search" size={18} color={Colors.PRIMARY} style={{ padding: 12, borderRadius: 8, backgroundColor: Colors.WHITE }} />
      </View>
    </View>
  )
}