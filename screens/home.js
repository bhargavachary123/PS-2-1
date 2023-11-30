import React from 'react';
import {Text,View, Button,StyleSheet,Card,Image,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// import Lawyers from '../information/lawyersinfo';
// import Dashboard from '../information/dashboardinfo';
// import Bail from '../information/bailinfo';
// import { responsiveWidth ,responsiveHeight,responsiveScreenFontSize} from 'react-native-responsive-dimensions';


export default function Home({navigation}) {
    return (
  <ScrollView>
<View style={styles.back}>
      <View style={styles.main}>
           {/* <View style={styles.bg}>

               <Text style={{fontSize:28,color:'white',textAlign:'center',}} onPress={() => navigation.navigate('LawyerStackScreen')}>Lawyers</Text>
        </View>
        <View style={styles.bg}>
          <Text style={{fontSize:28,color:'white',textAlign:'center',}} onPress={() => navigation.navigate('Dashboard')}>Dashboard</Text>
            
        </View> */}
        <View style={styles.topbar}>
          <Text style={styles.headtext}>DashBoard</Text>
          <View style={styles.bot}>
        <TouchableOpacity onPress={() => navigation.navigate('LawBot')}>
      <Image style={styles.image} source={require('../assets/bot.gif')} />
    </TouchableOpacity>
      </View>
      </View>
        <View style={styles.works1}>
    

    {/* <TouchableOpacity onPress={() => navigation.navigate('DashBoard')}> */}
      <View style={styles.buttonContainer}>
      <View style={styles.buttonbox}>

        {/* <Image
          style={styles.buttonImage}
          source={require('../assets/lawyer.gif')}  
        /> */}
      </View>
      <Text style={styles.textcont}>..</Text>

      </View>

    {/* </TouchableOpacity> */}
</View>
<View >
          <Text style={styles.headtext}>Quick Links</Text>
  </View>
 <View style={styles.works1}>
    

    <TouchableOpacity onPress={() => navigation.navigate('LawyerStackScreen')}>
      <View style={styles.buttonContainer}>
      <View style={styles.buttonbox}>

        <Image
          style={styles.buttonImage}
          source={require('../assets/lawyer.gif')}  
        />
      </View>
      <Text style={styles.textcont}>Lawyers</Text>

      </View>

    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
      <View style={styles.buttonContainer}>
      <View style={styles.buttonbox}>

        <Image
          style={styles.buttonImage}
          source={require('../assets/update.gif')}  
        />

        </View>
        <Text style={styles.textcont}>Dashboard</Text>

      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('RightStackScreen')}>
      <View style={styles.buttonContainer}>
      <View style={styles.buttonbox}>

        <Image
          style={styles.buttonImage}
          source={require('../assets/rights.gif')}  
        />

        </View>
        <Text style={styles.textcont}>Rights</Text>

      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Rehabilation')}>
      <View style={styles.buttonContainer}>
      <View style={styles.buttonbox}>

        <Image
          style={styles.buttonImage}
          source={require('../assets/activities.gif')}  
        />

        </View>
        <Text style={styles.textcont}>Rehabilation</Text>

      </View>
      </TouchableOpacity>


      </View>
        {/* <View style={styles.bot}>
        <TouchableOpacity onPress={() => navigation.navigate('LawBot')}>
      <Image style={styles.image} source={require('../assets/bot.gif')} />
    </TouchableOpacity>
      </View> */}
      </View>
      </View>
      </ScrollView>

    );
  }   
       
     

  const styles=StyleSheet.create({
    back: {
      backgroundColor:'grey',
    },
    main:{
      flex:1,
      alignItems:"top",
      justifyContent:"center",
      flexDirection:'column',
      padding:20,
      backgroundColor: 'white',
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
      height:50,
      width:50,
      marginLeft:'70%',
      backgroundColor:'black',
    },
    image: {
      height: 60,
      width:60,
    
    },
  
    topbar:{
      flexDirection:'row',

    },
  
 
    headtext: {
      fontSize: 26,
      textAlign: 'left',
      fontWeight: 'bold',
      margin:10,
    },

    screen: {
      backgroundColor: 'white',
    },
  



    texts: {
      flexDirection: 'row',
      borderWidth: 2,
      width: 450,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 60,
      margin: 20,
      textAlign: 'center',
      backgroundColor: 'black',
      color: 'skyblue',
    },
  
    textcont: {
      textAlign: 'center',
      padding: 2,
      fontWeight: 'bold',
    },
  
    works: {
      padding: 10,
      borderWidth: 2,
      borderColor: '#333',
      margin: 20,
      justifyContent: 'center',
      alignItems: 'center',
      height: 300,
      backgroundColor: 'white',
      borderRadius:7,
    },

    youtube: {
      flexDirection: 'column',
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20,
      marginTop: 10,
      padding: 10,
    },
    buttonImage: {
      width: 70,  
      height: 70, 
      padding:5,
      margin:5,
      
    },
    buttonbox:{
      borderColor:'black',
      borderWidth:2,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:7,
    },
    buttonContainer: {
      padding: 50, 
      flexDirection:'column',
      textAlign:'center', 
      padding:10,
      width:120,
      marginRight:20,
      marginLeft:20,
    },
    // screen: {
    //   backgroundColor: 'white',
    // },
    works1: {
      padding: 60,
      borderWidth: 2,
      borderColor: '#eee',
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center',
      height: 200,
      backgroundColor: 'white',
      flexDirection: 'row',
      borderRadius:7,
  
    },
  
  
  })