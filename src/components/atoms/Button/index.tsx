import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {ArrowBack, NullSquare} from '../../../assets/icon'; // Ensure janeDoe is defined correctly

const Button = ({
  color = '#02CF8E',
  text,
  textColor = '#020202',
  type,
  icon,
  onPress,
  Source,
}) => {
  if (type === 'icon-only') {
    if (icon === 'arrow-back') {
      return (
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.backButton}
          onPress={onPress}>
          <ArrowBack />
        </TouchableOpacity>
      );
    }

    return null;
  }

  if (type === 'normal') {
    return (
      <TouchableOpacity
        style={styles.button(color)}
        activeOpacity={0.5}
        onPress={onPress}>
        <Text style={styles.text(textColor)}>{text}</Text>
      </TouchableOpacity>
    );
  }
  if (type === 'profile') {
    return (
      <TouchableOpacity
        style={styles.profileButton}
        activeOpacity={0.5}
        onPress={onPress}>
        <Image style={styles.profile} source={Source} />
      </TouchableOpacity>
    );
  }
  // Fallback if no condition is met
  return null;
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
  text: textColor => ({
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: textColor,
  }),
  backButton: {
    width: 50,
    height: 50,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  profileButton: {
    width: 50,
    height: 50,
    position: 'absolute',
    left: 320,
    top: 32,
    borderRadius: 10,
    zIndex: 2,
  },
});
