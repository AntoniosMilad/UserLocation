import {call, put} from 'redux-saga/effects';
import {path} from 'ramda';
import SignUpActions from '../Redux/SignUpRedux';
import UserActions from '../Redux/UserRedux';
import {CONSTANTS} from '../Lib/Constants';

export function* mobileRegister(api, action) {
  const {email} = action;
  // make the call to the api
  const response = yield call(api.registerMobile, email);
  console.log(response);
  if (response.ok) {
    // do data conversion here if needed
    yield put(SignUpActions.mobileRegisterSuccess(email));
  } else {
    yield put(SignUpActions.mobileRegisterFailure(response.status));
  }
}

export function* mobileVerify(api, action) {
  const {email, otp} = action;
  // make the call to the api
  const response = yield call(api.verifyMobile, email, otp);
  console.log('response', response);

  if (response.ok) {
    // do data conversion here if needed
    const accessToken = path(['data', 'token'], response);
    const verifedEmail = path(['data', 'email'], response);
    // const refreshToken = path(['data', 'data', 'refreshToken'], response);
    // const user = path(['data', 'email'], response);
    // put accesssToken retrieved from api in storage
    //yield call(storage.setData, 'accessToken', accessToken);
    console.log(accessToken);
    console.log(verifedEmail);
    // console.log(user);

    yield call(api.setAuthToken, accessToken);
    yield put(UserActions.inRegistration(true));
    yield put(
      UserActions.userData(
        accessToken,
        verifedEmail,
        // user,
        //  refreshToken,
      ),
    );
    yield put(SignUpActions.mobileVerifySuccess());
  } else {
    yield put(SignUpActions.mobileVerifyFailure(response.status));
  }
}

export function* userRegister(api, action) {
  const {
    fullName,
    phoneNumber,
    email,
    countryCode,
    pass,
    c_pass,
    // refCode,
  } = action;
  console.log('action', action);

  // make the call to the api
  console.log('emaillllllllllllllllll', email);
  console.log('actionnnnnnnnnnnnnnnnn', action);

  const response = yield call(
    api.registerUser,
    fullName,
    phoneNumber,
    email,
    countryCode,
    pass,
    c_pass,
    // refCode,
  );
  console.log(response);
  if (response.ok) {
    // do data conversion here if needed
    console.log(response);
    const user = path(['data', 'user'], response);
    console.log('userResponse', user);

    yield put(SignUpActions.registerUserSuccess(user));
    yield put(UserActions.editUser(user));
    yield put(UserActions.inRegistration(false));
    // yield call(subscribetMessagingTopic, CONSTANTS.NOTIFICATION_TOPIC);
  } else {
    yield put(SignUpActions.registerUserFailure(response.status));
  }
}

export function* uploadPhoto(api, action) {
  const {photo} = action;
  console.log('photooooooooooo', photo);
  console.log('actionnnnnnnnnn', action);
  console.log('apiiiiiiiiiiiii', api);

  // make the call to the api
  const response = yield call(api.userProfileUploadPhoto, photo);
  console.log('__FILE__', response);
  if (response.ok) {
    yield put(SignUpActions.uploadSuccess());
  } else {
    yield put(SignUpActions.uploadFailure('uploadPhotoError'));
  }
}
