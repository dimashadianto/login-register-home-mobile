import { Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import Colors from '../utils/Colors';
import ProfileScreen from '../screens/profileScreen/ProfileScreen';
import ProductScreen from '../screens/productScreen/ProductScreen';
import StoreScreen from '../screens/storeScreen/StoreScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{ 
        headerShown: false,
        tabBarActiveTintColor: Colors.SOFT
       }}
    >
      <Tab.Screen name="Home" component={HomeScreen} 
      options={{ 
        tabBarLabel:({color}) => (
          <Text style={{color: color, fontSize: 12, marginTop: -7, marginBottom: 5}}>Home</Text>
        ),
        tabBarIcon: ({color, size}) => (
          <FontAwesome name="home" size={22} color={color} />
        )
       }}/>
       <Tab.Screen name="Product" component={ProductScreen}
      options={{ 
        tabBarLabel:({color}) => (
          <Text style={{color: color, fontSize: 12, marginTop: -7, marginBottom: 5}}>Product</Text>
        ),
        tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="shopping-basket" size={20} color={color} />
        )
       }}/>
       <Tab.Screen name="Store" component={StoreScreen}
      options={{ 
        tabBarLabel:({color}) => (
          <Text style={{color: color, fontSize: 12, marginTop: -7, marginBottom: 5}}>Store</Text>
        ),
        tabBarIcon: ({color, size}) => (
          <FontAwesome5 name="store" size={18} color={color} />
        )
       }}/>
      <Tab.Screen name="Profile" component={ProfileScreen}
      options={{ 
        tabBarLabel:({color}) => (
          <Text style={{color: color, fontSize: 12, marginTop: -7, marginBottom: 5}}>Profile</Text>
        ),
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="account" size={26} color={color} />
        )
       }}/>
    </Tab.Navigator>
  )
}