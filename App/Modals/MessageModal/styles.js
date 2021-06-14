
import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts } from '../../Themes';

let { height } = Dimensions.get('window');

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        // backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: 'center',
        alignItems: 'center'
    },

    innerContainer: {
        minWidth: '90%'
    },

    upperContainer: {
        backgroundColor: Colors.pinkishOrange,
        // flex: 0.33,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        color: Colors.white,
        fontFamily: Fonts.type.medium,
        fontSize: 20
    },

    middleContainer: {
        backgroundColor: Colors.white,
        //flex: 0.33,
        padding: 17,
        justifyContent: 'center'
    },

    description: {
        textAlign: 'center',
        color: Colors.grayIsh,
        fontFamily: Fonts.type.Light,
        fontSize: 16.5
    },

    lowerContainer: {
        backgroundColor: Colors.white,
        //   flex: 0.33,
    },

    buttonsContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    okayCancelContainer: {
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 28,
        justifyContent: 'center',
        alignItems: 'center'
    },

    okayCancelText: {
        fontFamily: Fonts.type.medium,
        fontSize: 16.5
    }
})