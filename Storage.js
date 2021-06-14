import AsyncStorage from '@react-native-community/async-storage';

class Storage {

    setData = async (key, data) => {
        console.log('ASYNCSTORAGEEEEEEEEEEEEEEEE', key, data)
        try {
            data = JSON.stringify(data)
            AsyncStorage.setItem(key, data);
        } catch (error) {
            console.log(err);
        }
    }

    getData = async (key) => {
        try {
            let res = await AsyncStorage.getItem(key);
            return JSON.parse(res);
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    removeData = async (key) => {
        try {
            AsyncStorage.removeItem(key);
        } catch (error) {
            console.log(err);
        }
    }
}

export const storage = new Storage();