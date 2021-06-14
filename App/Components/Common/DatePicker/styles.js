import { StyleSheet, I18nManager } from 'react-native';
import { Colors, Fonts } from '../../../Themes';

export default StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 10,
  },
  text: {
    ...Fonts.style.small,
    color: Colors.whiteThree,
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr'
  },
  datePickerContainer: {
    alignItems: 'center',
  },
});
