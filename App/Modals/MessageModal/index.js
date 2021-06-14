
import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import styles from './styles';
import { Colors } from '../../Themes';

//To run typechecking on the props for a component, you can assign the special propTypes property
import PropTypes from 'prop-types';
//The goal of react-native-modal is expanding the original react-native Modal component by adding animations 
//and styles customization options while still providing a plain-simple API.
import Modal from 'react-native-modal';

const MessageModal = ({
    isVisible,
    title,
    description,
    okayText,
    cancelText,
    onPressOkay,
    onPressCancel
}) => {

    // common
    const renderText = (style, text) => {
        return (
            <Text style={style}>{text}</Text>
        );
    }

    const renderButton = (btnStyle, textStyle, onPress, text) => {
        return (
            <TouchableOpacity style={btnStyle} onPress={() => onPress()}>
                <Text style={textStyle}>{text}</Text>
            </TouchableOpacity>
        );
    }

    // upper
    const renderTitle = () => {
        return (
            <View style={styles.upperContainer}>
                <View>
                    {renderText(styles.title, title)}
                </View>
            </View>
        );
    }


    // middle
    const renderDescription = () => {
        return (
            <View style={styles.middleContainer}>
                <View>
                    {renderText(styles.description, description)}
                </View>
            </View>
        );
    }


    // lower
    const renderLowerView = () => {
        return (
            <View style={styles.lowerContainer}>
                {renderButtons()}
            </View>
        );
    }


//check if cancel text exist wil render cancel button, and okay as the same
    const renderButtons = () => {
        return (
            <View style={styles.buttonsContainer}>
                {cancelText && renderCancelBtn()}
                {okayText && renderOkayBtn()}
            </View>
        );
    }

    const renderCancelBtn = () => {
        return (
            <View>
                {renderButton(
                    //btnStyle   touchableOpacity style            
                    [styles.okayCancelContainer, { backgroundColor: Colors.white }],
                    //textStyle    
                    [styles.okayCancelText, { color: Colors.pinkishOrange }],
                    //onPress cancel
                    onPressCancel,
                    //cancel text
                    cancelText
                )}
            </View>
        );
    }

    const renderOkayBtn = () => {
        return (
            <View>
                {renderButton(
                    [styles.okayCancelContainer, { backgroundColor: Colors.pinkishOrange, paddingHorizontal: cancelText ? 28 : 56 }],
                    [styles.okayCancelText, { color: Colors.white }],
                    onPressOkay,
                    okayText
                )}
            </View>
        );
    }


    // main View
    //check if title exist will show it
    //check if description exist will show it
    //check on okay and cancel buttons if exist or not too and the method that render buttons renderLowerView
    const renderMainView = () => {
        return (
            <View style={styles.innerContainer}>
                {title && renderTitle()}
                {description && renderDescription()}
                {(okayText || cancelText) && renderLowerView()}
            </View>
        );
    }

    const renderStatusBar = () => {
        return (
            <StatusBar backgroundColor="rgba(0,0,0,0.7)" />
        );
    }

    return (
        <Modal
            isVisible={isVisible}
            animationInTiming={1000}
            animationOutTiming={1000}
            backdropTransitionInTiming={0}
            backdropTransitionOutTiming={0}
            onRequestClose={() => console.log('Message Modal Closed')}
            supportedOrientations={['portrait']}
        >
            <View style={styles.mainContainer}>
                {renderStatusBar()}
                {renderMainView()}
            </View>
        </Modal>
    );
}

// Specifies the default values for props:
MessageModal.defaultProps = {
    isVisible: false,
    title: null,
    description: null,
    okayText: null,
    cancelText: null,
    onPressOkay: () => { console.log('Message Modal: okay pressed') },
    onPressCancel: () => { console.log('Message Modal: cancel pressed') }
};

MessageModal.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    okayText: PropTypes.string,
    cancelText: PropTypes.string,
    onPressOkay: PropTypes.func,
    onPressCancel: PropTypes.func
};


//MessageModalType to pass values to messageModal
class MessageModalType {
    title = null;
    description = null;
    okayText = null;
    cancelText = null;
    onPressOkay = () => { };
    onPressCancel = () => { };
}

export { MessageModal, MessageModalType };