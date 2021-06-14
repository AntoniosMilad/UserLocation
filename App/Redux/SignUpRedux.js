import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';
import {ERRORS} from '../Lib/Constants';
import {errorDisplay} from '../Lib/errorHandler';
import {showAlert} from '../Lib/Utils';
import {i18n} from '../Translation';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  clearSignUp: null,
  mobileRegisterRequest: ['email'],
  mobileRegisterSuccess: ['email'],
  mobileRegisterFailure: ['errorCode'],
  mobileVerifyRequest: ['email', 'otp'],
  mobileVerifySuccess: [],
  mobileVerifyFailure: ['errorCode'],
  registerUserRequest: [
    'fullName',
    'phoneNumber',
    'email',
    'countryCode',
    'pass',
    'c_pass',
    // refCode,
    // 'dateOfBirth',
    // 'gender',
  ],
  registerUserSuccess: [],
  registerUserFailure: ['errorCode'],
  uploadRequest: ['photo'],
  uploadSuccess: [],
  uploadFailure: ['errorCode'],
  currentStep: null,
  // nextStep: null,
  // previousStep: null,
  setCurrentStep: ['currentStep'],
});

export const SignUpTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  loading: null,
  signUpError: null,
  accessToken: null,
  refreshToken: null,
  user: {},
  mobileRegistered: false,
  mobileVerified: false,
  userRegistered: false,
  email: '',
  currentStep: 0,
});

/* ------------- Reducers ------------- */
export const clearSignUp = (state) => {
  return state.merge(INITIAL_STATE);
};

//screen1 error handling
export const mobileRegisterRequest = (state) => {
  return state.merge({loading: true, signUpError: false});
};
export const mobileRegisterSuccess = (state, action) => {
  const {email} = action;
  return state.merge({
    loading: false,
    signUpError: false,
    mobileRegistered: true,
    email,
    currentStep: 1,
  });
};
export const mobileRegisterFailure = (state, action) => {
  const {errorCode} = action;
  //default state for error message
  let errorMessage = ERRORS.UNKNOWN;
  if (errorCode === 409) {
    //update error message with this state
    errorMessage = ERRORS.SIGN_UP.EMAIL_ALREADY_EXIST;
  }
  //singUpError message state now is error message
  return state.merge({loading: false, signUpError: errorMessage});
};

//screen2 error handling
export const mobileVerifyRequest = (state) => {
  return state.merge({loading: true, signUpError: false});
};
export const mobileVerifySuccess = (state) => {
  return state.merge({
    loading: false,
    signUpError: false,
    mobileVerified: true,
    currentStep: 2,
  });
};
export const mobileVerifyFailure = (state, action) => {
  const {errorCode} = action;
  let errorMessage = ERRORS.UNKNOWN;
  if (errorCode === 401) {
    errorMessage = ERRORS.SIGN_UP.WRONG_EMAIL_OR_OTP;
  }
  if (errorCode === 404) {
    errorMessage = ERRORS.SIGN_UP.WRONG_EMAIL_OR_OTP;
  }
  return state.merge({loading: false, signUpError: errorMessage});
};

//screen3 error handling
export const registerUserRequest = (state) => {
  return state.merge({loading: true, signUpError: false});
};
export const registerUserSuccess = (state) => {
  return state.merge({
    loading: false,
    signUpError: false,
    userRegistered: true,
  });
};
export const registerUserFailure = (state, action) => {
  const {errorCode} = action;
  let errorMessage = ERRORS.UNKNOWN;
  if (errorCode === 403) {
    errorMessage = ERRORS.SIGN_UP.USERNAME_ALREADY_EXIST;
  }
  return state.merge({loading: false, signUpError: errorMessage});
};

export const uploadRequest = (state) => {
  return state.merge({loading: false, signUpError: false});
};
export const uploadSuccess = (state) => {
  return state.merge({loading: false, signUpError: false});
};
export const uploadFailure = (state, action) => {
  const {errorCode} = action;
  let errorMessage = ERRORS.UNKNOWN;
  if (errorCode == 'uploadPhotoError') {
    errorMessage = ERRORS.SIGN_UP.USER_IMAGE;
  }
  return state.merge({loading: false, signUpError: errorMessage});
};

export const currentStep = (state) => state;
// export const nextStep = (state) =>
//   state.merge({ currentStep: state.currentStep + 1 });
// export const previousStep = (state) =>
//   state.merge({ currentStep: state.currentStep - 1 });

export const setCurrentStep = (state, action) => {
  const {currentStep} = action;
  console.log('currentSteppppppppppppppppppppp', currentStep);
  console.log('actionnnnnnnnnnnnnnnn', action);

  return state.merge({currentStep});
};
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CLEAR_SIGN_UP]: clearSignUp,
  [Types.MOBILE_REGISTER_REQUEST]: mobileRegisterRequest,
  [Types.MOBILE_REGISTER_SUCCESS]: mobileRegisterSuccess,
  [Types.MOBILE_REGISTER_FAILURE]: mobileRegisterFailure,
  [Types.MOBILE_VERIFY_REQUEST]: mobileVerifyRequest,
  [Types.MOBILE_VERIFY_SUCCESS]: mobileVerifySuccess,
  [Types.MOBILE_VERIFY_FAILURE]: mobileVerifyFailure,
  [Types.REGISTER_USER_REQUEST]: registerUserRequest,
  [Types.REGISTER_USER_SUCCESS]: registerUserSuccess,
  [Types.REGISTER_USER_FAILURE]: registerUserFailure,
  [Types.UPLOAD_REQUEST]: uploadRequest,
  [Types.UPLOAD_SUCCESS]: uploadSuccess,
  [Types.UPLOAD_FAILURE]: uploadFailure,
  [Types.CURRENT_STEP]: currentStep,
  // [Types.NEXT_STEP]: nextStep,
  // [Types.PREVIOUS_STEP]: previousStep,
  [Types.SET_CURRENT_STEP]: setCurrentStep,
});
