import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  paid: {
    fontSize: 14,
    color: '#9BC42B',
  },
  unpaid: {
    fontSize: 14,
    color: '#969696',
  },
});

const StatusOnList = (props) => {
  const { paid, unpaid } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.paid}>¥{paid}</Text>
      <Text style={styles.unpaid}> / ¥{unpaid}</Text>
    </View>
  );
};

StatusOnList.defaultProps = {
  paid: 0,
  unpaid: 0,
};

export default StatusOnList;
