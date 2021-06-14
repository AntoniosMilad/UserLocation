import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../Themes';

export default StyleSheet.create({
  borderRadius: {
    borderRadius: 14,
  },
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 14,
  },
  title: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.mediumMontserrat,
    color: Colors.white,
    paddingHorizontal: 8,
  },
});
