import React, { Fragment } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

// firebase
import firebase from 'firebase';

// components
import HeaderA from '../components/HeaderA';
import Footer from '../components/Footer';
import EventListItem from '../components/EventListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',
    alignItems: 'center',
  },
});

export default HomeScreen = (props) => {
  // navigation.navigate('AddEvent');

  const handlePress = () => {
    firebase.firestore();
  };

  const { navigation } = props;
  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: '#fff' }} />
      <SafeAreaView style={styles.container}>
        <HeaderA
          iconA="bars"
          iconB="history"
          title="参加予定のイベント"
          onPressA={() => {}}
          onPressB={() => {
            navigation.navigate('Past');
          }}
        />
        <EventListItem
          onPress={() => {
            navigation.navigate('CircleList');
          }}
        />
      </SafeAreaView>
      <Footer onPress={handlePress} />
    </Fragment>
  );
};
