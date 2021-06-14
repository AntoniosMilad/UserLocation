import React from 'react';
import { View, Text } from 'react-native';
import DateWheelPicker from 'react-native-date-picker';
import { Colors } from '../../../Themes';
import styles from './styles';
import { getPastDateByYears } from '../../../Lib/Utils';
import { i18n } from '../../../Translation';

const DatePicker = ({ date, onDateChange, fadeToColor, textColor }) => {
  console.log(date);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{i18n.t("SIGN_UP.BIRTH")}</Text>
      <View style={styles.datePickerContainer}>
        <DateWheelPicker
          locale={global.AppLanguage}
          date={date}
          maximumDate={getPastDateByYears(13)}
          minimumDate={getPastDateByYears(100)}
          // minimumDate={(new Date(1940, 0, 1))}
          // maximumDate={(new Date(2008, 12, 0))}
          mode="date"
          onDateChange={onDateChange}
          fadeToColor={fadeToColor}
          textColor={textColor}
        />
      </View>
    </View>
  );
};

// Specifies the default values for props:
DatePicker.defaultProps = {};

DatePicker.propTypes = {};

export default DatePicker;
