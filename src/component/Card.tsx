import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Movie} from '../redux/reducer/AppReducer';
import styles from '../style';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

export default function Card(item: Movie) {
  const {isDarkTheme} = useSelector((state: RootState) => state.reducer);

  return (
    <TouchableOpacity style={{flex: 1}}>
      <Image
        source={{
          uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path,
        }}
        style={{height: 300, resizeMode: 'cover'}}
      />
      <LinearGradient
        colors={['transparent', 'transparent', isDarkTheme ? '#000' : '#fff']}
        style={styles.gradient}></LinearGradient>
      <View style={styles.absolute}>
        <Text
          style={[
            styles.title,
            isDarkTheme ? styles.textLight : styles.textDark,
          ]}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
