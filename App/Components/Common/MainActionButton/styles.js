import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../Themes';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.Blue,
    width: '100%',
    height: 53,
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    ...Fonts.style.inputBold,
    color: Colors.white,
  },
});
