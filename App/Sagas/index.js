import {takeLatest, all} from 'redux-saga/effects';
import API from '../Services/Api';
import FixtureAPI from '../Services/FixtureApi';
import DebugConfig from '../Config/DebugConfig';

/* ------------- Types ------------- */
//from redux
import {StartupTypes} from '../Redux/StartupRedux';
//auth
import {SignInTypes} from '../Redux/SignInRedux';
import {SignUpTypes} from '../Redux/SignUpRedux';
import {UserTypes} from '../Redux/UserRedux';

/* ------------- Sagas ------------- */
//auth
import {startup} from './StartupSagas';
import {userLogin, userLogout} from './SignInSagas';
import {mobileRegister, mobileVerify, userRegister} from './SignUpSagas';
//location
// import {getCurrentLocationAddressAndCoords} from '../Services/Location';

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
export const api = DebugConfig.useFixtures ? FixtureAPI : API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    // some sagas receive extra parameters in addition to an action
    takeLatest(SignInTypes.LOGIN_REQUEST, userLogin, api),
    takeLatest(UserTypes.USER_SIGNOUT, userLogout, api),

    //singUp
    takeLatest(SignUpTypes.MOBILE_REGISTER_REQUEST, mobileRegister, api),
    takeLatest(SignUpTypes.MOBILE_VERIFY_REQUEST, mobileVerify, api),
    takeLatest(SignUpTypes.REGISTER_USER_REQUEST, userRegister, api),
  ]);
}
