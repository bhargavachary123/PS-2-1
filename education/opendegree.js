import React from "react";
import { StyleSheet,View,Text ,ScrollView} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function OpenDegree() {
    return (
        <ScrollView> 
            <View style={styles.youtube}>        
            <YoutubePlayer 
                height={300}
                width={400}
                play={false}
                videoId={'sNaHN4tZmRk'}
            />
            </View>
           <View style={styles.youtube} >
            <YoutubePlayer 
            height={300}
            width={400}
            play={false}
            videoId={'e037nbVAwm8'}
            />                    
            </View>
                        
            <View style={styles.youtube}>
            <YoutubePlayer 
            height={300}
            width={400}
            play={true}
            videoId={'e037nbVAwm8'}
            />                    
            </View>
        </ScrollView>
       
     
    ) 
}
const styles=StyleSheet.create({
    youtube:{
        flexDirection:'column',
        alignItems:"center",
        justifyContent:"center",
        marginBottom:20, 
        marginTop:10,
        padding:10,
      },
  
})