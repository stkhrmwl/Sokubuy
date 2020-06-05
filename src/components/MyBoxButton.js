import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

// components

const styles = StyleSheet.create({
  container: {
    width: '24%',
    height: 40,
    borderRadius: 6,
    borderWidth: 2,
    marginHorizontal: 8,
    borderColor: '#C3C3C3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
  },
});

const MyBoxButton = (props) => {
  const { title, onPress } = props;

  let color = '#fff',
    bgcolor = '#9BC42B';

  if (title === 'キャンセル') {
    (color = '#C3C3C3'), (bgcolor = '#fff');
  } else if (title === '削除') {
    bgcolor = '#C42B2B';
  }

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: bgcolor }]}
      onPress={onPress}
    >
      <Text style={[styles.title, { color: color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyBoxButton;
