import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

const HomeScreen = ({navigation}) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Text>Boop that Snoot!</Text>
     <Button
       onPress={() => navigation.navigate('Image')}
       title="Upload pet portrait"
     />
     <Button
       onPress={() => navigation.navigate('Quote')}
       title="Add some love"
     />
     <Button
       onPress={() => navigation.navigate('Generate')}
       title="Where's your boop?"
     />
   </View>
);

const ImageUpload = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Text>Uploading a picture of your lovely pet!</Text> // need a cuter rephrase
// take care of uploading images.
// Restrictions apply: needs to be xyz size,
// needs to be an actual pet so nothing inappropriate gets uploaded
// Have user plant where the boop is
     <Button
       onPress={() => navigation.navigate('Home')}
       title="____" //cute name equivalent of "going back to home to keep uploading quote"
     />
   </View>
);

const QuoteUpload = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Text>Insert a heartwarmign quote!</Text> // need a cuter rephrase
  // take care of uploading quotes.
// Restrictions apply: needs to be xyz size,
//needs to be actually heartwarming so nothing inappropriate gets uploaded
  // determine where the quote shows up after the boop
     <Button
       onPress={() => navigation.navigate('Home')}
       title="____" //cute name equivalent of "going back to home to keep doing xyz"
     />
   </View>
);

const BoopStyler = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Text>Stylize the boop!</Text> // need a cuter rephrase
  // provide different themes for different boop
// like "hope work is doing well!" or "take care of yourself!"
     <Button
       onPress={() => navigation.navigate('Home')}
       title="____" //cute name equivalent of "going back to home to keep doing xyz"
     />
   </View>
);

const BoopScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Text>Boop it!</Text>
      <Button
        onPress={() => //share the boop}
      />
     <Button
       onPress={() => navigation.navigate('Home')}
       title="New boop" // generate new boop!
     />
     <Button
     <Button
       onPress={() => //re-boop}
     />
   </View>
);

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Image: {
    screen: ImageUpload,
    navigationOptions: {
      headerTitle: 'Image',
    },
  },
  Quote: {
    screen: QuoteUpload,
    navigationOptions: {
      headerTitle: 'Quote',
    },
  },
  Style: {
    screen: BoopStyler,
    navigationOptions: {
      headerTitle: 'Style',
    },
  },
  Boop: {
    screen: BoopScreen,
    navigationOptions: {
      headerTitle: 'Boop!',
    },
  },
});

export default RootNavigator;
