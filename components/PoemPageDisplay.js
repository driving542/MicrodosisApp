import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../features/favorites/favoritesSlice";
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
        <Text style={styles.text1}>{item.subtitulo}</Text>
        <Text style={styles.text2}>{item.cuerpo}</Text>
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
    flex: 1,
    backgroundColor: "#FAFAFA",
    width: Dimensions.get("window").width,
    height: Dimensions.get("screen").length,
    display: "flex",
    flexDirection: "column",
  },
  textview: {
    flex: 5,
    display: "flex",
    flexDirection: "column",
  },
  text1: {
    paddingHorizontal: "15%",
    paddingVertical: "15%",

    fontFamily: "IBM-regular",
    fontSize: 0.045 * Dimensions.get("window").width,
  },
  text2: {
    paddingHorizontal: "15%",
    fontFamily: "IBM-regular",
    fontSize: 0.04 * Dimensions.get("window").width,
  },
  poemicons: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    paddingBottom: "8%",
  },
});

export default PoemPageDisplay;
