import React from "react";
import { StyleSheet,View,Text ,ScrollView,Image} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
export default function rightToHuman() {
    return (
        <View style={{backgroundColor: '#fff',flexDirection:'column',alignItems:"center",justifyContent:"center",}}>
            <Text style={{fontSize:40,color:'black',textAlign:'center',padding: 20,}} > About right to Human</Text>
            <View style={{flexDirection: 'row',}}>
              <Text style={{fontSize:30,color:'black',width: 300,padding: 5,}}>Right to be treated as a human being and as a person; this right has been streesed
              and recommended by the supreme court of india which has categorical declared that prisioners shall not be treated as non-persons.
              right to integrity of body; immunity from use of repression and personal abuse, whether by custodial staff or by prisioners.
              </Text>
              <Image source={{uri: 'https://image.slidesharecdn.com/11-190902065309/85/human-rights-dignity-and-the-common-good-5-320.jpg?cb=1665790375',
                          width: 500,
                          height: 700,}}/>
            </View>
              <YoutubePlayer style={styles.youtube}
                      width={700}
                      height={300}
                      play={false}
                      videoId={'qQXdn7WYFSM'}
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

