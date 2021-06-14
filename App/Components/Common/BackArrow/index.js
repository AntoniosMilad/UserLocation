import React from 'react';
import {TouchableOpacity, I18nManager} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import PropTypes from 'prop-types';
import styles from './styles';

const BackArrow = ({onClick}) => {
  const iconName = I18nManager.isRTL ? 'right' : 'left';
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <Icon name={iconName} size={23} color={'#28367e'} />
    </TouchableOpacity>
  );
};
// Specifies the default values for props:
BackArrow.defaultProps = {
  onClick: () => console.log('onClick navigate to previous component'),
};
BackArrow.propTypes = {
  onClick: PropTypes.func,
};
export default BackArrow;
