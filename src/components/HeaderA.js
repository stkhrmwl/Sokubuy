import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 52,
    backgroundColor: '#fff',
    borderColor: '#7E7E7E',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
  },
  leftContainer: {
    width: '10%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerContainer: {
    width: '80%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
  },
});

const HeaderA = (props) => {
  const { iconA, iconB, title, onPressA, onPressB } = props;

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={onPressA}>
          <FontAwesome name={iconA} size={28} color="#7E7E7E" />
        </TouchableOpacity>
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={onPressB}>
          <FontAwesome name={iconB} size={28} color="#7E7E7E" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderA;
