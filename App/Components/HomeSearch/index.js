import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import styles from './styles.js';

const HomeSearch = props => {
  const navigation = useNavigation();
  const [flag, setFlag] = useState(0);

  const checkLiveLocation = () => {
    setFlag(1);
  };
  const goToSearch = () => {
    navigation.navigate('DestinationSearch');
  };
  // console.log(flag);

  return (
    <View>
      <TouchableOpacity onPress={()=>goToSearch()} style={styles.inputBox}>
        <Text style={styles.inputText}>Where To?</Text>

        <View style={styles.timeContainer}>
          <AntDesign name={'clockcircle'} size={16} color={'#535353'} />
          <Text>Now</Text>
          <MaterialIcons name={'keyboard-arrow-down'} size={16} />
        </View>

      </TouchableOpacity>
      
    </View>
  );
};

export default HomeSearch;
