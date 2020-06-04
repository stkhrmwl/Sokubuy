import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 72,
    marginTop: 8,
    backgroundColor: '#fff',
    borderColor: '#7E7E7E',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
  },
  leftContainer: {
    width: '70%',
    height: '100%',
    padding: 12,
    justifyContent: 'space-between',
  },
  rightContainer: {
    width: '30%',
    height: '100%',
    padding: 12,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  },
  date: {
    color: '#7E7E7E',
  },
  typicalPrice: {
    color: '#7E7E7E',
  },
});

const HeaderA = (props) => {
  const { onPress } = props;

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>c97d1</Text>
        <Text style={styles.date}>2019/12/28</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.typicalPrice}>¥4,000</Text>
      </View>
    </View>
  );
};

export default HeaderA;
