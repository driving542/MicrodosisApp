import { View, StyleSheet, Dimensions, Alert } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { titles } from "../shared/PoemsSlice";

const IndexScreen = () => {
  const navigation = useNavigation();
  const bookmarkedPage = useSelector((state) => state.bookmarkedPoem.ids);

  const bookmarkButtonHandler = () => {
    if (bookmarkedPage[0] === 0) {
      Alert.alert(
        "You have no bookmarks",
        "Click on the bookmark icon to add a bookmark."
      );
    } else {
      navigation.navigate("IndexedScreen", {
        initialPage: bookmarkedPage,
      });
    }
  };

  return (
    <View style={styles.view}>
      <Button
        buttonStyle={styles.buttonStyle}
        type="outline"
        titleStyle={styles.buttonTitleStyle}
        title={titles[1].titulo}
        onPress={() => {
          navigation.navigate("IndexedScreen", {
            initialPage: 2,
          });
        }}
      />
      <Button
        buttonStyle={styles.buttonStyle}
        type="outline"
        titleStyle={styles.buttonTitleStyle}
        title={titles[2].titulo}
        onPress={() => {
          navigation.navigate("IndexedScreen", {
            initialPage: 6,
          });
        }}
      />
      <Button
        buttonStyle={styles.buttonStyle}
        type="outline"
        titleStyle={styles.buttonTitleStyle}
        title={titles[3].titulo}
        onPress={() => {
          navigation.navigate("IndexedScreen", {
            initialPage: 9,
          });
        }}
      />
      <Button
        buttonStyle={styles.buttonStyle}
        type="outline"
        titleStyle={styles.buttonTitleStyle}
        title={titles[4].titulo}
        onPress={() => {
          navigation.navigate("IndexedScreen", {
            initialPage: 12,
          });
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
        // onPress={() => {
        //   navigation.navigate("IndexedScreen", {
        //     initialPage: bookmarkedPage,
        //   });
        // }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#FAFAFA",
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

export default IndexScreen;
