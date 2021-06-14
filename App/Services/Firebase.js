
import messaging from '@react-native-firebase/messaging';

export const requestMessagingUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    // console.warn('Firebase Messaging Authorization status:', authStatus);
}

export const subscribetMessagingTopic = async (topic) => {
    messaging().subscribeToTopic(topic).then(() => console.warn('Subscribed to topic!'));
}

export const unsubscribetMessagingTopic = async (topic) => {
    messaging().unsubscribeFromTopic(topic).then(() => console.warn('Unsubscribed fom the topic!'));
}