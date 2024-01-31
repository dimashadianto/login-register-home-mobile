import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./app/screens/loginScreen/LoginScreen";
import RegisterScreen from "./app/screens/registerScreen/RegisterScreen";
import { Provider } from "react-redux";
import { store } from "./app/store/store";
import TabNavigation from "./app/navigations/TabNavigations";
import { ClerkProvider } from "@clerk/clerk-expo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";

const Stack = createStackNavigator();

export default function App() {
  const tokenuser = AsyncStorage.getItem("token")
  const tokenCache = {
    async getToken(key) {
      try {
        return SecureStore.getItemAsync(key);
      } catch (err) {
        return null;
      }
    },
    async saveToken(key, value) {
      try {
        return SecureStore.setItemAsync(key, value);
      } catch (err) {
        return;
      }
    },
  };

  return (
    <Provider store={store}>
      <ClerkProvider
        publishableKey="pk_test_cmVmaW5lZC1tYXJ0aW4tNjQuY2xlcmsuYWNjb3VudHMuZGV2JA"
        tokenCache={tokenCache}
      >
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Tab" component={TabNavigation} />
          </Stack.Navigator>
        </NavigationContainer>
      </ClerkProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});