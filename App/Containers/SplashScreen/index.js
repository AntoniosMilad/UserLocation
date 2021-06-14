import React from 'react';
import {View, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {useDispatch, useSelector} from 'react-redux';
import {Images} from '../../Themes';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import LoaderActions from '../../Redux/LoaderRedux';
import {i18n} from '../../Translation';

const LaunchScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const onLoadGIF = () => {
    setTimeout(() => {
      console.log('DidLoadGIF');
      dispatch(LoaderActions.didFinishSplash());
    }, 4500);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        {/* <Image
          style={styles.image}
          source={Images.locationGif}
          resizeMode="contain"
          onLoad={() => onLoadGIF()}
        /> */}
        <FastImage
          style={styles.image}
          source={Images.locationGif}
          resizeMode={FastImage.resizeMode.contain}
          onLoad={() => onLoadGIF()}
        />
      </View>
    </SafeAreaView>
  );
};
export default LaunchScreen;
