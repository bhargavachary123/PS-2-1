import React from "react";
import { StyleSheet,View,Text ,ScrollView,Image} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
export default function rightToCloth() {
    return (
        <View style={{backgroundColor: '#fff',flexDirection:'column',alignItems:"center",justifyContent:"center",}}>
            <Text style={{fontSize:40,color:'black',textAlign:'center',padding: 20,}} > About right to cloth</Text>
            <View style={{flexDirection: 'row',}}>
              <p style={{fontSize:30,color:'black',width: 200,padding: 5,}}>Every civil prisioner and under-trail unable to provide for himself or herself with sufficient clothing and bedding
              shall be supplied by the Superintendent with such clothing and bedding as may be necessary.
              </p>
              <Image source={{uri:'https://www.dualfrequency.co.uk/s/United-Nations-Convention-on-the-Rights-of-the-Child-Teen-Friendly-Article-27.png',
                            width: 400,
                            height: 700}}/>
            </View>
              <YoutubePlayer style={styles.youtube}
                      width={700}
                      height={300}
                      play={false}
                      videoId={'kLvi_egxXjM'}
                  />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    fontSize: 28,
    color: 'black',
    textAlign:'center',
  },
  youtube:{
    flexDirection:'column',
    alignItems:"center",
    justifyContent:"center",
    marginBottom:20, 
    marginTop:10,
    padding:10,
  },
});