import React, { Fragment } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

// components
import HeaderA from '../components/HeaderA';
import MyTextInput from '../components/MyTextInput';
import MyImagePicker from '../components/MyImagePicker';
import MyBoxButton from '../components/MyBoxButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',
    alignItems: 'center',
  },
  boxContainer: {
    flexDirection: 'row',
  },
});

export default AddItemScreen = (props) => {
  const { navigation } = props;
  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: '#fff' }} />
      <SafeAreaView style={styles.container}>
        <HeaderA
          iconA="chevron-left"
          title="アイテムを追加する"
          onPressA={() => {
            navigation.goBack();
          }}
        />
        <View style={{ marginTop: 24 }} />
        <MyTextInput title="アイテム名" />
        <View style={{ marginTop: 24 }} />
        <MyTextInput title="単価" />
        <View style={{ marginTop: 24 }} />
        <MyTextInput title="数量" />
        <View style={{ marginTop: 24 }} />
        <MyImagePicker />
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
