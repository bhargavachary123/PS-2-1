import React from 'react';
import { Text, View, Button, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';

const image = { uri: "https://wallpapers.com/images/featured/jail-background-qbmoztosi7bm3tcu.jpg" }

export default function FirstScreen({ navigation }) {
  return (
    <ImageBackground
      source={image}
      resizeMode='cover'
      style={styles.backgroundImage}>
      <View style={styles.main}>
        <TouchableOpacity
          style={styles.bg}
          onPress={() => navigation.navigate('LoginStackScreen')}>
          
            <Image style={styles.buttonImage} source={require('../assets/favicon.png')} />
        
          
        </TouchableOpacity>
        
        <Text style={{ fontSize: 28, color: 'white', textAlign: 'center',flexDirection:'column' }}>Lawyers</Text>
        <TouchableOpacity
          style={styles.bg}
          onPress={() => navigation.navigate('LoginStackScreen')}>
         
          <Text style={{ fontSize: 28, color: 'white', textAlign: 'center' }}>Undertrial</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  texts: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'column',

  },
  bg: {
    height: 150,
    width: 150,
    backgroundColor: "rgba(128,0,128,0.5)", // Purple color with 50% transparency
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    // borderRadius: 75, // Make it half of the height to make it circular
    overflow: 'hidden', // Clip the content inside the circle
  },
  buttonImage: {
    width: 80,
    height: 80,
    // borderRadius: 40, // Make it half of the width/height to make it circular
    marginBottom: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});
