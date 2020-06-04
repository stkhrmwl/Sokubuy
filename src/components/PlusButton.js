import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    width: 56,
    height: 56,
    backgroundColor: '#fff',
    alignSelf: 'center',
    bottom: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 0.3,
    elevation: 2,
  },
});

const PlusButton = (props) => {
  const { onPress } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={onPress}
    >
      <FontAwesome name="plus" size={40} color="#9BC42B" />
    </TouchableOpacity>
  );
};

export default PlusButton;
