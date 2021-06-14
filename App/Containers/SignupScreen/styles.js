import {StyleSheet, I18nManager} from 'react-native';
import {ApplicationStyles, Colors, Metrics, Fonts} from '../../Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: Metrics.section,
    paddingTop: 0,
  },
  keyboardAvoidContainer: {
    flex: 1,
  },
  titleText: {
    color: Colors.Blue,
    ...Fonts.style.h2,
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
  },
});
