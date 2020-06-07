import React, { Fragment } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

// components
import HeaderA from '../components/HeaderA';
import MyTextInput from '../components/MyTextInput';
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

export default AddCircleScreen = (props) => {
  const { navigation } = props;
  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: '#fff' }} />
      <SafeAreaView style={styles.container}>
        <HeaderA
          iconA="chevron-left"
          title="サークルを追加する"
          onPressA={() => {
            navigation.goBack();
          }}
        />
        <View style={{ marginTop: 24 }} />
        <MyTextInput title="サークル名" />
        <View style={{ marginTop: 24 }} />
        <MyTextInput title="スペース" />
        <View style={{ marginTop: 24 }} />
        <MyTextInput title="URL (Optional)" />
        <View style={{ marginTop: 40 }} />
        <View style={styles.boxContainer}>
          <MyBoxButton
            title="追加"
            onPress={() => {
              navigation.goBack();
            }}
          />
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