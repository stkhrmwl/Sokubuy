import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// components
import OrderOnListItem from './OrderOnListItem';

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
  },
  image: {
    width: '100%',
    height: '100%',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  leftInRightContainer: {
    width: '80%',
    height: '100%',
    justifyContent: 'space-between',
    padding: 12,
  },
  title: {
    fontSize: 16,
  },
  rightInRightContainer: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const ItemListItem = (props) => {
  const { onPress } = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.leftContainer}>
        <Image
          style={styles.image}
          source={{ uri: 'https://picsum.photos/id/14/200/200' }}
        />
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.leftInRightContainer}>
          <Text style={styles.title}>イラストまとめ本</Text>
          <OrderOnListItem />
        </View>
        <TouchableOpacity style={styles.rightInRightContainer}>
          <FontAwesome name={'check-square'} size={28} color="#7E7E7E" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ItemListItem;
