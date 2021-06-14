import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  userData: [
    'accessToken',
    'verifedEmail',
    'user',
    //  'refreshToken',
  ],
  editUser: ['user'],
  userSignout: null,
  inRegistration: ['inRegistrationProcess'],
});

export const UserTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  accessToken: null,
  verifedEmail: null,
  refreshToken: null,
  user: {},
  inRegistrationProcess: false,
});

/* ------------- Reducers ------------- */

export const request = (state) => state.merge({username: 'null'});

export const userData = (state, action) => {
  const {accessToken, verifedEmail,user, refreshToken} = action;
  return state.merge({
    error: null,
    accessToken,
    verifedEmail,
    // refreshToken,
    user,
  });
};

export const userSignout = (state) =>
  state.merge({
    accessToken: null,
    verifedEmail: null,
    // refreshToken: null,
    user: null,
  });

export const inRegistration = (state, action) => {
  const {inRegistrationProcess} = action;
  return state.merge({inRegistrationProcess});
};

export const editUserData = (state, action) => {
  const {user} = action;
  console.log(user);
  return state.merge({
    error: null,
    user,
  });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.USER_DATA]: userData,
  [Types.IN_REGISTRATION]: inRegistration,
  [Types.EDIT_USER]: editUserData,
  [Types.USER_SIGNOUT]: userSignout,
});
