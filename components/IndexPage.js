import { View, StyleSheet, Dimensions, Alert } from "react-native";
import { useSelector } from "react-redux";
import { Button } from "react-native-elements";
import { titles } from "../shared/PoemsSlice";

const IndexPage = ({ setIndex }) => {
  const bookmarkedPage = useSelector((state) => state.bookmarkedPoem.ids);

  const bookmarkButtonHandler = () => {
    if (bookmarkedPage[0] === 0) {
      Alert.alert(
        "You have no bookmarks",
        "Click on the bookmark icon to add a bookmark."
      );
    } else {
      setIndex(bookmarkedPage);
    }
  };

  return (
    <View style={styles.flatListContainer}>
      <Button
        buttonStyle={styles.buttonStyle}
        type="outline"
        titleStyle={styles.buttonTitleStyle}
        title={titles[1].titulo}
        onPress={() => {
          setIndex(titles[1].page);
        }}
      />
      <Button
        buttonStyle={styles.buttonStyle}
        type="outline"
        titleStyle={styles.buttonTitleStyle}
        title={titles[2].titulo}
        onPress={() => {
          setIndex(titles[2].page);
        }}
      />
      <Button
        buttonStyle={styles.buttonStyle}
        type="outline"
        titleStyle={styles.buttonTitleStyle}
        title={titles[3].titulo}
        onPress={() => {
          setIndex(titles[3].page);
        }}
      />
      <Button
        buttonStyle={styles.buttonStyle}
        type="outline"
        titleStyle={styles.buttonTitleStyle}
        title={titles[4].titulo}
        onPress={() => {
          setIndex(titles[4].page);
        }}
      />
      <Button
        buttonStyle={styles.buttonStyle}
        type="outline"
        titleStyle={styles.buttonTitleStyle}
        title="My Bookmark"
        icon={{
          name: "bookmark-o",
          type: "font-awesome",
          color: "#000",
          paddingHorizontal: 10,
        }}
        onPress={bookmarkButtonHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    marginVertical: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("screen").length,
    flex: 0.8,
  },
  buttonStyle: {
    borderColor: "#000",
    borderWidth: 1,
    paddingVertical: 15,
    margin: 5,
  },
  buttonTitleStyle: {
    color: "#000",
    fontFamily: "IBM-italic",
  },
});

export default IndexPage;
