import React, { Fragment } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

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

export default PastEventScreen = (props) => {
  const { navigation } = props;
  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: '#fff' }} />
      <SafeAreaView style={styles.container}>
        <HeaderA
          iconA="chevron-left"
          title="過去の参加イベント"
          onPressA={() => {
            navigation.goBack();
          }}
        />
        <EventListItem
          onPress={() => {
            navigation.navigate('CircleList');
          }}
        />
      </SafeAreaView>
      <Footer showPlusButton={false} showUnpaid={false} />
    </Fragment>
  );
};
