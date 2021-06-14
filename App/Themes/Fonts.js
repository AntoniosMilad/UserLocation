import {Platform} from 'react-native';
const type = {
  //Poppins
  base: Platform.OS === 'ios' ? 'Poppins-Regular' : 'Poppins-Regular',
  semiBold: Platform.OS === 'ios' ? 'Poppins-SemiBold' : 'Poppins-SemiBold',
  bold: Platform.OS === 'ios' ? 'Poppins-Medium' : 'Poppins-Bold',
  emphasis: Platform.OS === 'ios' ? 'Poppins' : 'HelveticaNeue-Italic',
  medium: Platform.OS === 'ios' ? 'Poppins-Medium' : 'Poppins-Medium',
  Light: Platform.OS === 'ios' ? 'Poppins-Light' : 'Poppins-Light',

  //Montserrat
  baseMontserrat:
    Platform.OS === 'ios' ? 'Montserrat-Regular' : 'Montserrat-Regular',
  semiBoldMontserrat:
    Platform.OS === 'ios' ? 'Montserrat-SemiBold' : 'Montserrat-SemiBold',
  boldMontserrat:
    Platform.OS === 'ios' ? 'Montserrat-Bold' : 'Montserrat-Bold',
  mediumMontserrat:
    Platform.OS === 'ios' ? 'Montserrat-Medium' : 'Montserrat-Medium',
  LightMontserrat:
    Platform.OS === 'ios' ? 'Montserrat-Light' : 'Montserrat-Light',
};

const size = {
  h0: 72,
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 24,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 16,
  medium: 14,
  small: 12,
  tiny: 8.5,
};

const style = {
  h0: {
    fontFamily: type.bold,
    fontSize: size.h0,
  },
  h1: {
    fontFamily: type.base,
    fontSize: size.h1,
  },
  h2: {
    fontFamily: type.base,
    fontSize: size.h2,
  },
  h3: {
    fontFamily: type.bold,
    fontSize: size.h3,
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4,
  },
  h5: {
    fontFamily: type.semiBold,
    fontSize: size.h5,
  },
  h6: {
    fontFamily: type.bold,
    fontSize: size.h6,
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular,
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium,
  },
  regularSemiBold: {
    fontFamily: type.semiBold,
    fontSize: size.regular,
  },
  //most common in setting screens
  regularMedium: {
    fontFamily: type.medium,
    fontSize: size.regular,
  },
  smallMedium: {
    fontFamily: type.medium,
    fontSize: size.small,
  },
  inputMeduim: {
    fontFamily: type.medium,
    fontSize: size.input,
  },
  mediumMeduim: {
    fontFamily: type.medium,
    fontSize: size.medium,
  },
  regularMeduim: {
    fontFamily: type.medium,
    fontSize: size.medium,
  },
  smallBold: {
    fontFamily: type.bold,
    fontSize: size.small,
  },
  inputBold: {
    fontFamily: type.bold,
    fontSize: size.input,
  },
  regularBold: {
    fontFamily: type.bold,
    fontSize: size.regular,
  },
  small: {
    fontFamily: type.base,
    fontSize: size.small,
  },
  //light poppines font
  inputLight: {
    fontFamily: type.Light,
    fontSize: size.h5,
  },

  //Montserrat styles
  mediumMeduimMontserrat: {
    fontFamily: type.mediumMontserrat,
    fontSize: size.medium,
  },
  smallMontserrat: {
    fontFamily: type.mediumMontserrat,
    fontSize: size.small,
  },
  h6_Montserrat: {
    fontFamily: type.mediumMontserrat,
    fontSize: size.h6,
  },
  h5_Montserrat: {
    fontFamily: type.semiBoldMontserrat,
    fontSize: size.h5,
  },
  semiBold_Montserrat: {
    fontFamily: type.semiBoldMontserrat,
    fontSize: size.h6,
  },
  //regular semiBold
  regular_Montserrat: {
    fontFamily: type.semiBoldMontserrat,
    fontSize: size.regular,
  },
  //meduimm semi Bold
  mediumSemiBold_Montserrat: {
    fontFamily: type.semiBoldMontserrat,
    fontSize: size.medium,
  },
  //small semiBold
  smallSemiBold_Montserrat: {
    fontFamily: type.semiBoldMontserrat,
    fontSize: size.small,
  },
   //meduim Bold
  meduimBold_Montserrat: {
    fontFamily: type.boldMontserrat,
    fontSize: size.medium,
  },
  tinyregular_Montserrat: {
    fontFamily: type.regular,
    fontSize: size.tiny,
  },
    tingbig_Montserrat: {
    fontFamily: type.regular,
    fontSize: 10,
  },
    //meduim Bold regular16
  boldReguar_Montserrat: {
    fontFamily: type.boldMontserrat,
    fontSize: size.regular,
  },
};

export default {
  type,
  size,
  style,
};
