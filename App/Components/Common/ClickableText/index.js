import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ClickableText = ({ text, onClick, textStyle }) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

// Specifies the default values for props:
ClickableText.defaultProps = {
  onClick: () => console.log('Clicked from ClickableText component'),
};

ClickableText.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  textStyle: PropTypes.object
};

export default ClickableText;
