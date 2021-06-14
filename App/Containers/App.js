import '../Config';
import DebugConfig from '../Config/DebugConfig';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import createStore from '../Redux';
import SplashScreen from 'react-native-splash-screen';
import {AppNavigator} from '../Navigation/AppNavigation';
import {configureLocalization} from '../Translation';
import {useState} from 'react';
import {didAppLoad} from '../Redux/LoaderRedux';
import moment from 'moment';
import 'moment/locale/ar';

// create our store
const store = createStore();

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
const App = () => {
  const [didLoad, setDidLoad] = useState(false);

  useEffect(() => {
    (async () => {
      await configureLocalization();
      moment.locale(global.AppLanguage); // set moment locale
      setDidLoad(true);
    })();
  }, []);

  useEffect(() => {
    SplashScreen.hide();
  }, [didAppLoad == true]);

  return didLoad ? (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  ) : null;
};

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron ? console.tron.overlay(App) : App;
