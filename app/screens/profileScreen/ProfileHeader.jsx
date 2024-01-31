import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../../utils/Colors';
import { useAuth } from '@clerk/clerk-expo';
import { useNavigation } from '@react-navigation/native';

const ProfileHeader = () => {

    const [nameProfile, setNameProfile] = useState();
    const navigation = useNavigation()

    useEffect(() => {
        AsyncStorage.getItem('username').then((value) => {
            setNameProfile(value);
        });
    }, []);

    const SignOut = () => {
        const { isLoaded,signOut } = useAuth();
        if (!isLoaded) {
          return null;
        }
        return (
          <View style={{ marginTop: 5 }}>
            <Button
              title="Sign Out"
              onPress={() => {
                signOut();
                navigation.navigate("Login")
                AsyncStorage.removeItem("token");
              }}
            />
          </View>
        );
      };

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.title}>Your profile</Text>
            </View>
            <View style={styles.profile}>
                <Text>Username</Text>
                <Text style={ styles.infoProfile }>{nameProfile}</Text>
            </View>
            <SignOut/>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        paddingTop: 30,
    },
    header: {
        display: 'flex',
        backgroundColor: Colors.PRIMARY,
        padding: 20,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    title: {
        fontSize: 24,
        color: Colors.WHITE,
        fontWeight: '600',
    },
    profile: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: Colors.WHITE,
        padding: 20,
        marginTop: 10,
        justifyContent: 'space-between',
        color: Colors.PRIMARY_BLACK,
    },
    infoProfile: {
        textAlign: 'right',
        alignItems: 'flex-end'
    },
});

export default ProfileHeader;