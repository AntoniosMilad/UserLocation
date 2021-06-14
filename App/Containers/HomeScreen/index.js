import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import HomeMap from '../../Components/HomeMap';
import CovidMessage from '../../Components/CovidMessage';
import HomeSearch from '../../Components/HomeSearch';
import RouteMap from '../../Components/RouteMap';

const HomeScreen = props => {
  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 210}}>
        <HomeMap />
      </View>
      {/*Covid Message*/}
      <CovidMessage />
      {/*Bottom Comp*/}
      <HomeSearch/>
    </View>
  );
};
export default HomeScreen;
