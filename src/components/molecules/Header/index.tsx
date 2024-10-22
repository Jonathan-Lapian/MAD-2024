import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = ({text, left = 24}) => {
  return (
    <View style={styles.container(left)}>
      <Text style={styles.text}> {text}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: left => ({
    backgroundColor: '#FFFFFF',
    paddingLeft: left,
    paddingVertical: 38,
  }),
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
  },
});
