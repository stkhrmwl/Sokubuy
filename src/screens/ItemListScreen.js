import React, { Fragment } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

// components
import HeaderB from '../components/HeaderB';
import Footer from '../components/Footer';
import ItemListItem from '../components/ItemListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',
    alignItems: 'center',
  },
});

export default ItemListScreen = (props) => {
  const { navigation } = props;
  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: '#fff' }} />
      <SafeAreaView style={styles.container}>
        <HeaderB
          title="CPSLAB"
          subtitle="東A01b"
          navigation={navigation}
          onPressEdit={() => {
            navigation.navigate('EditCircle');
          }}
        />
        <ItemListItem
          onPress={() => {
            navigation.navigate('EditItem');
          }}
        />
      </SafeAreaView>
      <Footer
        onPress={() => {
          navigation.navigate('AddItem');
        }}
      />
    </Fragment>
  );
};
