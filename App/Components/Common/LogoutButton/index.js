import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';

import PropTypes from 'prop-types';
import styles from './styles';

const RedirectButton = ({label, onClick}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

// Specifies the default values for props:
RedirectButton.defaultProps = {
  onClick: () => console.log('onClick triggered from RedirectButton component'),
};

RedirectButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default RedirectButton;
