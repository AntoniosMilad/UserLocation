import * as React from 'react';
import {useSelector} from 'react-redux';
import {Text} from 'react-native';
//stack navigator
import {createStackNavigator} from '@react-navigation/stack';
//bottom navigator
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//drawer navigator for menu
import {createDrawerNavigator} from 'react-navigation-drawer';
// for icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../Themes';
import styles from './AppStack.styles';

import SearchResults from '../../Containers/SearchResults';
import HomeScreen from '../../Containers/HomeScreen';
import DestinationSearch from '../../Containers/DestinationSearch';


//here if we want to use tab Navigator ,it take a movies stack navigator inside it

// export const AppStack = () => {
//   const Tab = createBottomTabNavigator();
//   return (
//     <Tab.Navigator
//       // initialRouteName="Photo"
//       tabBarOptions={{
//         activeTintColor: Colors.Blue,
//         // inactiveTintColor: 'white',
//         // showLabel: true, //icons in label because maxsize of tabBarIcons is 25
//         // showIcon: false,
//         indicatorStyle: {height: 0},
//         // pressColor: 'transparent',
//         pressOpacity: 0,
//         style: {
//           // paddingBottom: 24,
//           // backgroundColor: 'transparent',
//           position: 'absolute',
//           bottom: 0,
//           // width: Dimensions.get('window').width
//         },
//       }}>
//           <Tab.Screen
//         name="MoviesCategoriesScreen"
//         component={MoviesScreen}
//         options={{
//           tabBarLabel: 'Movies Categories',
//           tabBarIcon: ({color, size}) => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),
//         }}
//       />
    
//     </Tab.Navigator>
//   );
// };


 
//stack
// const StackScreen = () => {
//   const MoviesStack = createStackNavigator();
//   return (
//     <MoviesStack.Navigator  headerMode="none">

//     </MoviesStack.Navigator>
//   );
// };

// navigation only using stack
export const AppStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
    headerMode="none"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DestinationSearch" component={DestinationSearch} />
      <Stack.Screen name="SearchResults" component={SearchResults} />
    </Stack.Navigator>
  );
};
