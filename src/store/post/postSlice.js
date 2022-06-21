import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../apiServices';

// async requests
const getPosts = createAsyncThunk('posts/getPosts', async (page = '1') => {
  const response = await api.fetchPosts(page);
  return response.data;
});

const initialState = {
  posts: [],
  detail: {},
  loading: false,
  results: 0,
  page: 0,
  error: null,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload.posts;
      state.results = action.payload.result;
      state.error = null;
    },
    [getPosts.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});

// exporto las acciones asyncronicas
export { getPosts };

export default postSlice.reducer;
