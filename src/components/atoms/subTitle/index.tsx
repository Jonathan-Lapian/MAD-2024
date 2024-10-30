import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Sub = ({font = 'Poppins-Regular', text, size = 16, left = 0}) => {
  return <Text style={styles.sub({font, size, left})}>{text}</Text>;
};

export default Sub;

const styles = StyleSheet.create({
  sub: ({font, size, left}) => ({
    fontFamily: font,
    fontSize: size,
    paddingLeft: left,
  }),
});
