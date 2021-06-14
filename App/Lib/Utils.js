
import I18n from "i18n-js";
import { Alert, I18nManager } from "react-native";
import { storage } from "../../Storage";
import { STORAGE_KEYS } from "./Constants";
import RNRestart from 'react-native-restart';

export const getPastDateByYears = (years) => {
    const now = new Date();
    return new Date(now.setFullYear(now.getFullYear() - years));
};

export const getUserAppLanguage = async () => {
    return await storage.getData(STORAGE_KEYS.USER_APP_LANGUAGE);
}

export const getAppLanguage = async () => {
    const userAppLanguage = await getUserAppLanguage();
    if (userAppLanguage) {
        return userAppLanguage;
    } else {
        return I18n.language;
    }
}

export const setAppRTL = async (isRTL, forceReload) => {
    await I18nManager.forceRTL(isRTL);

    /* 
     fixing RTL changes in first app load + FORCE RELOAD APP
     https://stackoverflow.com/questions/48638652/i18nmanager-forcertl-doesnt-applies-changes-in-first-app-load
    */
    // console.warn('isRTL', isRTL)
    // console.warn('I18nManager.isRTL', I18nManager.isRTL)
    if (isRTL != I18nManager.isRTL || forceReload) {
        RNRestart.Restart();
    }
}

export const restartAppLanguage = async (lang, isRTL) => {
    await storage.setData(STORAGE_KEYS.USER_APP_LANGUAGE, lang);
    await setAppRTL(isRTL, true);
}

export const showAlert = (title, message, buttons, options) => {
    return Alert.alert(
        title,
        message,
        buttons,
        options
    );
}
