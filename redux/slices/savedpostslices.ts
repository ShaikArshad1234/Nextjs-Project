// redux/slices/savedPostsSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const savedPostsSlice = createSlice({
  name: 'savedPosts',
  initialState: [] as number[], // array of post IDs
  reducers: {
    addSavedPost: (state, action) => {
      state.push(action.payload);
    },
    removeSavedPost: (state, action) => {
      return state.filter(id => id !== action.payload);
    },
  },
});

export const { addSavedPost, removeSavedPost } = savedPostsSlice.actions;
export default savedPostsSlice.reducer;
