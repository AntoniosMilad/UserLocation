import React from 'react';
import {View, Text} from 'react-native';
import TransparentRoundedButton from '../TransparentRoundedButton';
import styles from './styles';

const englishButtontext = 'عربي';
const arabicButtontext = 'english';

const Footer = () => {
  return (
    <View>
      <Text style={styles.mainText}>Choose Language</Text>
      <View style={styles.buttonsConainer}>
        <TransparentRoundedButton text={arabicButtontext} />
        <TransparentRoundedButton text={englishButtontext} />
      </View>
    </View>
  );
};

export default Footer;
