import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 30,
  },
  number: {
    fontSize: 30,
  },
  text: {
    fontSize: 20,
  },
});

const OrderOnListItem = (props) => {
  const { price, number } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.text}>円</Text>
      <Text style={styles.number}> × {number}</Text>
      <Text style={styles.text}>個</Text>
    </View>
  );
};

OrderOnListItem.defaultProps = {
  price: 500,
  number: 1,
};

export default OrderOnListItem;
