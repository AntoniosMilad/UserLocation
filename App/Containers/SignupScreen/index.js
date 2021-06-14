import React, {useState, useEffect, useRef} from 'react';
import {Text, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import SignUpActions from '../../Redux/SignUpRedux';
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../../Components/Common/Loading';
import AddEmailAddress from '../../Components/SignupScreenComponents/AddEmailAddress';
import ProfileRegistration from '../../Components/SignupScreenComponents/ProfileRegistration';
import VerifyOTP from '../../Components/SignupScreenComponents/VerifyOTP';
import MainActionButton from '../../Components/Common/MainActionButton';
import BackArrow from '../../Components/Common/BackArrow';
import {isValidEmail, isValidUsernameOrPassword} from '../../../Validations';
import {getPastDateByYears} from '../../Lib/Utils';

import {
  ProgressSteps,
  ProgressStep,
} from '../../Components/Common/ProgressSteps';

import styles from './styles';
import {Colors} from '../../Themes';
import {api} from '../../Sagas/index';
import {i18n} from '../../Translation';
import LostConnection from '../../Components/Common/LostConnection';
import {NetworkStateListener} from '../../Services/NetworkStateListener';
import {MessageModal, MessageModalType} from '../../Modals/MessageModal';
import {ERRORS} from '../../Lib/Constants';

const countryCode = 'en';

const SignupScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const profileRegistrationRef = useRef(null);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [refCode, setRefCode] = useState('');
  const [fullName, setUsername] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [pass, setPassword] = useState('');
  const [c_pass, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  // const [date, setDate] = useState(getPastDateByYears(14));
  // const [gender, setGender] = useState('');
  const [isInternetReachable, setIsInternetReachable] = useState(true);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [messageModalData, setMessageModalData] = useState(
    new MessageModalType(),
  );
  console.log('fullName', fullName);
  console.log('phoneNumber', phoneNumber);
  console.log('pass', pass);
  console.log('c_pass', c_pass);
  const {
    mobileRegisterRequest,
    mobileVerifyRequest,
    registerUserRequest,
    uploadRequest,
    clearSignUp,
  } = SignUpActions;

  const isLoading = useSelector((state) => state.signUp.loading);
  const registeredEmail = useSelector((state) => state.signUp.email);
  const verifed = useSelector((state) => state?.user?.verifedEmail);
  console.log('registeredEmail', registeredEmail);
  console.log('verifedEmail', verifed);

  const currentStep = useSelector((state) => state.signUp.currentStep);
  const signUpError = useSelector((state) => state.signUp.signUpError);

  const inRegistrationProcess = route?.params?.inRegistrationProcess;

  navigation.setOptions({
    headerRight: () => null,
    headerLeft: () =>
      currentStep != 2 ? <BackArrow onClick={() => onClickBack()} /> : null,
    headerStyle: {
      backgroundColor: Colors.white,
      shadowColor: 'transparent',
      elevation: 0,
    },
  });

  const onClickBack = () => {
    api.removeAuthToken();
    dispatch(SignUpActions.setCurrentStep(0));
    navigation.goBack();
  };

  useEffect(() => {
    if (inRegistrationProcess) {
      dispatch(SignUpActions.setCurrentStep(2));
    }
    return () => {
      dispatch(clearSignUp());
    };
  }, []);

  useEffect(() => {
    if (otp && otp.length == 5) {
      submitOTP();
    }
  }, [otp]);

  useEffect(() => {
    //call state of singUpError from singUp Redux
    if (signUpError) {
      switch (signUpError) {
        case ERRORS.SIGN_UP.EMAIL_ALREADY_EXIST:
          openMessageModal(
            //call errors from transaltion files arabic and english
            i18n.t('ERRORS.SIGN_UP.TITLE'),
            i18n.t('ERRORS.SIGN_UP.EMAIL_ALREADY_EXIST'),
            i18n.t('GENERAL.OK'),
            closeMessageModal,
          );
          break;
        case ERRORS.SIGN_UP.WRONG_EMAIL_OR_OTP:
          openMessageModal(
            i18n.t('ERRORS.SIGN_UP.TITLE'),
            i18n.t('ERRORS.SIGN_UP.WRONG_EMAIL_OR_OTP'),
            i18n.t('GENERAL.OK'),
            closeMessageModal,
          );
          break;
        case ERRORS.SIGN_UP.USERNAME_ALREADY_EXIST:
          openMessageModal(
            i18n.t('ERRORS.SIGN_UP.TITLE'),
            i18n.t('ERRORS.SIGN_UP.USERNAME_ALREADY_EXIST'),
            i18n.t('GENERAL.OK'),
            closeMessageModal,
          );
          break;
        case ERRORS.SIGN_UP.USER_IMAGE:
          openMessageModal(
            i18n.t('ERRORS.SIGN_UP.TITLE'),
            i18n.t('ERRORS.SIGN_UP.USER_IMAGE'),
            i18n.t('GENERAL.OK'),
            closeMessageModal,
          );
          break;
        default:
          // unknown error
          openMessageModal(
            i18n.t('ERRORS.GENERAL.TITLE'),
            i18n.t('ERRORS.GENERAL.DESC'),
            i18n.t('GENERAL.OK'),
            closeMessageModal,
          );
          break;
      }
    }
  }, [signUpError]);

  const onSubmitEmail = () => {
    if (isValidEmail(email)) {
      dispatch(mobileRegisterRequest(email));
    } else {
      openMessageModal(
        i18n.t('ERRORS.SIGN_UP.TITLE'),
        i18n.t('VALIDATIONS.EMAIL'),
        i18n.t('GENERAL.OK'),
        closeMessageModal,
      );
    }
  };

  const onSubmitUserRegister = () => {
    if (
      isValidUsernameOrPassword(fullName) &&
      isValidUsernameOrPassword(pass)
    ) {
      if (fullName != pass) {
        if (!acceptTerms) {
          profileRegistrationRef?.current?.scrollToEnd({animated: true});
          openMessageModal(
            i18n.t('ERRORS.SIGN_UP.TITLE'),
            i18n.t('VALIDATIONS.ACCEPT_TERMS'),
            i18n.t('GENERAL.OK'),
            closeMessageModal,
          );
        } else {
          dispatch(
            registerUserRequest(
              fullName,
              phoneNumber,
              verifed,
              countryCode,
              pass,
              c_pass,
              // refCode,
              // date,
              // gender,
            ),
          ); // registeredEmail,// clientLangauge,
        }
      } else {
        openMessageModal(
          i18n.t('ERRORS.SIGN_UP.TITLE'),
          i18n.t('VALIDATIONS.USERNAME_PASSWORD_MATCH'),
          i18n.t('GENERAL.OK'),
          closeMessageModal,
        );
      }
    } else {
      openMessageModal(
        i18n.t('ERRORS.SIGN_UP.TITLE'),
        i18n.t('VALIDATIONS.USERNAME_PASSWORD'),
        i18n.t('GENERAL.OK'),
        closeMessageModal,
      );
    }
  };

  const submitOTP = () => {
    dispatch(mobileVerifyRequest(registeredEmail, otp));
  };

  const handleActionButton = () => {
    switch (currentStep) {
      case 0:
        onSubmitEmail();
        break;
      case 1:
        submitOTP();
        break;
      case 2:
        onSubmitUserRegister();
        break;
      default:
        console.error('Signup screen exceed steps in steper');
    }
  };

  // Message
  const closeMessageModal = () => {
    setShowMessageModal(false);
  };

  const openMessageModal = (
    title,
    description,
    okayText,
    onPressOkay,
    cancelText,
    onPressCancel,
  ) => {
    setMessageModalData({
      title,
      description,
      okayText,
      onPressOkay,
      cancelText,
      onPressCancel,
    });
    setShowMessageModal(true);
  };

  const renderMessageModal = () => {
    const {
      title,
      description,
      okayText,
      cancelText,
      onPressOkay,
      onPressCancel,
    } = messageModalData;
    return (
      <MessageModal
        isVisible={showMessageModal}
        title={title}
        description={description}
        okayText={okayText}
        cancelText={cancelText}
        onPressOkay={onPressOkay}
        onPressCancel={onPressCancel}
      />
    );
  };

  NetworkStateListener(setIsInternetReachable);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidContainer}>
        <Loading loading={isLoading} />
        {renderMessageModal()}
        <Text style={styles.titleText}>{i18n.t('SIGN_UP.TITLE')}</Text>
        <ProgressSteps
          completedStepIconColor={"#28367e"}
          activeStep={currentStep}>
          <ProgressStep>
            <AddEmailAddress setEmail={setEmail} />
          </ProgressStep>
          <ProgressStep>
            <ScrollView>
              <VerifyOTP setOtp={setOtp} otp={otp} />
            </ScrollView>
          </ProgressStep>
          <ProgressStep>
            <ScrollView ref={(ref) => (profileRegistrationRef.current = ref)}>
              <ProfileRegistration
                // date={date}
                // setDate={setDate}
                // gender={gender}
                // setGender={setGender}
                refCode={refCode}
                setRefCode={setRefCode}
                setUsername={setUsername}
                setPhone={setPhone}
                setPassword={setPassword}
                setConfirmPassword={setConfirmPassword}
                acceptTerms={acceptTerms}
                setAcceptTerms={setAcceptTerms}
                uploadRequest={uploadRequest}
              />
            </ScrollView>
          </ProgressStep>
        </ProgressSteps>
        <MainActionButton
          label={i18n.t(currentStep != 2 ? 'GENERAL.NEXT' : 'GENERAL.VERIFY')}
          onClick={() => handleActionButton()}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignupScreen;
