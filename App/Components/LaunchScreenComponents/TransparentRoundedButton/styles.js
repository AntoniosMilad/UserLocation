import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../Themes';

export default StyleSheet.create({
  container: {
    borderColor: Colors.whiteThree,
    borderWidth: 2,
    borderRadius: 5,
    width: 160,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...Fonts.style.regularSemiBold,
    color: Colors.whiteThree,
  },
});
