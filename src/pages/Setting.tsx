import {View, Text, Switch} from 'react-native';
import React from 'react';
import {RootState, useAppDispatch} from '../redux/store';
import {useSelector} from 'react-redux';
import {changeTheme} from '../redux/reducer/AppReducer';
import styles from '../style';
export default function Setting() {
  const dispatch = useAppDispatch();

  const {isDarkTheme} = useSelector((state: RootState) => state.reducer);
  return (
    <View
      style={[
        isDarkTheme ? styles.containerDark : styles.containerLight,
        styles.center,
      ]}>
      <Text style={isDarkTheme ? styles.textLight : styles.textDark}>
        Dark mode is {isDarkTheme ? 'ON' : 'OFF'}
      </Text>
      <Switch
        onValueChange={() => dispatch(changeTheme())}
        value={isDarkTheme}
      />
    </View>
  );
}
