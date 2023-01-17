import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../redux/store';
import {searchMovie} from '../redux/reducer/AppReducer';
import Card from '../component/Card';
import styles from '../style';

export default function Search(): JSX.Element {
  const dispatch = useAppDispatch();
  const [searchText, setSearchText] = useState('');
  const {search} = useSelector((state: RootState) => state.reducer);
  const {isDarkTheme} = useSelector((state: RootState) => state.reducer);

  const onSearch = () => {
    dispatch(searchMovie(searchText));
  };

  return (
    <View style={isDarkTheme ? styles.containerDark : styles.containerLight}>
      <TextInput
        style={[
          styles.textInput,
          isDarkTheme ? styles.textLight : styles.textDark,
        ]}
        placeholderTextColor={isDarkTheme ? '#fff' : '#000'}
        onChangeText={e => setSearchText(e)}
        placeholder="Enter movie"
        value={searchText}
      />
      <TouchableOpacity
        style={[
          styles.searchButton,
          searchText.length === 0 ? styles.buttonInactive : styles.buttonActive,
        ]}
        disabled={searchText.length === 0 && true}
        onPress={onSearch}>
        <Text style={styles.textLight}>Search movie!</Text>
      </TouchableOpacity>
      {search.length > 0 && (
        <FlatList
          data={search}
          numColumns={2}
          renderItem={({item}) => <Card {...item} />}
        />
      )}
    </View>
  );
}
