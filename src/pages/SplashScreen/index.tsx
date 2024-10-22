import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Logo} from '../../assets/icon';

const SplashScreen = () => {
  return (
    <View style={styles.bgColor}>
      <Logo />
      <Text style={styles.text}>Money Tracker</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  bgColor: {
    backgroundColor: '#02cf8e',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
  },
});
