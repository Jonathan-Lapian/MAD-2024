import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {Header, TextInput} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';
import {NullPhoto} from '../../assets/icon';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        text="Sign Up"
        backButton={true}
        onPress={() => navigation.goBack()}
        top={38}
        bottom={37}
      />
      <View style={styles.contentWrapper}>
        <View style={styles.profileContainer}>
          <View style={styles.profileBorder}>
            <TouchableOpacity>
              <Image source={NullPhoto} style={styles.photo} />
            </TouchableOpacity>
          </View>
        </View>
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={15} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={15} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button
          text="Continue"
          type="normal"
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 24,
  },
  profileBorder: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#8D92A3',
    height: 110,
    width: 110,
    borderRadius: 110 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentWrapper: {
    marginTop: 24,
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
  photo: {
    height: 90,
    width: 90,
  },
});
