import CustomCard from "../UI/CustomCard";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const TitlePageDisplay = ({ item }) => {
  return (
    <CustomCard>
      <View style={styles.viewtitulo}>
        <Text style={styles.titulo}>{item.titulo}</Text>
      </View>
    </CustomCard>
  );
};

const styles = StyleSheet.create({
  viewtitulo: {
    backgroundColor: "#000",
    flex: 1,
    width: Dimensions.get("window").width,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: Dimensions.get("screen").length,
  },
  titulo: {
    paddingTop: "10%",
    paddingHorizontal: "15%",
    color: "#fff",
    fontSize: 20,
    fontFamily: "IBM-italic",
  },
});

export default TitlePageDisplay;
