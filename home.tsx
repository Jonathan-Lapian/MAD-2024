import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import Title from './components/Title';
import axios from 'axios';

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .catch(error => console.log(error));
  }, []);
  return (
    <ScrollView style={styles.container}>
      <Title title="Users List" />
      {users.map(({name, username, email, address, phone}) => {
        return (
          <>
            <Text style={styles.container2}>
              {'Name : '}
              <Text style={styles.text}>{`${name}\n`}</Text>
              {'Username : '}
              <Text style={styles.text}>{`${username}\n`}</Text>
              {'Email : '}
              <Text style={styles.text}>{`${email}\n`}</Text>
              {'Address : '}
              <Text
                style={
                  styles.text
                }>{`${address.street}, ${address.suite},\n${address.city}, ${address.zipcode}\n`}</Text>
              {'Phone : '}
              <Text style={styles.text}>{`${phone}`}</Text>
            </Text>
          </>
        );
      })}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
  },
  container2: {
    marginHorizontal: 10,
    marginVertical: 4,
    paddingHorizontal: 30,
    paddingVertical: 12,
    fontWeight: 'bold',
    fontSize: 15,
    borderColor: 'black',
    borderWidth: 0.6,
    borderRadius: 10,
  },
  text: {
    fontWeight: '500',
  },
});
