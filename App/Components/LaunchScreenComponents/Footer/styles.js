import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../Themes';

export default StyleSheet.create({
  mainText: {
    ...Fonts.style.normal,
    color: Colors.whiteThree,
    lineHeight: 23,
  },
  buttonsConainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
