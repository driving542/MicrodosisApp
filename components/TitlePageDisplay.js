import CustomCard from "../UI/CustomCard";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as Animatable from "react-native-animatable";

const TitlePageDisplay = ({ item }) => {
  return (
    <CustomCard>
      <View style={styles.viewtitulo}>
        <Text style={styles.titulo}>{item.titulo}</Text>
        <Animatable.Image
          animation="flash"
          iterationCount="infinite"
          duration={5000}
          source={item.imageWhite}
          accessibilityLabel="Outlined Shape"
          style={{
            height: 90,
            width: 90,
            marginLeft: 50,
            alignSelf: "flex-start",
          }}
        />
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
    justifyContent: "space-around",
    height: Dimensions.get("screen").length,
    alignItems: "flex-end",
  },
  titulo: {
    paddingHorizontal: "15%",
    color: "#FAFAFA",
    fontSize: 20,
    fontFamily: "IBM-bold-italic",
  },
});

export default TitlePageDisplay;
