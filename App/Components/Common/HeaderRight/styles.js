import { StyleSheet } from 'react-native';
import { Fonts } from '../../../Themes';

export default StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  text: {
    ...Fonts.style.normal,
    color: '#fff',
  },
});
