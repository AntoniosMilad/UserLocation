import {en, ar} from './language';
import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import {getUserAppLanguage, setAppRTL, getAppLanguage} from '../Lib/Utils';

const DEFAULT_LANGUAGE = 'en';
I18n.fallbacks = true;

I18n.translations = {
  en,
  ar,
};

export const configureLocalization = async () => {
  const locales = RNLocalize.getLocales();
  const userAppLanguage = await getUserAppLanguage();

  if (userAppLanguage) {
    // User stored app language from settings
    console.log('Localization user language', userAppLanguage);
    I18n.language = userAppLanguage;
    I18n.locale = userAppLanguage;
  } else if (Array.isArray(locales)) {
    // no user app language found
    I18n.locale = locales[0].languageTag;
    const locale = locales[0].languageCode;

    if (locale == 'en' || locale == 'ar') {
      // App supported languages
      console.log('Localization app language', locale);
      I18n.language = locale;
    } else {
      // DEFAULT
      I18n.language = DEFAULT_LANGUAGE;
      I18n.locale = DEFAULT_LANGUAGE;
    }

    // Force RTL
    setAppRTL(locale == 'ar' ? true : false, false);
  } else {
    console.log('Localization failed to get locales');
    I18n.language = DEFAULT_LANGUAGE;
    I18n.locale = DEFAULT_LANGUAGE;
  }

  // add Applanguage to Global for allApp using purpose
  global.AppLanguage = await getAppLanguage();
};

export const i18n = I18n;
