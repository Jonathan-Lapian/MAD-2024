import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({color = '#02CF8E', text, textColor = '#020202', textSize}) => {
  return (
    <TouchableOpacity style={styles.button(color)} activeOpacity={0.5}>
      <Text style={styles.text({textColor, textSize})}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    backgroundColor: color,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  }),
  text: ({textColor, textSize}) => ({
    fontFamily: 'Poppins-Medium',
    fontSize: textSize,
    color: textColor,
  }),
});
