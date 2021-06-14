import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const HeaderRight = () => {
  return (
    <TouchableOpacity style={styles.container}
      onPress={() => alert('This is a button!')}>
      <Text style={styles.text}>Skip</Text>

    </TouchableOpacity>
  );
};

export default HeaderRight;
