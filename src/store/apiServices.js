import { myAxios } from '../services/interceptorsMiddleware';
/**
 * All calls to api
 */

// posts
export const fetchPost = (id) => myAxios.get(`/posts/${id}`);
export const fetchPosts = (page) => myAxios.get(`/posts?page=${page}`);
export const fetchPostsBySearch = (searchQuery) =>
  myAxios.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createPost = (newPost) => myAxios.post('/posts', newPost);
export const likePost = (id) => myAxios.patch(`/posts/${id}/like`);
export const unlikePost = (id) => myAxios.patch(`/posts/${id}/unlike`);
export const updatePost = (id, updatedPost) => myAxios.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => myAxios.delete(`/posts/${id}`);
// profile
export const fetchUserProfile = (identifier) => myAxios.get(`/users/${identifier}`);
export const fetchPostsByUser = (name) => myAxios.get(`/posts/user?name=${name}`);
// comments
export const comment = (content, id) => myAxios.post(`/posts/${id}/comment`, { content });
