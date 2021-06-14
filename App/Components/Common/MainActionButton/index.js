import React from 'react';
import {TouchableOpacity, Text, I18nManager} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import {KeyboardAvoidingView} from 'react-native';

import PropTypes from 'prop-types';
import styles from './styles';

const MainActionButton = ({label, onClick}) => {
  const iconName = I18nManager.isRTL ? 'arrowleft' : 'arrowright';
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <Text style={styles.text}>{label}</Text>
      <Icon name={iconName} size={25} color="#fff" />
    </TouchableOpacity>
  );
};

// Specifies the default values for props:
MainActionButton.defaultProps = {
  onClick: () =>
    console.log('onClick triggered from MainActionButton component'),
};

MainActionButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default MainActionButton;
