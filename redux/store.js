import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../features/favorites/favoritesSlice";
import bookmarksReducer from "../features/bookmark/bookmarksSlice";

export const store = configureStore({
  reducer: {
    favoritePoems: favoritesReducer,
    bookmarkedPoem: bookmarksReducer,
  },
});
