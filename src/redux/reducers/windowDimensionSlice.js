import { createSlice } from '@reduxjs/toolkit';

export const windowDimensionSlice = createSlice({
  name: 'windowDimension',
  initialState: {
    width: window.innerWidth,
    // height: window.innerHeight,
  },
  reducers: {
    resizeWidth: (state) => {
      state.width = window.innerWidth;
    },
    // resizeHeight: (state) => {
    //   state.height = state.innerHeight;
    // },
  },
});

export const { resizeWidth } = windowDimensionSlice.actions;

export default windowDimensionSlice.reducer;
