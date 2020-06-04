import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// component
import PlusButton from './PlusButton';
import ItemStatusOnFooter from './ItemStatusOnFooter';
import PriceStatusOnFooter from './PriceStatusOnFooter';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 72,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  leftContainer: {
    width: '40%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 8,
    paddingBottom: 20,
  },
  centerContainer: {
    width: '20%',
    height: '100%',
  },
  rightContainer: {
    width: '40%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 8,
    paddingBottom: 20,
  },
});

const Footer = (props) => {
  const { showPlusButton, showUnpaid } = props;

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text>購入点数</Text>
        <ItemStatusOnFooter showUnpaid={showUnpaid} />
      </View>
      <View style={styles.centerContainer}>
        {showPlusButton && <PlusButton onPress={() => {}} />}
      </View>
      <View style={styles.rightContainer}>
        <Text>支払金額</Text>
        <PriceStatusOnFooter showUnpaid={showUnpaid} />
      </View>
    </View>
  );
};

Footer.defaultProps = {
  showPlusButton: true,
  showUnpaid: true,
};

export default Footer;
