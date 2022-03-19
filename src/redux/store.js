import { configureStore } from '@reduxjs/toolkit';
import windowDimensionReducer from './reducers/windowDimensionSlice';
import videoContentReducer from './reducers/videoContentSlice';

export default configureStore({
  reducer: {
    windowDimension: windowDimensionReducer,
    videoContent: videoContentReducer,
  },
});
