import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// components
import StatusOnListItem from './StatusOnListItem';

const styles = StyleSheet.create({
  container: {
    width: '96%',
    height: 72,
    marginTop: 8,
    backgroundColor: '#fff',
    borderColor: '#7E7E7E',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  leftContainer: {
    width: '64%',
    height: '100%',
    padding: 12,
    justifyContent: 'space-between',
  },
  rightContainer: {
    width: '36%',
    height: '100%',
    paddingRight: 12,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  },
  date: {
    color: '#969696',
  },
});

const EventListItem = (props) => {
  const { title, date, url, onPress } = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.leftContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.rightContainer}>
        <StatusOnListItem paid={1000} unpaid={4000} />
      </View>
    </TouchableOpacity>
  );
};

export default EventListItem;
