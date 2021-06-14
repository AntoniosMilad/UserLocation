import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../Themes';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.Chambray,
    width: '100%',
    height: 53,
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 30,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    ...Fonts.style.inputBold,
    color: Colors.white,
  },
});
