import { Alert } from 'react-native';

export const errorDisplay = (message, code) => {
  return Alert.alert(
    'Ooops',
    message || 'Something went Wrong, Please try again',
    [{ text: 'OK' }],
    { cancelable: false },
  );
};

