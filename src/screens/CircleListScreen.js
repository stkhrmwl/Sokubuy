import React, { Fragment } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

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
  const { navigation, route } = props;
  const { user, event } = route.params;

  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: '#fff' }} />
      <SafeAreaView style={styles.container}>
        <HeaderB
          title={event.title}
          subtitle={event.date}
          navigation={navigation}
          onPressEdit={() => {
            navigation.navigate('EditEvent', { user: user, event: event });
          }}
        />
        <CircleListItem
          onPress={() => {
            navigation.navigate('ItemList');
          }}
        />
        <WebView source={event.url} />
      </SafeAreaView>
      <Footer
        onPress={() => {
          navigation.navigate('AddCircle');
        }}
      />
    </Fragment>
  );
};
