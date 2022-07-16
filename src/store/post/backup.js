import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../apiServices';

// async requests
const getPosts = createAsyncThunk('posts/getPosts', async (page = '1') => {
  const response = await api.fetchPosts(page);
  return response.data;
});
const getOnePost = createAsyncThunk('posts/getOnePost', async (idPost) => {
  const response = await api.fetchPost(idPost);
  return response.data;
});
const getPostsByUser = createAsyncThunk('posts/getPostsByUser', async (idUser) => {
  const response = await api.fetchPostsByUser(idUser);
  return response.data;
});
const getPostsBySearch = createAsyncThunk('posts/getPostsBySearch', async (query) => {
  const response = await api.fetchPostsBySearch(query);
  return response.data;
});
const createPost = createAsyncThunk('posts/createPost', async (dataPost) => {
  const response = await api.createPost(dataPost);
  return response.data;
});
const likePost = createAsyncThunk('posts/likePost', async (idPost) => {
  const response = await api.likePost(idPost);
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
  reducers: {
    // definimos la accion (sin type porque se maneja internamente)
    getPosts2(state, action) {
      return {
        ...state,
        post: action.payload.posts,
        results: action.payload.result,
      };
    },
    createPost22(state, action) {
      // ahora el reducer que dispara esa accion
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    },
    updatePost2(state, action) {
      return {
        ...state,
        posts: state.posts.map((item) => (item._id === action.payload._id ? action.payload : item)),
      };
    },
    deletePost(state, action) {
      return {
        ...state,
        post: state.posts.filter((item) => item._id !== action.payload),
      };
    },
    loadingPosts(state, action) {
      return {
        ...state,
        loading: action.payload,
      };
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getPosts.pending, (state) => {
  //       state.loading = true;
  //     })
  //     .addCase(getPosts.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.posts = action.payload;
  //       state.error = null;
  //     })
  //     .addCase(getPosts.rejected, (state, action) => {
  //       state.loading = false;
  //       state.posts = [];
  //       state.error = action.error.message;
  //     });
  // },

  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload.posts;
      state.results = action.payload.result;
      state.error = null;
      // return [...action.payload];
    },
    [getPosts.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [getPostsBySearch.fulfilled]: (state, action) => {
      state.posts = [...action.payload];
    },
    [getPostsByUser.fulfilled]: (state, action) => {
      state.posts = [...action.payload];
    },
    [getOnePost.fulfilled]: (state, action) => {
      state.post = action.payload;
    },
  },
});

// exporto todas las acciones que permito en este slice
export const { loadingPosts } = postSlice.actions;
// exporto las acciones asyncronicas
export { getPosts, getOnePost, getPostsByUser, getPostsBySearch, likePost };

export default postSlice.reducer;
