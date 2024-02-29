
import { StyleSheet, Text, View, StatusBar, ScrollView, Image,  ActivityIndicator } from 'react-native'
import React, { useEffect,useState } from 'react'
import { Foundation } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const image={uri:"https://frappecloud.com/files/user.png"};

export default function ProfileScreen({navigation}) {
  const [userdata, setUserdata] = React.useState(null)

    const loaddata = async () => {
        AsyncStorage.getItem('user')
            .then(async (value) => {
                fetch(`${API_KEY}userdata', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer' + JSON.parse(value).token
                    },
                    body: JSON.stringify({ email: JSON.parse(value).user.email })
                })
                    .then(res => res.json()).then(data => {
                        if (data.message == 'User Found') {
                            setUserdata(data.user)
                        }
                        else {
                            alert('Login Again')
                            navigation.navigate('LoginScreen')
                        }
                    })
                    .catch(err => {
                        navigation.navigate('LoginScreen')
                    })
            })
            .catch(err => {
                navigation.navigate('LoginScreen')
            })
    }
    useEffect(() => {
        loaddata()
    }, [])

    console.log('userdata ', userdata)


    return (
     <View style={styles.texts}>
      {/* <Text>Hello User..!</Text>
        <Text>Profile Screen is under maintenance...
            please visit some other time..!!</Text> */}
            <Foundation name="refresh" size={30} color="white" style={styles.refresh}
                onPress={() => loaddata()}
            />
            {
                userdata ?
                    <ScrollView>
                        <View style={styles.c1}>
                            {/* {
                                userdata.profilepic.length > 0 ?
                                    <Image style={styles.profilepic} source={{ uri: userdata.profilepic }} />
                                    :
                                    <Image style={styles.profilepic} source={image} />
                            } */}
                            <Image style={styles.profilepic} source={image} />
                            <Text style={styles.txt}>{userdata.username}</Text>

                            <View style={styles.c11}>
                                <View style={styles.c111}>
                                    <Text style={styles.txt1}>ongoing cases</Text>
                                    <Text style={styles.txt2}>{userdata.followers.length}</Text>
                                </View>
                                <View style={styles.vr1}></View>
                                <View style={styles.c111}>
                                    <Text style={styles.txt1}>cases taken</Text>
                                    <Text style={styles.txt2}>{userdata.following.length}</Text>
                                </View>
                                <View style={styles.vr1}></View>
                                <View style={styles.c111}>
                                    <Text style={styles.txt1}>solved cases</Text>
                                    <Text style={styles.txt2}>{userdata.posts.length}</Text>
                                </View>
                            </View>

                            {
                                userdata.description.length > 0 &&
                                <Text style={styles.description}>{userdata.description}</Text>
                            }


                        </View>
                        
                    </ScrollView>

                    :
                    <ActivityIndicator size="large" color="white" />
            }

     </View>
    );
  }
  const styles=StyleSheet.create({
    texts:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
    },
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: 'black',
      paddingVertical: 50,
  },
  c1: {
      paddingTop:20,
      marginTop:10,
      width: '100%',
      alignItems: 'center',
  },
  profilepic: {
      width: 150,
      height: 150,
      borderRadius: 75,
      margin: 10
  },
  txt: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      margin: 10,
      backgroundColor: '#111111',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20
  },
  txt1: {
      color: 'black',
      fontSize: 15,
  },
  txt2: {
      color: 'black',
      fontSize: 20,
  },
  c11: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
  },
  c111: {
      alignItems: 'center',
  },
  vr1: {
      width: 1,
      height: 50,
      backgroundColor: 'black'
  },
  description: {
      color: 'white',
      fontSize: 15,
      marginVertical: 10,
      backgroundColor: '#111111',
      width: '100%',
      justifyContent:"center",
      padding: 10,
      paddingVertical: 20,
  },
  postpic: {
      width: '30%',
      height: 120,
      margin: 5
  },
  c13: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: 20,
      justifyContent: 'center'
  },
  c2: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      height: 200
  },
  refresh: {
      position: 'absolute',
      top: 50,
      right: 5,
      zIndex: 1,
  }
})