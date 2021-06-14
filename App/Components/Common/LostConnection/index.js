import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Images } from '../../../Themes';
import styles from './styles';
import * as NavigationService from '../../../Services/NavigationService';
import { i18n } from '../../../Translation';



const lostConnection = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.centeredImg}
          source={Images.lostConnection}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.networkText}>{i18n.t("LOST_CONNECTION.OOPS_TEXT")}</Text>
        <Text style={styles.networkText}>{i18n.t("LOST_CONNECTION.NO_NETWORK")}</Text>
        <Text style={styles.networkText}>{i18n.t("LOST_CONNECTION.CHECK_NETWORK")}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onClick={() => NavigationService.goBack()}>
          <Text style={styles.text}>{i18n.t("LOST_CONNECTION.TRY_AGAIN")}</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

export default lostConnection;
