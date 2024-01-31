import Colors from "../../utils/Colors";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../services/AuthService";
import { setAuthenticate, setPassword, setRole, setUsername } from "../../store/reducers/userSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, useNavigation } from "@react-navigation/native"
import * as WebBrowser from "expo-web-browser";
import { useAuth, useOAuth, useSignIn } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/WarmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.users.username);
  const password = useSelector((state) => state.users.password);
  const navigation = useNavigation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({
        username: username,
        password: password
      })

      dispatch(setAuthenticate(true))
      dispatch(setRole(response.data.data.role))
      await AsyncStorage.setItem("authenticate", "true");
      await AsyncStorage.setItem("role", response.data.data.role)
      await AsyncStorage.setItem("token", response.data.data.token)
      await AsyncStorage.setItem("username", username)
      navigation.navigate("Tab")
    } catch (e) {
      console.log(e)
    }
  };

  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
        navigation.navigate("Tab")
      } else {
        //
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Sign in your account</Text>
        <Text style={styles.titleInput}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          onChangeText={(e) => dispatch(setUsername(e))}
          value={username}
        />
        <Text style={styles.titleInput}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => dispatch(setPassword(e))}
          value={password}
          placeholder="Enter your password"
        />
      </View>
      <Text style={{ padding: 5, color: Colors.PRIMARY_BLACK }}>Don't have an account? <Link to={{ screen: 'Register' }} style={{ color: Colors.SOFT }}>Sign up</Link></Text>
      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.buttonLogin}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <Text style={{ textAlign: 'center', fontSize: 14, color: Colors.SOFT, marginTop: 5}}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleInput: {
    color: Colors.SOFT,
  },
  input: {
    width: 300,
    height: 40,
    marginBottom: 5,
    marginTop: 5,
    borderWidth: 1,
    borderColor: Colors.SOFT,
    paddingLeft: 10,
    borderRadius: 5,
    color: Colors.PRIMARY_BLACK,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    color: Colors.SOFT,
    marginBottom: 5,
  },
  buttonLogin: {
    width: 70,
    height: 35,
    backgroundColor: Colors.SOFT,
    color: Colors.WHITE,
    borderRadius: 5,
    textAlign: 'center',
    paddingTop: 7,
    marginTop: 5,
  },
});
