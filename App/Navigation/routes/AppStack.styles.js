import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../Themes';

export default StyleSheet.create({
  headerContainer: {
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: Colors.white,
    fontSize: 23,
    fontFamily: Fonts.type.boldMontserrat,
    fontWeight: 'bold',
  },
});
