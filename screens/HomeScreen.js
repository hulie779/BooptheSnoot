import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import {NavigationActions} from 'react-navigation';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/mainhapdoggo.jpg')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View>
            <Text style={styles.BoopTheSnootText}>
              Boop the Snoot!
            </Text>
          </View>

          <View style={styles.snootContainer}>
            <TouchableOpacity onPress={this._boopfunction}>
            <Image
              style={styles.snootbutton}
              source={require('../assets/images/circle.png')}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarText}>Boop the Snoot for more Doggos!</Text>
        </View>
      </View>
    );
  }


  _boopfunction = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
    flex: 1,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 20,
    //flex: 1,
    //alignItems: 'stretch',
    position: 'absolute',
    top: 0,
    left: 70,
    width: '100%',
    height: '100%',
  },
  welcomeImage: {
    //width: "100%",
    //height: "100%",
    flex: 1,
    //resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  BoopTheSnootText: {
    fontSize: 45,
    color: 'rgba(255,255,255, 1)',
    lineHeight: 80,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarText: {
    fontSize: 21,
    color: 'rgba(0,0,0, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  snootContainer: {
    marginTop: 90,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 3,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  snootbutton: {
    alignItems: 'center',
    width: 110,
    height: 80,
    marginTop: 0,
    marginRight: 60,
    opacity: 0.0,
    backgroundColor: '#ffffff',
    padding: 10,
  }
});
