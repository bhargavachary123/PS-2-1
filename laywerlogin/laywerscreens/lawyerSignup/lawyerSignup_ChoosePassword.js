import {  Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { containerFull, goback, logo1} from '../../../screens/CommonCss/pagecss';

import { formbtn, formInput, formHead2 } from '../../../screens/CommonCss/formcss';
import { MaterialIcons } from '@expo/vector-icons';
const image={uri:"https://mc.webpcache.epapr.in/mcms.php?size=large&in=https://mcmscache.epapr.in/post_images/website_350/post_30210858/full.jpg"};
const LawyerSignup_ChoosePassword = ({ navigation, route }) => {
    const { email, username } = route.params;
    const [password, setpassword] = useState('')
    const [confirmpassword, setconfirmpassword] = useState('')
    const [loading, setLoading] = useState(false)


    const handlePassword = () => {

        if (password == '' || confirmpassword == '') {
            alert('Please enter password')
        } else if (password != confirmpassword) {
            alert('Password does not match')
        }
        else {
            setLoading(true)
            fetch(`${API_KEY}lawsignup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email, username: username, password: password })
            })
                .then(res => res.json()).then(
                    data => {
                        if (data.message === "LawyerUsers Registered Successfully") {
                            setLoading(false)
                            alert(data.message);
                            navigation.navigate('LoginScreen')
                        }
                        else {
                            setLoading(false)
                            alert("Please try again");
                        }
                    }
                )
        }
    }
    return (
        <View style={containerFull}>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={goback}>

                <MaterialIcons name="arrow-back-ios" size={24} color="gray" />
                <Text style={{
                    color: 'gray',
                    fontSize: 16,
                }}

                >Go Back</Text>

            </TouchableOpacity>

            <Image source={image} style={logo1} />
            <Text style={formHead2}>Choose a strong password</Text>
            <TextInput placeholder="Enter password" style={formInput} secureTextEntry
                onChangeText={(text) => setpassword(text)}
            />
            <TextInput placeholder="Confirm password" style={formInput} secureTextEntry
                onChangeText={(text) => setconfirmpassword(text)}
            />
            <Text style={formbtn}
                onPress={() => handlePassword()}
            >
                Next
            </Text>

        </View>
    )
}



export default LawyerSignup_ChoosePassword