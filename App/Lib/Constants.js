export const STORAGE_KEYS = {
  USER_APP_LANGUAGE: 'USER_APP_LANGUAGE',
};

export const CONSTANTS = {
  GEOCODING_API_URL: 'https://maps.googleapis.com/maps/api/geocode/json',
  GEOCODING_API_KEY: 'AIzaSyA0t_ccYumrbrLTKqZ14sKgBZfJ-FJRrCA',
  // TERMS_URL: 'https://xjj8pawbz6.execute-api.us-east-2.amazonaws.com/default/grok-terms'
};

export const ERRORS = {
  UNKNOWN: 'unknown',
  SIGN_IN: {
    INCORRECT: 'incorrectUsernameOrPass',
  },
  SIGN_UP: {
    EMAIL_ALREADY_EXIST: 'emailAlreadyExist',
    WRONG_EMAIL_OR_OTP: 'wrongEmailOrOTP',
    USER_IMAGE: 'failedToUploadUserImage',
  },
  FORGET_PASSWORD: {
    EMAIL_DOESNT_EXIST: 'emailDoesntExist',
    WRONG_OTP: 'wrongOTP',
    ACCOUNT_NOT_COMPLETE: 'accountRegistrationNotComplete',
  },
  CHANGE_PASSWORD: {
    WRONG_OLD_PASS: 'wrongOldPassword',
  },
};
