import { StyleSheet } from 'react-native';
import { Colors } from '../../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 2,
    backgroundColor: Colors.transparent,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
