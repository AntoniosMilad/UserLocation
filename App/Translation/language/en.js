export const en = {
  //general words
  GENERAL: {
    WOOHOO: 'Woohoo!',
    NEXT: 'Next',
    VERIFY: 'Verify',
    SUBMIT: 'Submit',
    OK: 'OK',
    CANCEL: 'Cancel',
    SAVE: 'Save',
    ADD: 'add',
    SELECT_PHOTO: 'Select Photo',
    CHOOSE_FROM_GALLERY: 'Choose from Gallery...',
    TAKE_PHOTO: 'Take Photo...',
    UNKNOWN: 'unknown',
    TOKEN_SENT: 'token has been sent to:',
  },
   //AUTH
  LOGIN: {
    TITLE_1: 'welcome,',
    TITLE_2: 'sign in to continue',
    // USERNAME: 'Username',
    Email: 'email',
    PASSWORD: 'Password',
    FORGET_PASSWORD: 'forget password?',
    GET_STARTED: 'get started',
    NO_ACCOUNT: "Don't have an account?",
    SIGN_UP: 'Sign up here',
  },
  //Singup words
  SIGN_UP: {
    TITLE: 'Signup',
    ENTER_EMAIL: 'Enter your email address',
    USERNAME: 'Username',
    PASSWORD: 'Password',
    CONFIRMPASSWORD: 'confirm Password',
    PHONE: 'Phone number',
    AGREE_ON: 'I agree to ',
    TERMS_CONDITIONS: 'Terms and Conditions',
    REFERRAL_CODE: 'Referral Code',
  },
    MOVIES:{
      INPUT_CATEGORY_NAME:"Category Name",
      INPUT_CATEGORY_DESCRIPTION:"Category Description",
      CREATE_BUTTON:"CREATE",
      SEE_MORE_MOVIES:"See List ...",
  },
    MOVIES_LIST:{
      EDIT:"Edit",
      DELETE:"Delete",
      ADD_BUTTON:"ADD MOVIE",
      MOVIE_NAME:"Movie Name",
      MOVIE_RATE:"Movie Rate",
      MOVIE_DESCRIPTION:"Movie Description",
  },
  //LOST CONNECTION SCREEN
  LOST_CONNECTION: {
    OOPS_TEXT: 'Ooops!',
    NO_NETWORK: 'slow or no internet connection.',
    CHECK_NETWORK: 'please check your internet settings.',
    TRY_AGAIN: 'try again',
  },
  //Error Handling Messages
  EDIT_ERR: {
    ERR400: 'data entered is an incorect',
    ERR403: 'username already exist',
  },
  ERRORS: {
    GENERAL: {
      TITLE: 'Ooops',
      DESC: 'Something went wrong, please try again',
    },
    SIGN_IN: {
      TITLE: 'Sign In',
      INCORRECT: 'Username or password is incorrect',
    },
    SIGN_UP: {
      TITLE: 'Signup',
      EMAIL_ALREADY_EXIST: 'Email already exists',
      WRONG_EMAIL_OR_OTP: 'Incorrect OTP token or email',
      WRONG_OTP: 'Incorrect OTP token',
      USER_IMAGE:
        'Something went wrong while uploading image, please try again',
    },
  },
  //validations
  VALIDATIONS: {
    USERNAME_PASSWORD:
      'Username and password length should be between 6 and 15 alphanumeric characters or symbols',
    PASSWORD:
      'Password length should be between 6 and 15 alphanumeric characters or symbols',
    PASSWORD_MATCH: "Passwords don't match",
    OLD_PASSWORD_MATCH: "New password can't be the same as the old one",
    EMAIL: 'Please enter a valid email address',

    PHONE_NUMBER_EMPTY: 'Please Enter phone number',
    PHONE_NUMBER_VALIDATE:
      'Your phone number must start with 011, 012 or 010 and not less than 11 number, please try again',

    PASSWORD_EMPTY: 'Please Ensure you write your password',
    PASSWORD_VALIDATE:
      'Password must be at least 8 characters and include at least one numeric digit , please try again',
  },
};
