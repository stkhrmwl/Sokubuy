import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// components
import StatusOnList from './StatusOnList';

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 92,
    marginTop: 8,
    backgroundColor: '#fff',
    borderColor: '#7E7E7E',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 92,
    height: '100%',
    backgroundColor: 'red',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  leftInRightContainer: {
    width: '80%',
    height: '100%',
    backgroundColor: 'yellow',
  },
  rightInRightContainer: {
    width: '20%',
    height: '100%',
    backgroundColor: 'blue',
  },
});

const ItemListItem = (props) => {
  const { onPress } = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.leftContainer}></View>
      <View style={styles.rightContainer}>
        <View style={styles.leftInRightContainer}></View>
        <View style={styles.rightInRightContainer}></View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemListItem;
