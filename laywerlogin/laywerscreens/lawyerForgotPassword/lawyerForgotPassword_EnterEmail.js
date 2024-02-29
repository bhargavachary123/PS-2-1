import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { containerFull, goback, logo1 } from '../../../screens/CommonCss/pagecss';
import { formbtn, formHead2, formInput } from '../../../screens/CommonCss/formcss';
import { MaterialIcons } from '@expo/vector-icons';
const image={uri:"https://mc.webpcache.epapr.in/mcms.php?size=large&in=https://mcmscache.epapr.in/post_images/website_350/post_30210858/full.jpg"};
const LawyerForgotPassword_EnterEmail = ({ navigation }) => {
    const [email, setEmail] = React.useState('')
    const [loading, setLoading] = React.useState(false)


    const handleEmail = () => {
        if (email === '') {
            alert('Please enter email')
        }

        else {
            setLoading(true)
            fetch(`${API_KEY}lawverifyfp', {    
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email })
            })
                .then(res => res.json()).then(data => {
                    if (data.error === "Invalid Credentials") {
                        // alert('Invalid Credentials')
                        alert('Invalid Credentials')
                        setLoading(false)
                    }
                    else if (data.message === "Verification Code Sent to your Email") {
                        setLoading(false)
                        alert(data.message);

                        navigation.navigate('LawyerForgotPassword_EnterVerificationCode', {
                            useremail: data.email,
                            userVerificationCode: data.VerificationCode
                        })

                    }
                })
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
            <Text style={formHead2}>Verify Your Email</Text>
            <TextInput placeholder="Enter Your Email" style={formInput}
                onChangeText={(text) => setEmail(text)}
            />
            {
                loading ? <ActivityIndicator size="large" color="black" /> :
                    <Text style={formbtn}
                        onPress={() => handleEmail()}
                    >
                        Next
                    </Text>
            }
        </View>
    )
}


export default LawyerForgotPassword_EnterEmail

const styles = StyleSheet.create({})