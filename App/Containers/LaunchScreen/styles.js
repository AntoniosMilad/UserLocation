import {StyleSheet} from 'react-native';
import {ApplicationStyles, Colors} from '../../Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.Blue,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredLogo: {
    height: 100,
    width: 50,
  },
});
