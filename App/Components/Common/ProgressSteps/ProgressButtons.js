import React from 'react';
import { View } from 'react-native';

//we don't use previous or next button 
const ProgressButtons = props => (
  <View style={{ flexDirection: 'row', marginTop: 90 }}>
    <View style={{ position: 'absolute', left: 60, bottom: 40 }}>{props.renderPreviousButton()}</View>
    <View style={{ position: 'absolute', right: 60, bottom: 40 }}>{props.renderNextButton()}</View>
  </View>
);

export default ProgressButtons;
