// import React from "react";
// import { StyleSheet,View,Text,Button,Alert,ScrollView} from "react-native";
// export default function Lawyers({navigation}) {
//     return (
//         <ScrollView>
//                 <View style={styles.main}>
//                     <View style={styles.bg}>
//                         <Text style={{fontSize:28,color:'black',textAlign:'center',}}>  Mr.Ramachandra Martand Hajarnavis </Text>
//                         <Text style={{fontSize:15,textAlign:'center',}}>Address: 89,shahjahan road,New Delhi</Text>
//                         <Text style={{fontSize:15,textAlign:'center',}}>Date of designation as senior advocate: 26-3-1966</Text>
//                         <Text style={{fontSize:15,textAlign:'center',}}>Remarks: Retired Judge,Bombay High Court</Text>
//                         <View style={{flexDirection:'row',justifyContent: 'center',alignItems:'center'}}>
//                             <Button title= "contact" onPress={() => navigation.navigate('lawyerOne')}/>
//                         </View>
//                     </View>
//                     <View style={styles.bg}>
//                         <Text style={{fontSize:28,color:'black',textAlign:'center',}} >Mr. Hari Ramchandra Gokhle</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Address: Rocky Hill Flats,N.Dabholkar Road,Bombay-6</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Date of designation as senior advocate: 23-7-1966</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Remarks: Advocate</Text>
//                         <View style={{flexDirection:'row',justifyContent: 'center',alignItems:'center'}}><Button title= "contact" onPress={() => navigation.navigate('lawyerOne')}/></View>
//                     </View>

//                     <View style={styles.bg}>
//                         <Text style={{fontSize:28,color:'black',textAlign:'center',}}>Mr. G. R. Rajagopaul</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Address: c-53,south Extn.Part-1,New Delhi</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Date of designation as senior advocate: 3-10-1966</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Remarks: Advocate</Text>
//                         <View style={{flexDirection:'row',justifyContent: 'center',alignItems:'center'}}><Button title= "contact" onPress={() => navigation.navigate('lawyerOne')}/></View>
//                     </View>
//                     <View style={styles.bg}>
//                         <Text style={{fontSize:28,color:'black',textAlign:'center',}}>Dr.V.A.Sayed Muhammed</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Address: Address not available</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Date of designation as senior advocate: 7-11-1966</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Remarks: Advocate General</Text>
//                         <View style={{flexDirection:'row',justifyContent: 'center',alignItems:'center'}}><Button title= "contact" onPress={() => navigation.navigate('lawyerOne')}/></View>
//                     </View>
//                     <View style={styles.bg}>
//                         <Text style={{fontSize:28,color:'black',textAlign:'center',}}>Mr.N.D.Khar Khanis</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Address: 122,Golf Links,N.D.</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Date of designation as senior advocate: 7-10-1967</Text>
//                         <Text style={{fontSize:15,textAlign:'center'}}>Remarks: Advocate</Text>
//                         <View style={{flexDirection:'row',justifyContent: 'center',alignItems:'center'}}><Button title= "contact" onPress={() => navigation.navigate('lawyerOne')}/></View>
//                     </View>
//                 </View>
//         </ScrollView>

//     )
// }
// const styles= StyleSheet.create({
//     main:{
//         backgroundColor:'black',
//     },
//     bg:{
//         backgroundColor:'white',
//         color:'black',
//         padding:10,
//         margin:10,
//     }


// })
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React ,{useEffect,useState}from 'react'
import Post_Big_Card from '../../information/Post_Big_Card';

const Lawyers = ({navigation}) => {

    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_KEY}lawgetAllUser', {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        console.log('Fetched data:', result);

        // Check if "data" property exists and contains an array
        if (result && result.data && Array.isArray(result.data)) {
          setData(result.data);
        } else {
          console.error('Invalid data structure:', result);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

    return (
        <ScrollView style={styles.container}>
            {
                data.map((item) => {
                    return (
                        <Post_Big_Card
                            key={item.id}
                            username={item.username}
                            profile_image={item.profile_image}
                            post_pic={item.image}
                            likes={item.likes}
                            comments={item.comments}
                        />
                    )
                })
            }
        </ScrollView>
    )
}

export default Lawyers

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
    }
})