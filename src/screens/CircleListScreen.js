import React, { Fragment } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

// components
import HeaderB from '../components/HeaderB';
import Footer from '../components/Footer';
import CircleListItem from '../components/CircleListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',
    alignItems: 'center',
  },
});

export default CircleListScreen = (props) => {
  const { navigation } = props;
  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: '#fff' }} />
      <SafeAreaView style={styles.container}>
        <HeaderB
          title="c97d1"
          subtitle="2019/12/28"
          navigation={navigation}
          onPressEdit={() => {
            navigation.navigate('EditEvent');
          }}
        />
        <CircleListItem
          onPress={() => {
            navigation.navigate('ItemList');
          }}
        />
      </SafeAreaView>
      <Footer
        onPress={() => {
          navigation.navigate('AddCircle');
        }}
      />
    </Fragment>
  );
};
