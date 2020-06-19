import React, { Fragment, useState } from 'react';
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

export default EditEventScreen = (props) => {
  const { navigation, route } = props;
  const { user, event } = route.params;

  const [title, setTitle] = useState(event.title);
  const [date, setDate] = useState(event.date);

  const getTitle = (cb) => {
    setTitle(cb);
  };

  const getDate = (cb) => {
    setDate(cb);
  };

  const handleUpdate = () => {
    const db = firebase.firestore();

    db.collection(`users/${user.id}/events`)
      .doc(event.key)
      .set({
        title: title,
        date: date,
      })
      .then(() => {
        console.log('updated');
        navigation.navigate('CircleList', {
          event: { title: title, date: date, key: event.key },
        });
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
          title="イベントを編集する"
          onPressA={() => {
            navigation.goBack();
          }}
        />
        <View style={{ marginTop: 24 }} />
        <MyTextInput
          title="イベント名"
          fbody={event.title}
          callback={getTitle}
        />
        <View style={{ marginTop: 24 }} />
        <MyDatePicker fbody={event.date} callback={getDate} />
        <View style={{ marginTop: 40 }} />
        <View style={styles.boxContainer}>
          <MyBoxButton title="変更" onPress={handleUpdate} />
          <MyBoxButton
            title="キャンセル"
            onPress={() => {
              navigation.goBack();
            }}
          />
          <MyBoxButton
            title="削除"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      </SafeAreaView>
    </Fragment>
  );
};
