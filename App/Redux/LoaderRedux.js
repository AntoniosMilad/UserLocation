import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    didAppLoad: null,
    didFinishSplash: null,
});

export const LoaderTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    didAppLoad: false,
    didFinishSplash: false,
});

/* ------------- Reducers ------------- */

export const didAppLoad = (state) => state.merge({ didAppLoad: true });
export const didFinishSplash = (state) => state.merge({ didFinishSplash: true });


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.DID_APP_LOAD]: didAppLoad,
    [Types.DID_FINISH_SPLASH]: didFinishSplash
});
