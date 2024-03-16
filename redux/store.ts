// redux/store.ts
//import { configureStore } from '@reduxjs/toolkit';
import savedPostsReducer from './slices/savedpostslices';

export const store = savedPostsReducer({
  reducer: {
    savedPosts: savedPostsReducer,
    // Add other reducers here if needed
  },
});
