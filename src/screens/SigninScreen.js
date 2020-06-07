import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { useTwitter } from 'react-native-simple-twitter';
import firebase from 'firebase';

// authkeys
import ENV from '../../env.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',
    alignItems: 'center',
  },
});

export default HomeScreen = (props) => {
  const { navigation } = props;

  const { twitter, TWModal } = useTwitter({
    onSuccess: (user, accessToken) => {
      console.log(user);
      console.log(accessToken);
      navigation.navigate('Home');
    },
  });

  const handleSubmit = async () => {
    console.log('signin');
    try {
      await twitter.login();
      const credential = firebase.auth.TwitterAuthProvider.credential(
        ENV.TWITTER_ACCESS_TOKEN,
        ENV.TWITTER_ACCESS_TOKEN_SECRET
      );
      return firebase.auth().signInWithCredential(credential);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    twitter.setConsumerKey(ENV.TWITTER_API_KEY, ENV.TWITTER_API_SECRET_KEY);
  });

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleSubmit}>
        <Text>button</Text>
      </TouchableOpacity>
      <TWModal />
    </SafeAreaView>
  );
};
