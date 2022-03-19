import { createSlice } from '@reduxjs/toolkit';

export const videoContentSlice = createSlice({
  name: 'videoContent',
  initialState: {
    video: null,
  },
  reducers: {
    updateVideo: (state, action) => {
      state.video = action.payload;
    },
  },
});

export const { updateVideo } = videoContentSlice.actions;

export default videoContentSlice.reducer;
