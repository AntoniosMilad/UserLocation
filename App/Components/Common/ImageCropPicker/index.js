
import ImagePicker from 'react-native-image-crop-picker';
import { showAlert } from '../../../Lib/Utils';
import { i18n } from '../../../Translation';

export const showImagePicker = async (cb, isMultiple) => {
    const title = i18n.t("GENERAL.SELECT_PHOTO");
    const options = { cancelable: false }
    const buttons = [
        { text: i18n.t("GENERAL.CANCEL"), onPress: () => cb(false), style: 'cancel' },
        { text: i18n.t("GENERAL.CHOOSE_FROM_GALLERY"), onPress: () => openGallery(cb, isMultiple) },
        { text: i18n.t("GENERAL.TAKE_PHOTO"), onPress: () => openCamera(cb) }
    ]
    showAlert(title, null, buttons, options)
}

const openGallery = (cb, isMultiple) => {
    const hasMultiple = isMultiple ? true : false;
    ImagePicker.openPicker({
        mediaType: 'photo',
        width: 100,
        height: 100,
        multiple: hasMultiple
    }).then(response => {
        console.log('response', response)
        let imagesPaths = [];
        if (hasMultiple) {
            for (let i = 0; i < response.length; i++) {
                imagesPaths.push(response[i]);
            }
        } else {
            imagesPaths.push(response);
        }
        cb(imagesPaths);
    }).catch(err => {
        cb(false)
    })
}


const openCamera = (cb) => {
    ImagePicker.openCamera({
        mediaType: 'photo',
    }).then(data => {
        cb(data)
    }).catch(err => {
        cb(false)
    })
}