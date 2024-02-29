import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native'
import React, { useState } from 'react'
import { containerFull, goback,logo1, } from '../../../screens/CommonCss/pagecss';
import { formbtn, formHead3, formInput, formHead2 } from '../../../screens/CommonCss/formcss';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const image="https://mc.webpcache.epapr.in/mcms.php?size=large&in=https://mcmscache.epapr.in/post_images/website_350/post_30210858/full.jpg";

const LawyerChangeUsername = ({ navigation }) => {
    const [username, setusername] = useState('')
    const [loading, setLoading] = useState(false)
    const handleUsername = () => {
        if (username == '') {
            alert('Please enter username')
        }
        else {
            setLoading(true)
            AsyncStorage.getItem('user')
                .then(data => {
                    fetch(`${API_KEY}lawsetusername', {
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: JSON.parse(data).user.email,
                            username: username
                        })
                    })
                        .then(res => res.json())
                        .then(
                            data => {
                                if (data.message === "Username Updated Successfully") {
                                    setLoading(false)
                                    alert('Username has been set successfully')
                                    navigation.navigate('LawyerSettings1')
                                }
                                else if (data.error === "Invalid Credentials") {
                                    alert('Invalid Credentials')
                                    setLoading(false)
                                    navigation.navigate('LoginScreen')
                                }
                                else {
                                    setLoading(false)
                                    alert("Username not available");
                                }
                            }
                        )
                        .catch(err => {
                            alert('Something went wrong')
                            setLoading(false)
                        })
                })
                .catch(err => {
                    alert('Something went wrong')
                    setLoading(false)
                }
                )
        }
    }

    return (
        <View style={containerFull}>
            <TouchableOpacity onPress={() => navigation.navigate('LawyerSettings1')} style={goback}>

                <MaterialIcons name="arrow-back-ios" size={24} color="gray" />
                <Text style={{
                    color: 'gray',
                    fontSize: 16,
                }}

                >Go Back</Text>

            </TouchableOpacity>

            <Image source={image} style={logo1} />
            <Text style={formHead2}>Change Username</Text>
            <TextInput placeholder="Enter new username" style={formInput}
                onChangeText={(text) => setusername(text)}
            />

            {
                loading ? <ActivityIndicator /> :
                    <Text style={formbtn}
                        onPress={() => handleUsername()}
                    >
                        Save
                    </Text>
            }
        </View>
    )
}




export default LawyerChangeUsername

const styles = StyleSheet.create({})