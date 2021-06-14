import React from 'react';
import {View, Image, ScrollView} from 'react-native';
import InputField from '../../Common/InputField';
import {Images} from '../../../Themes';
import styles from './styles';
import {
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {validatePhoneNumber, isValidEmail} from '../../../../Validations';
import {i18n} from '../../../Translation';
import OfflineNotice from '../../../Lib/OfflineNotice';

// const AddEmailAddress = ({ setMobile }) => {
//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <View style={styles.container}>
//         <Image source={Images.addmobileIcn} style={styles.image} />
//         <View style={styles.textInputContainer}>
//           <InputField
//             label="Mobile number"
//             keyboardType="numeric"
//             onChange={(text) => setMobile(text)}
//             onEndEditing={(e) => validatePhoneNumber(e.nativeEvent.text)}
//           />
//         </View>
//       </View>
//     </TouchableWithoutFeedback>

//   );
// };

// export default AddEmailAddress;

const AddEmailAddress = ({setEmail}) => {
  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.container}>
          <OfflineNotice />

          <Image source={Images.addemailIcn} style={styles.image} />
          <View style={styles.textInputContainer}>
            <InputField
              label={i18n.t('SIGN_UP.ENTER_EMAIL')}
              onChange={(text) => setEmail(text)}
              keyboardType="email-address"
              onEndEditing={(e) => isValidEmail(e.nativeEvent.text)}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default AddEmailAddress;
