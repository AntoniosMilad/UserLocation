import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Colors } from '../../../Themes';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const CloseIcon = ({ onClick }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <Icon name="close" size={23} color={'#fff'} />
    </TouchableOpacity>
  );
};
// Specifies the default values for props:
CloseIcon.defaultProps = {
  onClick: () => console.log('onClick navigate to previous component'),
};
CloseIcon.propTypes = {
  onClick: PropTypes.func,
};
export default CloseIcon;
