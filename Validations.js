import {Alert} from 'react-native';

//validate phoneNumber
export const validatePhoneNumber = (text) => {
  let phoneRegex = /^01[0-2]{1}[0-9]{8}/;
  console.log('mobile', text);
  console.log('phoneRegex.test(mobile)', phoneRegex.test(text));

  if (phoneRegex.test(text)) {
    // this.setState({ phoneValid: true });
    return true;
  } else {
    return false;
    // Alert.alert(
    //     ' ', // alert title
    //     'your phone number should start with 011,012 or 010 and not less than 11 number, please try again',
    //     [
    //         {
    //             text: 'Ok'
    //         }
    //     ],
    //     { cancelable: true },
    // );
  }
}; //end of validate

//validate emailAddress
export const isValidEmail = (text) => {
  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(text);
};

// validate userPassword
export const validateUserPassword = (text) => {
  let passRegex = /^(?=.*\d).{8,20}$/;
  if (passRegex.test(text)) {
    return true;
  } else {
    return false;
    Alert.alert(
      ' ', // alert title
      'Password must be at least 8 characters and include at least one numeric digit , please try again', // alert message
      [
        {
          text: 'Ok',
        },
      ],
      {cancelable: true},
    );
  }
}; //end of validate

export const validateUserName = (text) => {
  let nameRegex = /^(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/;
  //let nameRegex = /^\s[!@#$%^&*()+=\-\[\]\';,.\/{}|":<>?~\\\\][A-Z](.)$/;
  if (nameRegex.test(text)) {
    return true;
  } else {
    return false;
    Alert.alert(
      ' ', // alert title
      'username should not be all numbers or all letters ,and must be between 6-15 characters in length with no special characters', // alert message
      [
        {
          text: 'Ok',
        },
      ],
      {cancelable: true},
    );
  }
}; //end of validate

export const isValidUsernameOrPassword = (text) => {
  return text.trim().length >= 6 && text.trim().length <= 30;
};
