import {call, put} from 'redux-saga/effects';
import {path} from 'ramda';
import SignInActions from '../Redux/SignInRedux';
import UserActions from '../Redux/UserRedux';
//import RNExitApp from 'react-native-exit-app';

import * as NavigationService from '../Services/NavigationService';
import {storage} from '../../Storage';

export function* userLogin(api, action) {
  const {email, secret} = action;

  // alert(email, secret);

  // make the call to the api
  const response = yield call(api.signIn, email, secret);
  // alert(response.data);
  if (response.ok) {
    const accessToken = path(['data', 'accessToken'], response);
    const refreshToken = path(['data', 'refreshToken'], response);
    const user = path(['data', 'user'], response);

    // put accesssToken retrieved from api in storage
    //yield call(storage.setData, 'accessToken', accessToken);
    // do data conversion here if needed
    yield call(api.setAuthToken, accessToken);

    yield put(SignInActions.loginSuccess());
    yield put(UserActions.inRegistration(false));
    yield put(
      UserActions.userData(accessToken, verifedEmail, user, refreshToken),
    );
  } else {
    console.log(response.status);
    yield put(SignInActions.loginFailure(response.status));
  }
}

export function* userLogout(api) {
  yield call(api.removeAuthToken);
  //remove accessToken from userRedux
  // yield put(UserActions.userSignout());
  //remove accessToken from storage
  //yield call(storage.removeData, 'accessToken');
  NavigationService.navigate('HomeScreen');
  // RNExitApp.exitApp();
}
