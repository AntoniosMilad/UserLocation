import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LocationIcon from 'react-native-vector-icons/MaterialIcons';


const GOOGLE_MAPS_APIKEY = 'AIzaSyDnNvDFPC-zgjggGXYNoQR3yyZ-92UZ4LM';

const RouteMap = ({origin, destination,location}) => {
  const originLoc = {
    latitude: origin?.details?.geometry?.location?.lat,
    longitude: origin?.details?.geometry?.location?.lng,
  };
  const destinationLoc = {
    latitude: destination?.details?.geometry?.location?.lat,
    longitude: destination?.details?.geometry?.location?.lng,
  };
  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 30.033333,
        longitude: 31.233334,
        latitudeDelta: 8.1,
        longitudeDelta: 8.1,
      }}
      >
      <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="#28367e"
      />
      <Marker coordinate={originLoc} title={'Home'} tracksViewChanges={false}>
      <Icon name={"home"} size={30} color={'#28367e'} />
      </Marker> 
      <Marker coordinate={destinationLoc} title={'Destination'} tracksViewChanges={false}>
      <LocationIcon name={"location-on"} size={30} color={'red'} />
      </Marker> 
    </MapView>
  );
};

export default RouteMap;
