import React, { useState, Fragment } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import firebase from 'firebase';

// components
import HeaderA from '../components/HeaderA';
import MyTextInput from '../components/MyTextInput';
import MyDatePicker from '../components/MyDatePicker';
import MyBoxButton from '../components/MyBoxButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',
    alignItems: 'center',
  },
  boxContainer: {
    width: '90%',
    flexDirection: 'row',
  },
});

export default AddEventScreen = (props) => {
  const { navigation, route } = props;
  const { user } = route.params;

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [url, setUrl] = useState('');

  const getTitle = (cb) => {
    setTitle(cb);
  };

  const getDate = (cb) => {
    setDate(cb);
  };

  const getUrl = (cb) => {
    setUrl(cb);
  };

  const handlePress = () => {
    const db = firebase.firestore();
    db.collection(`users/${user.id}/events`)
      .add({
        title: title,
        date: date,
      })
      .then((docRef) => {
        console.log(docRef.id);
        navigation.goBack();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: '#fff' }} />
      <SafeAreaView style={styles.container}>
        <HeaderA
          iconA="chevron-left"
          title="イベントを追加する"
          onPressA={() => {
            navigation.goBack();
          }}
        />
        <View style={{ marginTop: 24 }} />
        <MyTextInput title="イベント名" callback={getTitle} />
        <View style={{ marginTop: 24 }} />
        <MyDatePicker callback={getDate} />
        <View style={{ marginTop: 40 }} />
        <View style={styles.boxContainer}>
          <MyBoxButton title="追加" onPress={handlePress} />
          <MyBoxButton
            title="キャンセル"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      </SafeAreaView>
    </Fragment>
  );
};
