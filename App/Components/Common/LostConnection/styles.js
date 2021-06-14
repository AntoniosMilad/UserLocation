import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Metrics, Fonts } from '../../../Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: Metrics.section,
  },
  imgContainer: {
    top: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredImg: {
    height: 260,
    width: 260,
  },
  textContainer: {
    top: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  networkText: {
    color: Colors.charcoalGrey,
    ...Fonts.style.description,
  },
  buttonContainer: {
    top: 50,
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 90,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: Colors.pinkishOrange,
  },
  text: {
    color: Colors.charcoalGrey,
    ...Fonts.style.description,
  },
});
