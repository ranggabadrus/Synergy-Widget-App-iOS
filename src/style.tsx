'use strict';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  textInput: {
    alignSelf: 'center',
    borderWidth: 1,
    width: 200,
    textAlign: 'center',
    borderColor: '#dedede',
    marginVertical: 10,
    paddingVertical: 10,
  },
  searchButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    // backgroundColor: searchText.length == 0 ? 'gray' : '#3478F6',
    marginHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonActive: {
    backgroundColor: '#3478F6',
  },
  buttonInactive: {
    backgroundColor: 'gray',
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  absolute: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLight: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  containerDark: {
    backgroundColor: '#121212',
    flex: 1,
  },

  textLight: {
    color: '#fff',
  },
  textDark: {
    color: '#000',
  },
});
