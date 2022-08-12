import { configureStore } from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist'

export const store = configureStore({
  reducer: {
    // clicks: clicks
  },
});
