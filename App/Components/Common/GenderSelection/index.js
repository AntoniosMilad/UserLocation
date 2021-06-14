import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';

import { Colors } from '../../../Themes';

import styles from './styles';
import { i18n } from '../../../Translation';

const SelectionButton = ({ title, type, selected, onClick }) => {
  const isSelected =
    (type === 'male' && selected === 'M') ||
    (type === 'female' && selected === 'F');
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        isSelected ? { backgroundColor: Colors.cloud } : null,
      ]}
      onPress={onClick}>
      <Icon name={type} size={30} color={Colors.whiteThree} />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const GenderSelection = ({ gender, setGender }) => {
  return (
    <View style={styles.container}>

      <View style={styles.textContainer}>
        <Text style={styles.text}>{i18n.t("SIGN_UP.IAM")}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={{ marginRight: 5 }}>
          <SelectionButton
            title={i18n.t("SIGN_UP.MALE")}
            type="male"
            selected={gender}
            onClick={() => setGender('M')}
          />
        </View>
        <View>
          <SelectionButton
            title={i18n.t("SIGN_UP.FEMALE")}
            type="female"
            selected={gender}
            onClick={() => setGender('F')}
          />
        </View>
      </View>

    </View>
  );
};

export default GenderSelection;
