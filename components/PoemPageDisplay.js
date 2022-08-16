import { POEMS } from "../shared/POEMS";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../features/favorites/favoritesSlice";
import { useState } from "react";
import { makeBookmark } from "../features/bookmark/bookmarksSlice";

const PoemPageDisplay = ({ item }) => {
  const dispatch = useDispatch();
  const favoritePoemPages = useSelector((state) => state.favoritePoems.ids);
  const poemIsFavorite = favoritePoemPages.includes(item.page);
  const bookmarkedPage = useSelector((state) => state.bookmarkedPoem.ids);
  const pageIsBookmarked = bookmarkedPage.includes(item.page);

  const changeFavoritesStatusHandler = () => {
    if (poemIsFavorite) {
      dispatch(removeFavorite({ id: item.page }));
    } else {
      dispatch(addFavorite({ id: item.page }));
    }
  };

  const changeBookmarkHandler = () => {
    dispatch(makeBookmark({ id: item.page }));
  };

  return (
    <View style={styles.view}>
      <View style={styles.textview}>
        <Text style={styles.text}>{item.subtitulo}</Text>
        <Text style={styles.text}>{item.cuerpo}</Text>
      </View>
      <View style={styles.poemicons}>
        <Icon
          name={pageIsBookmarked ? "bookmark" : "bookmark-o"}
          type="font-awesome"
          onPress={changeBookmarkHandler}
        />
        <Text>{item.page}</Text>
        <Icon
          name={poemIsFavorite ? "heart" : "heart-o"}
          type="font-awesome"
          onPress={changeFavoritesStatusHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#fff",
    flex: 1,
    width: Dimensions.get("window").width,
    display: "flex",
    flexDirection: "column",
    height: Dimensions.get("screen").length,
  },
  textview: {
    flex: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  viewtitulo: {
    backgroundColor: "#000",
    flex: 1,
    width: Dimensions.get("window").width,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: Dimensions.get("screen").length,
  },
  FlatListContainer: {
    marginVertical: 0,
  },
  text: {
    paddingHorizontal: "15%",
    paddingVertical: "15%",
    fontFamily: "IBM-regular",
  },
  titulo: {
    paddingTop: "10%",
    paddingHorizontal: "15%",
    color: "#fff",
    fontSize: 20,
    fontFamily: "IBM-italic",
  },
  poemicons: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default PoemPageDisplay;
