import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  paid: {
    fontSize: 20,
    color: '#9BC42B',
  },
  unpaid: {
    fontSize: 14,
    color: '#969696',
  },
});

const PriceStatusOnFooter = (props) => {
  const { paid, unpaid, showUnpaid } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.paid}>¥{paid}</Text>
      {showUnpaid && <Text style={styles.unpaid}> / ¥{unpaid}</Text>}
    </View>
  );
};

PriceStatusOnFooter.defaultProps = {
  paid: 0,
  unpaid: 0,
  showUnpaid: true,
};

export default PriceStatusOnFooter;
