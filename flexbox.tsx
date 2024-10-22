import {StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Input from './components/Input/input';
import Button from './components/Button/button';
import Title from './components/Title/index';

const SignIn = () => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState();
  const handleClick = () => {
    const data = {
      name: name,
      username: userName,
      email: email,
      address: address,
      phoneNum: number,
    };
    console.log(data);
  };
  const handleName = e => {
    setName(e);
  };
  const handleUserName = e => {
    setUserName(e);
  };
  const handleEmail = e => {
    setEmail(e);
  };
  const handleAddress = e => {
    setAddress(e);
  };
  const handleNum = e => {
    setNumber(e);
  };
  return (
    <ScrollView style={styles.container}>
      <Title title="Registration" />
      <Input
        label="Name"
        placeholder="Masukan nama lengkap anda"
        onChangeText={handleName}
      />
      <Input
        label="Username"
        placeholder="Masukan username anda"
        onChangeText={handleUserName}
      />
      <Input
        label="Email"
        placeholder="Masukan email anda"
        onChangeText={handleEmail}
      />
      <Input
        label="Address"
        placeholder="Masukan alamat anda"
        onChangeText={handleAddress}
      />
      <Input
        label="Phone Number"
        placeholder="Masukan Nomor telepon anda"
        onChangeText={handleNum}
        keyboardType="numeric"
      />
      <Button label="Register" onPress={handleClick} />
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    margin: 20,
  },
});
