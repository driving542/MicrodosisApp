import { createSlice } from "@reduxjs/toolkit";

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState: {
    ids: [0],
  },
  reducers: {
    makeBookmark: (state, action) => {
      state.ids.splice(0, 1, action.payload.id);
    },
  },
});

export default bookmarksSlice.reducer;
export const makeBookmark = bookmarksSlice.actions.makeBookmark;
