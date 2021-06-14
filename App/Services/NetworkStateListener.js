import { useEffect } from "react";
import NetInfo from '@react-native-community/netinfo';

const NetworkStateListener = (handler) => {
    useEffect(() => {
        NetInfo.addEventListener(state => {
            handler(state.isInternetReachable)
        })
    })
}

export { NetworkStateListener };