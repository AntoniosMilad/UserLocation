import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  addImageContianer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  userImageContainer: {
    backgroundColor: Colors.lightGray,
    height: 125,
    width: 125,
    borderRadius: 62.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userImage: {height: 80},
  cameraImageConainer: {
    position: 'absolute',
    bottom: 0,
    right: 5,
    backgroundColor: Colors.darkGray,
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraImage: {},
  InputFieldsContainer: {width: '100%'},
  genderSelectionContainer: {
    marginTop: 43,
    width: '100%',
  },
  ageSelectionContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  userPhoto: {
    alignSelf: 'center',
    height: 125,
    width: 125,
    borderRadius: 62.5,
  },
  checkboxTitleContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
  },
  checkbox: {
    paddingRight: 0,
    marginLeft: 0,
    paddingLeft: 0,
  },
  agreeText: {
    ...Fonts.style.regularSemiBold,
    color: Colors.white,
  },
  termsText: {
    ...Fonts.style.regularSemiBolds,
    textDecorationLine: 'underline',
    color: Colors.blueBlue,
  },
  //Code
  textContainer: {
    justifyContent: 'flex-start',
    marginTop: 25,
    ...Fonts.style.small,
    color: Colors.sherpaBlue,
  },
  codeFiledRoot: {marginTop: 5},
  cellContainer: {
    width: 40,
    height: 40,
    borderBottomWidth: 0.5,
    borderColor: Colors.sherpaBlue,
  },
  cellText: {
    fontSize: 24,
    textAlign: 'center',
    color: Colors.sherpaBlue,
    borderColor: Colors.sherpaBlue,
  },
});
