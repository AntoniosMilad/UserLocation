import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';

import PropTypes from 'prop-types';
import styles from './styles';

const MainActionButton = ({label, onClick}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <Icon name="facebook-square" size={25} color="#fff" />
      <Text style={styles.text}>{label}</Text>
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
