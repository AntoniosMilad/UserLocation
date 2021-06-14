import React, { useEffect } from 'react';
import { View, StatusBar, } from 'react-native';
//import { connect } from 'react-redux';
import StartupActions from '../../Redux/StartupRedux';
import ReduxPersist from '../../Config/ReduxPersist';
import { useDispatch, useSelector } from 'react-redux';

// Styles
import styles from './styles';
import { api } from '../../Sagas/index';
import Loading from '../../Components/Common/Loading';
import LaunchScreen from '../SplashScreen';
import LoaderActions from '../../Redux/LoaderRedux';

const RootContainer = () => {
  // const accessToken = useSelector((state) => state.user.accessToken);
  const didFinishSplash = useSelector((state) => state?.loader?.didFinishSplash);

  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  });

//if accesstoken exist put it in api setAuthToken to use it 
  const getData = async () => {
    // if (accessToken) {
    //   await api.setAuthToken(accessToken)
    // }

    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      dispatch(StartupActions.startup())
    }

    dispatch(LoaderActions.didAppLoad());
  };

  return (
    <View style={styles.applicationView}>
      <StatusBar barStyle="light-content" />
      {didFinishSplash ?
        <Loading loading={true} />
        :
        <LaunchScreen />
      }
    </View>
  );
}

export default RootContainer;
