import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
  Button,
  Alert,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import io from 'socket.io-client';
import styles from './styles';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MapViewDirections from 'react-native-maps-directions';


const HomeMap = props => {
  const [driverLatitude, setDriverLatitude] = useState('...');
  const [driverLongitude, setDriverLongitude] = useState('...');

  const [flag, setFlag] = useState(false);
   const [location,setLocation] = useState('...');
 console.log("location",location);
  console.log("driverLongitude",driverLongitude);

//googleMapApI
const GOOGLE_MAPS_APIKEY = 'AIzaSyDnNvDFPC-zgjggGXYNoQR3yyZ-92UZ4LM';

 navigator.geolocation = require('@react-native-community/geolocation');
 //get user location
 const findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = position;
       setLocation( location );
       setDriverLatitude(location?.coords?.latitude);
       setDriverLongitude(location?.coords?.longitude);
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  return (
    <>
      <Button
        title="Get Live Location"
        onPress={() => {
          setFlag(true), findCoordinates();
        }}></Button>
      <MapView
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
          latitude: 30.033333,
          longitude: 31.233334,
          latitudeDelta: 10.1,
          longitudeDelta: 10.1,
        }}>
        {flag && (
          <Marker
            coordinate={{
              latitude: location?.coords?.latitude ? location?.coords?.latitude : 0,
              longitude: location?.coords?.longitude ? location?.coords?.longitude : 0,
            }}
            title={'my location'}
            description={'here iam'}
            tracksViewChanges={true}
         > 
          <Icon name={"bus"} size={23} color={'#28367e'} />
          </Marker>
        )} 
        
          <Marker
            coordinate={{"latitude": 31.205753,
                    "longitude": 29.924526}}
            title={'alex'}
            description={'default'}
            tracksViewChanges={false}
          > 
          <Icon name={"bus"} size={23} color={'#28367e'} />
          </Marker>

       <MapViewDirections
        origin={{latitude: location?.coords?.latitude,
              longitude: location?.coords?.longitude,   
            }}
        destination={{"latitude": 31.205753,
                    "longitude": 29.924526}}
        apikey={GOOGLE_MAPS_APIKEY}
       strokeWidth={3}
    strokeColor="green"
      />   
      </MapView>
    </>
  );
};

export default HomeMap;
