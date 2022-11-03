import { View, StyleSheet, Dimensions } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const IndexShelf = ({ route }) => {
  const navigation = useNavigation();
  const bookmarkedPage = useSelector((state) => state.bookmarkedPoem.ids);

  return (
    <View style={styles.View}>
      <Button
        buttonStyle={styles.buttonStyle}
        type="outline"
        titleStyle={styles.buttonTitleStyle}
        title="Horas que"
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
        title="Círculos"
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
        title="Días que"
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
        title="Rombos"
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
        onPress={() => {
          navigation.navigate("IndexedScreen", {
            initialPage: bookmarkedPage,
          });
          console.log("Button pressed!");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    flex: 1,
    backgroundColor: "#fff",
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

export default IndexShelf;
