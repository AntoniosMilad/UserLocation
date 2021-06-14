import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import styles from './AppLoading.styles';

const AppLoading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};

export default AppLoading;
