import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '../../atoms';

const Header = ({
  text,
  backButton,
  onPress,
  size = 24,
  font = 'Poppins-Medium',
  headerKid,
  kidText,
  row = 'row',
  top = 0,
  bottom = 0,
  profilePic,
  source,
}) => {
  return (
    <View style={styles.container({row, top, bottom})}>
      {backButton && (
        <Button type="icon-only" icon="arrow-back" onPress={onPress} />
      )}
      {profilePic && (
        <Button
          style={styles.profile}
          type="profile"
          onPress={onPress}
          Source={source}
        />
      )}
      <Text style={styles.text({size, font})}>{text}</Text>
      {headerKid ? <Text style={styles.headerKidText}>{kidText}</Text> : null}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: ({row, top, bottom}) => ({
    backgroundColor: '#FFFFFF',
    paddingLeft: 24,
    paddingTop: top,
    paddingBottom: bottom,
    flexDirection: row,
  }),
  text: ({size, font}) => ({
    fontFamily: font,
    fontSize: size,
  }),
  headerKidText: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
  },
});
