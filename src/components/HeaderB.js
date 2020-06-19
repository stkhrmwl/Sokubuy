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
    width: '60%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 4,
  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 14,
    color: '#969696',
  },
});

const HeaderB = (props) => {
  const { title, subtitle, navigation, onPressLink, onPressEdit } = props;

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <FontAwesome name={'chevron-left'} size={28} color="#7E7E7E" />
        </TouchableOpacity>
      </View>
      <View style={styles.leftContainer} />
      <View style={styles.centerContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={styles.leftContainer}>
        {/*<TouchableOpacity onPress={onPressLink}>
          <FontAwesome name={'link'} size={28} color="#7E7E7E" />
        </TouchableOpacity>*/}
      </View>
      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={onPressEdit}>
          <FontAwesome name={'pencil'} size={28} color="#7E7E7E" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderB;
