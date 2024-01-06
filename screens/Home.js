import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from '../components/carousel';

const { width, height } = Dimensions.get('window');

export default function Home({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.topbar}>
          <Text style={styles.headtext}>DashBoard</Text>
          <View style={styles.bot} />
        </View>
        <View>
          <SafeAreaView>
            <Carousel/>
          </SafeAreaView>
        </View>
        {/* <View style={styles.works1}> */}
          {/* <TouchableOpacity onPress={() => navigation.navigate('DashBoard')}>
            <View style={styles.buttonContainer}>
              <View style={styles.buttonbox}>
                <Image
                  style={styles.buttonImage}
                  source={require('../assets/update.gif')}
                />
              </View>
              <Text style={styles.textcont}>..</Text>
            </View>
          </TouchableOpacity> */}

        {/* </View> */}
        <View>
          <Text style={styles.headtext}>Quick Links</Text>
        </View>
        <View style={styles.quickLinksContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('LawyerStackScreen')}
          >
            <View style={styles.iconContainer}>
              <Image
                style={styles.buttonImageSmall}
                source={require('../assets/lawyer.gif')}
              />
              <Text style={styles.textcont}>Lawyers</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('RightStackScreen')}
          >
            <View style={styles.iconContainer}>
              <Image
                style={styles.buttonImageSmall}
                source={require('../assets/rights.gif')}
              />
              <Text style={styles.textcont}>Rights</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Rehabilation')}>
            <View style={styles.iconContainer}>
              <Image
                style={styles.buttonImageSmall}
                source={require('../assets/activities.gif')}
              />
              <Text style={styles.textcont}>Rehabilitation</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bot}>
        <TouchableOpacity onPress={() => navigation.navigate('LawBot')}>
          <Image style={styles.image} source={require('../assets/bot.gif')} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
  },
  topbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headtext: {
    fontSize: 26,
    textAlign: 'left',
    fontWeight: 'bold',
    margin: 10,
  },
  works1: {
    padding: height * 0.05,
    borderWidth: 2,
    borderColor: '#eee',
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 7,
  },
  quickLinksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 1,
    borderWidth: 2,
    borderColor: '#eee',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 7,
    height:200,
  },
  buttonContainer: {
    flexDirection: 'column',
    textAlign: 'center',
    padding: 3,
    width: width * 0.2,
  },
  iconContainer: {
    width: '100%', // Use percentage-based width for responsiveness
    height: height * 0.15,
    padding: 5,
    margin: 0,

  },
  buttonbox: {
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  buttonImage: {
    width: '100%', // Use percentage-based width for responsiveness
    height: height * 0.2,
    padding: 1,
    margin: 1,
  },
  buttonImageSmall: {
    width: '100%', // Use percentage-based width for responsiveness
    height: height * 0.13,
    padding: 0,
    paddingLeft: 95,
    margin: 0,
  },
  textcont: {
    textAlign: 'center',
    padding: 2,
    fontWeight: 'bold',
  },
  bot: {
    position: 'absolute',
    bottom: 40,
    right: 20,
  },
  image: {
    height: 60,
    width: 60,
  },
});