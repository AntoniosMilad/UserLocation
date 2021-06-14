import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {View, SafeAreaView, Image, Dimensions, Alert, Text, FlatList} from 'react-native';
import styles from './styles';
import RouteMap from '../../Components/RouteMap';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LocationIcon from 'react-native-vector-icons/MaterialIcons';

  const SearchResults = ({navigation,props}) => {
  const route = useRoute();
  console.log(route.params);
  const {originPlace, destinationPlace} = route.params;

  return (
    <View style={styles.mainContainer}>
    <View style={styles.HeaderContainer}>
   <Text style={styles.title}>Search Results</Text>

  <View style={styles.info}>
      <Icon name={"home"} size={23} color={'#28367e'} />
    <Text style={styles.infoText}>for user loaction</Text>
  </View>
    <View style={styles.info}>
  <View style={styles.info}>
      <LocationIcon name={"location-on"} size={23} color={'red'} />
    <Text style={styles.infoText}>for required destination</Text>
  </View>
  </View>

   </View>
         <RouteMap
          origin={originPlace}
          destination={destinationPlace}
         />
    </View>
  );
};

export default SearchResults;
