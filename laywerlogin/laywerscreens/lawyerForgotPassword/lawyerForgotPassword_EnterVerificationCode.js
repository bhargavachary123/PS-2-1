import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { containerFull, goback,logo1} from '../../../screens/CommonCss/pagecss';
import { formbtn, formHead3, formInput} from '../../../screens/CommonCss/formcss';
import { MaterialIcons } from '@expo/vector-icons';
const image={uri:"https://mc.webpcache.epapr.in/mcms.php?size=large&in=https://mcmscache.epapr.in/post_images/website_350/post_30210858/full.jpg"};


const LawyerForgotPassword_EnterVerificationCode = ({ navigation, route }) => {
    const { useremail, userVerificationCode } = route.params;
    console.log(useremail, userVerificationCode)

    const [verificationCode, setVerificationCode] = React.useState('');


    const handleVerificationCode = () => {

        if (verificationCode != userVerificationCode) {
            alert('Invalid Verification Code')
        }
        else {
            alert('Verification Code Matched')
            navigation.navigate('LawyerForgotPassword_ChoosePassword', { email: useremail })
        }

        // navigation.navigate('ForgotPassword_ChoosePassword')
    }
    return (
        <View style={containerFull}>
            <TouchableOpacity onPress={() => navigation.navigate('lawyerLoginScreen')} style={goback}>

                <MaterialIcons name="arrow-back-ios" size={24} color="gray" />
                <Text style={{
                    color: 'gray',
                    fontSize: 16,
                }}

                >Go Back</Text>

            </TouchableOpacity>

            <Image source={image} style={logo1} />
            <Text style={formHead3}>A verification code has been sent to your email</Text>

            <TextInput placeholder="Enter 6-Digit Code here" style={formInput}
                onChangeText={(text) => setVerificationCode(text)}
            />

            <Text style={formbtn}
                onPress={() => handleVerificationCode()}
            >
                Next
            </Text>
        </View>
    )
}



export default LawyerForgotPassword_EnterVerificationCode

const styles = StyleSheet.create({})