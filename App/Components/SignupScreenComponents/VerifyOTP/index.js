import React from 'react';
import {View, Image, Text} from 'react-native';
import {
  CodeField,
  Cursor,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {Images} from '../../../Themes';
import styles from './styles';
import OfflineNotice from '../../../Lib/OfflineNotice';
import {useDispatch, useSelector} from 'react-redux';
import {i18n} from '../../../Translation';

const VerifyOTP = ({setOtp, otp}) => {
  const registeredEmail = useSelector((state) => state.signUp.email);
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    otp,
    setOtp,
  });
  return (
    <View style={styles.container}>
      <OfflineNotice />
      <Text style={styles.emailContainer}>{i18n.t('GENERAL.TOKEN_SENT')}</Text>
      <Text style={styles.email}>{registeredEmail}</Text>
      {/* <View style={styles.emailContainer}>
        <Text style={styles.email}>token has been sent to:</Text>
        <Text style={styles.email}>{registeredEmail}</Text>
      </View> */}
      <Image source={Images.verifyemailIcn} style={styles.image} />
      <View style={styles.textInputContainer}>
        <CodeField
          {...props}
          value={otp}
          onChangeText={setOtp}
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
    </View>
  );
};

export default VerifyOTP;
