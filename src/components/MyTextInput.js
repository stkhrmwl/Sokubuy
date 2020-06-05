import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

// components

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 40,
    marginTop: 40,
  },
  title: {
    color: '#7E7E7E',
    fontSize: 16,
    paddingBottom: 8,
  },
  input: {
    paddingLeft: 6,
    backgroundColor: '#fff',
    height: 32,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 18,
  },
});

const MyTextInput = (props) => {
  const { title } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        maxLength={4}
      />
    </View>
  );
};

export default MyTextInput;
