import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, Dimensions } from 'react-native';
import Colors from '../Themes/Colors';
import NetInfo from '@react-native-community/netinfo';
const { width } = Dimensions.get('window');


function MiniOfflineSign() {
    return (
        <View style={styles.offlineContainer}>
            <Text style={styles.offlineText}>No Internet Connection</Text>
        </View>
    );
}

export default class OfflineNotice extends Component {
    constructor(props) {
        super(props)
        this.unsubscribe = null
    }
    state = {
        connection_Status: "",
        isConnected: true
    }

    componentDidMount() {
        this.unsubscribe = NetInfo.addEventListener(this.handleConnectivityChange);

        // The fetch is not needed as the listen will send the current state when you subscribe to it
    }

    componentWillUnmount() {
        // NetInfo.removeEventListener(this.handleConnectivityChange);
        this.unsubscribe();

    }

    handleConnectivityChange = state => {
        if (state.isConnected) {
            //  Alert.alert('online');
            this.setState({ connection_Status: true });
        }
        else {
            // Alert.alert('offline');
            this.setState({ connection_Status: false });
        }
    };

    render() {
        // return (
        //     <View style={styles.offlineContainer}>
        //         <Text style={styles.text}> You are {this.state.connection_Status} </Text>
        //     </View>
        // );
        if (!this.state.connection_Status) {
            return <MiniOfflineSign />;
        }
        return null;
    }
}

const styles = StyleSheet.create({
    offlineContainer: {
        //  backgroundColor: '#b52424',
        //backgroundColor: Colors.pinkishOrange,
        // height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width,
        position: 'absolute',
        top: 0
    },
    offlineText: {
        color: 'red',
        fontSize: 12,
    },
});
