import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import PropTypes from 'prop-types';
import styles from './styles';

const Loading = ({ loading }) => {
  return (
    loading && <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

//Specifies the default values for props:
Loading.defaultProps = {
  loading: false,
};

//check the type for loading
Loading.propTypes = {
  loading: PropTypes.bool,
};

export default Loading;
