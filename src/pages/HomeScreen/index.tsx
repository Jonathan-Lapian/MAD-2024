import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Header} from '../../components/molecules';
import {NullSquare} from '../../assets/icon';
import {getDatabase, ref, onValue} from 'firebase/database';
import Rupiah from '../../utils/Rupiah';
import {Sub, Gap, Button} from '../../components/atoms';

const Home = ({navigation, route}) => {
  const {uid} = route.params;
  const [fullName, setFullName] = useState('');
  const [cashInBank, setCashInBank] = useState(0);
  const [cashInHand, setCashInHand] = useState(0);
  const [total, setTotal] = useState(0);
  const [photo, setPhoto] = useState(NullSquare);

  useEffect(() => {
    const db = getDatabase();
    const userRef = ref(db, 'users/' + uid);
    onValue(userRef, snapshot => {
      const data = snapshot.val();
      setPhoto({uri: data.photo});
      setFullName(data.fullName);
      setCashInBank(data.balance.cashInBank);
      setCashInHand(data.balance.cashInHand);
      setTotal(data.balance.total);
    });
  }, []);
  return (
    <View style={styles.container}>
      <Header
        text={`Hi, ${fullName}`}
        size={24}
        headerKid={true}
        kidText="Have you track your money today?"
        row="column"
        top={30}
        bottom={24}
        profilePic={true}
        source={photo}
      />

      <View style={styles.contentWrapper}>
        <View style={styles.balanceWrapper}>
          <Sub text="Your Balance" font="Poppins-Medium" />
          <View style={styles.center}>
            <Sub text={Rupiah(total)} size={24} font="Poppins-Bold" />
            <Gap height={18} />
            <View style={styles.line} />
          </View>
          <Gap height={20} />
          <View style={styles.row}>
            <Sub text="Cash on Hand" />
            <Sub text={Rupiah(cashInHand)} font="Poppins-Medium" left={20} />
          </View>
          <Gap height={11} />
          <View style={styles.row}>
            <Sub text="Cash on Bank" />
            <Sub text={Rupiah(cashInBank)} font="Poppins-Medium" left={20} />
          </View>
          <Gap height={40} />
        </View>
      </View>
      <View style={styles.transWrap}>
        <Gap height={10.6} />
        <Sub text="Add Transaction" font="Poppins-Medium" />

        <Gap height={18.04} />
        <Button
          type="normal"
          text="Cash On Hand"
          onPress={() =>
            navigation.navigate('AddTransaction', {
              title: 'Cash On Hand',
              uid: uid,
            })
          }
        />
        <Gap height={10} />
        <Button
          type="normal"
          text="Cash On Bank"
          onPress={() =>
            navigation.navigate('AddTransaction', {
              title: 'Cash On Bank',
              uid: uid,
            })
          }
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    marginTop: 24,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
  },
  balanceWrapper: {
    paddingTop: 13,
  },
  transWrap: {
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    flex: 1,
  },
  center: {
    alignItems: 'center',
  },
  line: {
    borderWidth: 1,
    width: 355,
    borderColor: 'black',
  },
  row: {
    flexDirection: 'row',
  },
});
