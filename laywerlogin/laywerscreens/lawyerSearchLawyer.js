// import { StyleSheet, Text, View, StatusBar, TextInput, ScrollView, ActivityIndicator } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import UserCard from '../../screens/UserCard'

// const LawyerSearchlawyer = ({ navigation }) => {


//     const [keyword, setKeyword] = useState("")
//     const [loading, setLoading] = useState(false)
//     const [data, setData] = useState([])
//     const [error, setError] = useState(null)

//     const getallusers = async () => {
//         if (keyword.length > 0) {
//             setLoading(true)
//             fetch(`${API_KEY}searchuser', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ keyword: keyword })
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     // console.log(data)
//                     if (data.error) {
//                         setData([])
//                         setError(data.error)
//                         setLoading(false)
//                     }
//                     else if (data.message == 'User Found') {
//                         setError(null)
//                         setData(data.user)
//                         setLoading(false)
//                     }
//                 })
//                 .catch(err => {
//                     setData([])
//                     setLoading(false)
//                 })
//         }
//         else {
//             setData([])
//             setError(null)
//         }
//     }

//     useEffect(() => {
//         getallusers()
//     }, [keyword])
//     return (
//         <View style={styles.container}>
            
//             <TextInput placeholder="Search By Username.." style={styles.searchbar}
//                 onChangeText={(text) => {
//                     setKeyword(text)
//                 }}
//             />
//             {
//                 loading ?
//                     <ActivityIndicator size="large" color="white" />
//                     :
//                     <>
//                         {
//                             error ?
//                                 <Text style={styles.formHead2}>{error}</Text>
//                                 :

//                                 <>
//                                 {
//                                     keyword?<ScrollView style={styles.userlists}>
//                                     {
//                                         data.map((item, index) => {
//                                             return <LawyerUserCard key={item.username} user={item}
//                                                 navigation={navigation}
//                                             />
//                                         })
                                    
//                                     }
//                                 </ScrollView>:
//                                 <ScrollView style={styles.userlists}>
//                                     {
//                                         data.map((item, index) => {
//                                             return <UserCard key={item.username} user={item}
//                                                 navigation={navigation}
//                                             />
//                                         })
//                                     }
//                                 </ScrollView>

//                                 }
//                                 </>
//                         }
//                     </>
//             }


//         </View>
//     )
// }

// export default LawyerSearchlawyer

// const styles = StyleSheet.create({
//     container: {
//         width: '100%',
//         height: '100%',
//         backgroundColor: 'white',
//         paddingVertical: 50,
//     },
//     userlists: {
//         width: '100%',
//         marginTop: 20,
//     },
//      searchbar: {
//         width: '90%',
//         backgroundColor: 'aqua',
//         borderRadius: 30,
//         paddingVertical: 10,
//         paddingHorizontal: 20,
//         marginTop: 10,
//         fontSize: 18,
//         alignSelf: 'center',
//         color:"white",
//     },
//     formHead2: {
//         fontSize: 20,
//         color: 'white',
//         textAlign: 'center',
        
//     },

// })








import { StyleSheet, Text, View, StatusBar, TextInput, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import UserCard from '../../screens/UserCard'
import Prisoners from '../../information/prisoners'

const LawyerSearchlawyer = ({ navigation }) => {


    const [keyword, setKeyword] = useState("")
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    const getallusers = async () => {
        if (keyword.length > 0) {
            setLoading(true)
            fetch(`${API_KEY}searchuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ keyword: keyword })
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.error) {
                        setData([])
                        setError(data.error)
                        setLoading(false)
                    }
                    else if (data.message == 'User Found') {
                        setError(null)
                        setData(data.user)
                        setLoading(false)
                    }
                })
                .catch(err => {
                    setData([])
                    setLoading(false)
                })
        }
        else {
            setData([])
            setError(null)
        }
    }

    useEffect(() => {
        getallusers()
    }, [keyword])
    return (
        <View style={styles.container}>
            
            <TextInput placeholder="Search By Username.." style={styles.searchbar}
                onChangeText={(text) => {
                    setKeyword(text)
                }}
            />
             {keyword.length === 0 && <Prisoners />}


            {
                loading ?
                    <ActivityIndicator size="large" color="white" />
                    :
                    <>
                        {
                            error ?
                                <Text style={styles.formHead2}>{error}</Text>
                                :

                                <ScrollView style={styles.userlists}>
                                    {
                                        data.map((item, index) => {
                                            return <UserCard key={item.username} user={item}
                                                navigation={navigation}
                                            />
                                        })
                                    }
                                </ScrollView>
                        }
                    </>
            }
        </View>
    )
}

export default LawyerSearchlawyer

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        paddingVertical: 50,
    },
    userlists: {
        width: '100%',
        marginTop: 20,
    },
     searchbar: {
        width: '90%',
        backgroundColor: 'aqua',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
        fontSize: 18,
        alignSelf: 'center',
        color:"white",
    },
    formHead2: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        
    },

})//lawyersearchlawyer





