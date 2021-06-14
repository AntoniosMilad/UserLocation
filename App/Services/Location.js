import {isArray} from 'lodash';
import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {CONSTANTS} from '../Lib/Constants';
import {i18n} from '../Translation';
import {openSettings} from 'react-native-permissions';

export const getCurrentLocationAddressAndCoords = async () => {
  let finalResponse = {
    location: {type: 'Point', coordinates: [0, 0]},
    address: {
      formatted_address: null,
      area_level_1: null,
      area_level_2: null,
      area_level_3: null,
      country: null,
      route: null,
    },
  };

  try {
    let position = await getCurrentLocationCoords();
    if (
      position &&
      position.coords &&
      position.coords.latitude &&
      position.coords.longitude
    ) {
      let {latitude, longitude} = position.coords;
      finalResponse.location.coordinates = [longitude, latitude]; // Assign latLong
      let addressResp = await getAddressByCoords(latitude, longitude);
      if (
        addressResp &&
        addressResp.results &&
        isArray(addressResp.results) &&
        addressResp.results[0] &&
        addressResp.results[0].formatted_address &&
        addressResp.results[0].address_components &&
        isArray(addressResp.results[0].address_components)
      ) {
        let {address_components, formatted_address} = addressResp.results[0];
        finalResponse.address.formatted_address = formatted_address; // Assign full address
        for (var i in address_components) {
          for (var j in address_components[i].types) {
            switch (
              address_components[i].types[j] // Assign country, route & Areas 1/2/3
            ) {
              case 'administrative_area_level_1':
                finalResponse.address.area_level_1 =
                  address_components[i].long_name;
                break;
              case 'administrative_area_level_2':
                finalResponse.address.area_level_2 =
                  address_components[i].long_name;
                break;
              case 'administrative_area_level_3':
                finalResponse.address.area_level_3 =
                  address_components[i].long_name;
                break;
              case 'country':
                finalResponse.address.country = address_components[i].long_name;
                break;
              case 'route':
                finalResponse.address.route = address_components[i].long_name;
                break;
              default:
                break;
            }
          }
        }
      }
    }
  } catch (error) {
    console.warn('getCurrentLocationAddressAndCoords error: ', error);
  }

  return finalResponse;
};

const getAddressByCoords = async (lat, long) => {
  let response = await fetch(
    `${CONSTANTS.GEOCODING_API_URL}?key=${CONSTANTS.GEOCODING_API_KEY}&latlng=${lat},${long}&sensor=true`,
  );
  let jsonResponse = await response.json();
  return jsonResponse;
};

const getCurrentLocationCoords = async () => {
  const authorizationState = await requestLocationAuthorization();

  if (
    (Platform.OS == 'android' && authorizationState == 'never_ask_again') ||
    (Platform.OS == 'ios' && authorizationState == 'denied')
  ) {
    openSettings();
  }

  return new Promise(async (resolve, reject) => {
    if (authorizationState == 'granted') {
      Geolocation.getCurrentPosition(
        (position) => {
          resolve(position);
        },
        (err) => {
          reject(false);
        },
        {timeout: 15000},
      );
    } else {
      reject(false);
    }
  });
};

//permission to get user location
const requestLocationAuthorization = async () => {
  switch (Platform.OS) {
    case 'android':
      return await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: i18n.t('GENERAL.GROK'),
          message: i18n.t('SURVEY.ANDROID_LOCATION_PERMISSION'),
          buttonPositive: i18n.t('LOST_CONNECTION.TRY_AGAIN'),
        },
      );
    case 'ios':
      return await Geolocation.requestAuthorization('whenInUse');
    default:
      return null;
  }
};
