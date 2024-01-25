import {  StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { formHead} from '../../../screens/CommonCss/formcss';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LawyerSettings1 = ({ navigation }) => {
    const logout = () => {
        AsyncStorage.removeItem('user').then(() => {
            alert('Logged out successfully')
            navigation.navigate('LoginScreen')
        })
    }
    return (
        <View style={styles.container}>
            <Ionicons name="chevron-back-circle" size={24} color="white" style={styles.gohomeicon}
                onPress={() => navigation.navigate('My_UserProfile')}
            />
            <Text style={formHead}>Settings</Text>
            <Text style={styles.txt1}
                onPress={() => navigation.navigate('LawyerEditProfile')}
            >Edit Profile</Text>
            <Text style={styles.txt1}
                onPress={() => navigation.navigate('LawyerChangePassword')}
            >Change Password</Text>
            <Text style={styles.txt1}>Customer Support</Text>
            <Text style={styles.txt1} onPress={
                () => logout()
            }>Logout</Text>
        </View>
    )
}
export default LawyerSettings1
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    },
    txt1: {
        marginTop: 20,
        color: 'white',
        fontSize: 20,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    }
})