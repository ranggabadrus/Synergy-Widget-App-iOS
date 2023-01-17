import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export type MovieResult = {
  page: number;
  results: Movie[];
  dates: {
    maximum: string;
    minimum: string;
  };
  total_pages: number;
  total_results: number;
};

export type Movie = {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: [number];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
};

export interface ReducerType {
  movie: Movie[];
  search: Movie[];
  isDarkTheme: boolean;
}

const initialState: ReducerType = {
  movie: [],
  search: [],
  isDarkTheme: false,
};

export const fetchNowPlayingMovie = createAsyncThunk<Movie[]>(
  'fetchNowPlayingMovie',
  async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=570c36d75740509c00d865a804d826a5&language=en-US&page=1',
    );
    const data: MovieResult = await response.json();
    return data.results;
  },
);

export const searchMovie = createAsyncThunk<Movie[], string>(
  'searchMovie',
  async e => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=570c36d75740509c00d865a804d826a5&language=en-US&query=${e}&page=1&include_adult=false`,
    );
    const data: MovieResult = await response.json();
    return data.results;
  },
);

export const synergySlice = createSlice({
  name: 'synergy',
  initialState,
  reducers: {
    changeTheme(state) {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchNowPlayingMovie.fulfilled, (state, action) => {
      // Add user to the state array
      state.movie = action.payload;
    });
    builder.addCase(searchMovie.fulfilled, (state, action) => {
      // Add user to the state array
      state.search = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {changeTheme} = synergySlice.actions;

export default synergySlice.reducer;
