import React from 'react';
import {Text,View, Button,StyleSheet,Card,Image,TouchableOpacity} from 'react-native';
// import Lawyers from '../information/lawyersinfo';
// import Dashboard from '../information/dashboardinfo';
// import Bail from '../information/bailinfo';
// import { responsiveWidth ,responsiveHeight,responsiveScreenFontSize} from 'react-native-responsive-dimensions';


export default function Home({navigation}) {
    return (

      <View style={styles.main}>
         <View style={styles.bg}>

               <Text style={{fontSize:28,color:'white',textAlign:'center',}} onPress={() => navigation.navigate('Lawyers')}>Lawyers</Text>
        </View>
        <View style={styles.bg}>
          <Text style={{fontSize:28,color:'white',textAlign:'center',}} onPress={() => navigation.navigate('Dashboard')}>Dashboard</Text>
            
        </View>

        <View style={styles.bot}>
        <TouchableOpacity onPress={() => navigation.navigate('LawBot')}>
      <Image style={styles.image} source={require('../assets/bot.gif')} />
    </TouchableOpacity>
        </View>
      
      </View>
    );
  }   
       
     

  const styles=StyleSheet.create({
    texts:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
    },
    main:{
      flex:1,
      alignItems:"top",
      justifyContent:"center",
      flexDirection:'row',
      padding:20,
      margin:20,
    },
    bg:{
      marginleft:20,
      height:50,
      width:150,
      //borderWidth:3,
      backgroundColor:"black",
      alignItems:'center',
      justifyContent:'center'
    },
    bot: { 
      height:60,
      width:60,
      borderRadius:'50%',
      marginTop:250,
      backgroundColor:'black',
    },
    image: {
      height: 60,
      width:60,
      borderRadius:'50%',
    },
  })