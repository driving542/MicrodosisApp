import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { POEMS } from "../shared/POEMS";
import CustomCard from "../UI/CustomCard";
import * as Animatable from "react-native-animatable";
import { SwipeRow } from "react-native-swipe-list-view";
import { removeFavorite } from "../features/favorites/favoritesSlice";

const FavoritesScreen = ({ navigation }) => {
  const favoritePoemPages = useSelector((state) => state.favoritePoems.ids);
  const dispatch = useDispatch();
  const bookmarkedPage = useSelector((state) => state.bookmarkedPoem.ids);

  const favoritePoems = POEMS.filter((poem) =>
    favoritePoemPages.includes(poem.page)
  );

  const renderFavoritePoem = ({ item: poem }) => {
    return (
      <SwipeRow rightOpenValue={-100}>
        <View style={styles.deleteView}>
          <TouchableOpacity
            style={styles.deleteTouchable}
            onPress={() => {
              Alert.alert(
                "Delete Favorite?",
                "Sure ?",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Not deleted"),
                    style: "cancel",
                  },
                  {
                    text: "OK",
                    onPress: () => dispatch(removeFavorite({ id: poem.page })),
                  },
                ],
                { cancelable: false }
              );
            }}
          >
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        </View>
        <View>
          <ListItem
            onPress={() => {
              navigation.navigate("FavoriteDisplayScreen", {
                poem: poem,
              });
            }}
          >
            <Avatar rounded source={poem.image} />
            <ListItem.Content>
              <ListItem.Subtitle>{poem.page}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </View>
      </SwipeRow>
    );
  };

  if (favoritePoems.length === 0) {
    return (
      <CustomCard>
        <View style={styles.textContainer}>
          <Text style={styles.textName}>You have no favorites yet. </Text>
          <Text style={styles.text}>Click on the heart to see them here.</Text>
        </View>
        <View>
          <Animatable.Image
            animation="pulse"
            iterationCount="infinite"
            source={require("../assets/images/circle.png")}
            accessibilityLabel="Outlined Circle"
            style={{
              height: 90,
              width: 90,
            }}
          />
        </View>
      </CustomCard>
    );
  } else {
    return (
      <View>
        <FlatList
          data={favoritePoems}
          renderItem={renderFavoritePoem}
          keyExtractor={(poem) => poem.page.toString()}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "IBM-regular",
    paddingHorizontal: 40,
    marginBottom: 20,
    fontSize: 15,
  },
  textName: {
    fontFamily: "IBM-bold",
    paddingHorizontal: 40,
    marginBottom: 20,
    fontSize: 20,
  },
  deleteView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
  },
  deleteTouchable: {
    backgroundColor: "#F54D1B",
    height: "100%",
    justifyContent: "center",
  },
  deleteText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    width: 100,
    fontFamily: "IBM-bold",
  },
});

export default FavoritesScreen;
