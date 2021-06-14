// import * as React from 'react';
// import {useSelector} from 'react-redux';
// import {createStackNavigator} from '@react-navigation/stack';
// import LoginScreen from '../../Containers/LoginScreen';
// import SignupScreen from '../../Containers/SignupScreen';

// export const AuthStack = () => {
//   const Stack = createStackNavigator();
//   const inRegistrationProcess = useSelector((state) => state?.user?.inRegistrationProcess);
//   const initialRouteName = inRegistrationProcess? 'SignupScreen': 'LoginScreen';
//   return (
//     <Stack.Navigator initialRouteName={initialRouteName}>
//       <Stack.Screen
//         name="LoginScreen"
//         component={LoginScreen}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="SignupScreen"
//         component={SignupScreen}
//         options={{title: ''}}
//         //here send inRegistrationProcess as params to signUp Screen to naviagte with it to required screen
//         initialParams={{inRegistrationProcess}}
//       />
//     </Stack.Navigator>
//   );
// };
