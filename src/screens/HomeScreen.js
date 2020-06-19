import React, { Fragment, useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
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
  const { navigation, route } = props;
  const { user } = route.params;

  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [events, setEvents] = useState([]); // Initial empty array of users

  useEffect(() => {
    const db = firebase.firestore();
    db.collection(`users/${user.id}/events`).onSnapshot((querySnapshot) => {
      const eventList = [];
      querySnapshot.forEach((documentSnapshot) => {
        eventList.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });
      setEvents(eventList);
      setLoading(false);
    });
  }, []);

  const handlePress = () => {
    navigation.navigate('AddEvent', { user: user });
  };

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
        <FlatList
          data={events}
          renderItem={({ item }) => (
            <EventListItem
              title={item.title}
              date={item.date}
              onPress={() => {
                navigation.navigate('CircleList', { user: user, event: item });
              }}
            />
          )}
        />
      </SafeAreaView>
      <Footer onPress={handlePress} />
    </Fragment>
  );
};
