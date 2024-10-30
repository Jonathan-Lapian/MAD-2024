import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Header} from '../../components/molecules';
import {Sub, Gap, Button} from '../../components/atoms';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        text="Money Tracker"
        size={24}
        headerKid={true}
        kidText="Track your money"
        row="column"
        top={30}
        bottom={24}
        profilePic={true}
      />

      <View style={styles.contentWrapper}>
        <View style={styles.balanceWrapper}>
          <Sub text="Your Balance" font="Poppins-Medium" />
          <View style={styles.center}>
            <Sub text="Rp. 10.000.000" size={24} font="Poppins-Bold" />
            <Gap height={18} />
            <View style={styles.line} />
          </View>
          <Gap height={20} />
          <View style={styles.row}>
            <Sub text="Cash on Hand" />
            <Sub text="Rp. 4.000.000" font="Poppins-Medium" left={20} />
          </View>
          <Gap height={11} />
          <View style={styles.row}>
            <Sub text="Cash on Bank" />
            <Sub text="Rp. 6.000.000" font="Poppins-Medium" left={20} />
          </View>
          <Gap height={40} />
        </View>
      </View>
      <View style={styles.transWrap}>
        <Gap height={10.6} />
        <Sub text="Add Transaction" font="Poppins-Medium" />
        <Gap height={8.81} />
        <Button
          text="Cash On Hand"
          type="normal"
          onPress={() => navigation.navigate('CashHand')}
        />
        <Gap height={18.04} />
        <Button
          text="Cash On Bank"
          type="normal"
          onPress={() => navigation.navigate('CashBank')}
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
