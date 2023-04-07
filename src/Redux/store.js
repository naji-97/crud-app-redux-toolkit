import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // posts: postsReducer
  },
});

export default store;
