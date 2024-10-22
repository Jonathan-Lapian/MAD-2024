import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Header, TextInput} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Button text="<" color="white" fontSize={40} />
        <Header left={26} text="Sign Up" />
      </View>
      <View style={styles.contentWrapper}>
        <View><View></View></View>
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flexDirection: 'row',
    flex: 0,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
  },
  contentWrapper: {
    marginTop: 24,
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 25,
  },
});
