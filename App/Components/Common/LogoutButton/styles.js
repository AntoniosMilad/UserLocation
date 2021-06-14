import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../Themes';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.whiteThree,
    width: '100%',
    height: 53,
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 24,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 1,
    shadowRadius: 10,
    shadowOffset: { width: 1, height: 13 },
  },
  text: {
    ...Fonts.style.inputMeduim,
    color: Colors.charcoalGrey,
  },
});
