import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';
import {errorDisplay} from '../Lib/errorHandler';
import {showAlert} from '../Lib/Utils';
import {i18n} from '../Translation';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  loginRequest: ['email', 'secret'],
  loginSuccess: null,
  loginFailure: ['errorCode'],
});

export const SignInTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  loading: null,
  error: null,
});

/* ------------- Reducers ------------- */

export const request = (state) =>
  state.merge({loading: true, username: 'null'});

export const success = (state) =>
  state.merge({
    loading: false,
    error: null,
  });

//reducer function to handle errors in login
export const failure = (state, action) => {
  const {errorCode} = action;
  // console.log(errorCode);
  if (errorCode === 400) {
    // errorDisplay('Please Enter valid username and password');
    showAlert(i18n.t('SIGNIN_ERR.ERR400'));
  }
  if (errorCode === 403) {
    // errorDisplay('The username or password is incorrect');
    showAlert(i18n.t('SIGNIN_ERR.ERR401'));
  }
  return state.merge({loading: false, error: true});
};

/* ------------- Hookup Reducers To Types ------------- */
//hookup here connect or linking reducers to types
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
});
