import {StyleSheet} from 'react-native';
import {Colors} from '../../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    // marginTop: '20%',
    // marginBottom: '10%',
    marginTop: 50,
    width: 117,
    height: 117,
  },
  textInputContainer: {width: '98%', height: 100},
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFiledRoot: {marginTop: 20},
  cellContainer: {
    width: 40,
    height: 40,
    borderBottomWidth: 2,
    borderColor: Colors.Blue,
  },
  cellText: {
    fontSize: 24,
    textAlign: 'center',
    color: Colors.Blue,
    borderColor: Colors.Blue,
  },
  // emailContainer: {
  //   marginTop: 15,
  //   justifyContent: 'flex-start',
  //   flexDirection: 'column',
  //   textAlign: 'left',
  //   marginRight: 85,
  // },
  // email: {
  //   color: '#fff',
  //   fontSize: 15,
  //   textAlign: 'left'
  // },
  emailContainer: {
    marginTop: 15,
    color: '#fff',
    fontSize: 15,
    // textAlign: 'left'
  },
  email: {
    color: '#fff',
    fontSize: 15,
  },
});
