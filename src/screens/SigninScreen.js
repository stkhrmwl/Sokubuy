import React from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';

// components

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',
    alignItems: 'center',
  },
});

export default HomeScreen = (props) => {
  const handleSubmit = () => {
    console.log('signin');
  };

  const { navigation } = props;
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleSubmit}>
        <Text>button</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
