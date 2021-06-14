import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

import {Colors} from '../../../Themes';

import styles from './IconButton.styles';

const IconButton = ({
  iconName,
  onPress,
  title,
  buttonColor,
  iconSize = 16.19,
}) => {
  return (
    <LinearGradient style={styles.borderRadius} colors={buttonColor}>
      <TouchableOpacity onPress={onPress} style={[styles.container]}>
        <Icon size={iconSize} name={iconName} color={Colors.white} />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  buttonColor: PropTypes.array.isRequired,
};

export default IconButton;
