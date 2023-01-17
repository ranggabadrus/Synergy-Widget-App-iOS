import {View, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchNowPlayingMovie} from '../redux/reducer/AppReducer';
import {AppDispatch, RootState} from '../redux/store';
import Card from '../component/Card';

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const {movie} = useSelector((state: RootState) => state.reducer);
  useEffect(() => {
    dispatch(fetchNowPlayingMovie());
  }, []);

  return (
    <View>
      <FlatList
        data={movie}
        numColumns={2}
        renderItem={({item}) => <Card {...item} />}
      />
    </View>
  );
}
