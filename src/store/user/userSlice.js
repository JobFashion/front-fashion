import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../services/axios';

const getUserInfo = createAsyncThunk(async (idUser) => {
  const response = api.fetchUserProfile(idUser);
  return response.data;
});

const initialState = {
  users: [],
  posts: [],
  ids: [],
  userposts: [],
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [getUserInfo.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export { getUserInfo };

export default userSlice.reducer;
