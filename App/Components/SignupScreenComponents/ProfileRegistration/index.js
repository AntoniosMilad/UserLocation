import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';
import InputField from '../../Common/InputField';
// import GenderSelection from '../../Common/GenderSelection';
// import DatePicker from '../../Common/DatePicker';

import {Colors} from '../../../Themes';
import styles from './styles';
import {i18n} from '../../../Translation';
import OfflineNotice from '../../../Lib/OfflineNotice';
import {CheckBox} from 'react-native-elements';
import * as NavigationService from '../../../Services/NavigationService';
// import {showImagePicker} from '../../Common/ImageCropPicker';
import {
  CodeField,
  Cursor,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const ProfileRegistration = ({
  setUsername,
  setPhone,
  setPassword,
  setConfirmPassword,
  // setDate,
  // date,
  // setGender,
  // gender,
  acceptTerms,
  setAcceptTerms,
  // photoSource,
  // setPhotoSource,
  setRefCode,
  refCode,
}) => {
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    refCode,
    setRefCode,
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.container}>
        <OfflineNotice />
        <View style={styles.InputFieldsContainer}>
          <InputField
            label={i18n.t('SIGN_UP.USERNAME')}
            onChange={(text) => setUsername(text)}
            maxLength={50}
          />
          <InputField
            label={i18n.t('SIGN_UP.PHONE')}
            secure={false}
            onChange={(text) => setPhone(text)}
            //onEndEditing={(e) => validateUserPassword(e.nativeEvent.text)}
          />
          <InputField
            label={i18n.t('SIGN_UP.PASSWORD')}
            secure={true}
            onChange={(text) => setPassword(text)}
            //onEndEditing={(e) => validateUserPassword(e.nativeEvent.text)}
          />
          <InputField
            label={i18n.t('SIGN_UP.CONFIRMPASSWORD')}
            secure={true}
            onChange={(text) => setConfirmPassword(text)}
            //onEndEditing={(e) => validateUserPassword(e.nativeEvent.text)}
          />
          <Text style={styles.textContainer}>
            {i18n.t('SIGN_UP.REFERRAL_CODE')}
          </Text>
          <CodeField
            {...props}
            value={refCode}
            onChangeText={setRefCode}
            cellCount={5}
            rootStyle={styles.codeFiledRoot}
            keyboardType="number-pad"
            renderCell={({index, symbol, isFocused}) => (
              <View
                style={styles.cellContainer}
                key={index}
                onLayout={getCellOnLayoutHandler(index)}>
                <Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />
        </View>
        {/* <View style={styles.genderSelectionContainer}>
          <GenderSelection setGender={setGender} gender={gender} />
        </View> */}
        {/* <View style={styles.ageSelectionContainer}>
          <DatePicker
            date={date}
            mode="date"
            onDateChange={setDate}
            fadeToColor={Colors.pinkishOrange}
            textColor={Colors.whiteThree}
          />
        </View> */}
      </View>
      <View style={styles.checkboxTitleContainer}>
        <CheckBox
          containerStyle={styles.checkbox}
          size={25}
          checked={acceptTerms}
          checkedColor={Colors.sherpaBlue}
          uncheckedColor={Colors.sherpaBlue}
          onPress={() => setAcceptTerms(!acceptTerms)}
        />
        <Text style={styles.agreeText}>
          {i18n.t('SIGN_UP.AGREE_ON')}
          <Text
            style={styles.termsText}
            onPress={() => NavigationService.navigate('TermsConditions')}>
            {i18n.t('SIGN_UP.TERMS_CONDITIONS')}
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ProfileRegistration;
