import React, { Fragment } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

// components
import HeaderA from '../components/HeaderA';
import MyTextInput from '../components/MyTextInput';
import MyDatePicker from '../components/MyDatePicker';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',
    alignItems: 'center',
  },
});

export default AddEventScreen = (props) => {
  const { navigation } = props;
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
        <View style={{ marginTop: 32 }} />
        <MyTextInput title="イベント名" />
        <MyDatePicker />
        <MyTextInput title="URL (Optional)" />
      </SafeAreaView>
    </Fragment>
  );
};
