import React, {useState} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {TextField} from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';

const InputField = ({
  label,
  labelFontSize,
  fontSize,
  baseColor,
  textColor,
  tintColor,
  autoCapitalize,
  placeholderTextColor,
  onChange,
  secure,
  onEndEditing,
  keyboardType,
}) => {
  const [isSecure, setIsSecure] = useState(secure);
  return (
    <View>
      <TextField
        label={label}
        labelFontSize={labelFontSize}
        fontSize={fontSize}
        baseColor={baseColor}
        textColor={textColor}
        tintColor={tintColor}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        placeholderTextColor={placeholderTextColor}
        onChangeText={(text) => onChange(text)}
        onEndEditing={onEndEditing}
        secureTextEntry={isSecure}
      />
      {secure ? (
        <Icon
          name={isSecure ? 'eye-with-line' : 'eye'}
          style={styles.icon}
          color={'#2B347D'}
          size={20}
          onPress={() => setIsSecure(!isSecure)}
        />
      ) : null}
    </View>
  );
};

// Specifies the default values for props:
InputField.defaultProps = {
  labelFontSize: 12,
  fontSize: 15,
  baseColor: '#2B347D',
  textColor: '#2B347D',
  tintColor: '#2B347D',
  autoCapitalize: 'none',
  placeholderTextColor: '#2B347D',
  onChange: (text) => console.log(`Text from InputField component: ${text}`),
  secure: false,
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  labelFontSize: PropTypes.number,
  fontSize: PropTypes.number,
  baseColor: PropTypes.string,
  textColor: PropTypes.string,
  tintColor: PropTypes.string,
  keyboardType: PropTypes.string,
  autoCapitalize: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  onChange: PropTypes.func,
  secure: PropTypes.bool,
};

export default InputField;
