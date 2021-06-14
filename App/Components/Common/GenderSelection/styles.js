import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../Themes';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  textContainer: {
    //width: '100%',
    justifyContent: 'flex-start',
    //marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    //marginTop: 10,
  },
  text: {
    ...Fonts.style.small,
    color: Colors.whiteThree,
  },
  buttonContainer: {
    flexDirection: 'row',
    height: 45,
    width: 135,
    borderRadius: 10,
    borderColor: Colors.whiteThree,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    ...Fonts.style.regularSemiBold,
    color: Colors.whiteThree,
    marginLeft: 10,
  },
});
