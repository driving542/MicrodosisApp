import { Text, Image, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import CustomCard from "../UI/CustomCard";

const HomeScreen = ({ navigation }) => {
  return (
    <CustomCard>
      <Image source={require("../assets/images/label.gif")} />
      <Text style={styles.Text}>Majo Almeyra</Text>
      <Button
        title="Get started"
        buttonStyle={styles.buttonStyle}
        type="outline"
        titleStyle={styles.buttonTitleStyle}
        onPress={() => navigation.navigate("Autoscopia")}
      />
    </CustomCard>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontFamily: "IBM-regular",
    paddingHorizontal: 40,
    marginBottom: 20,
    fontSize: 15,
  },
  buttonStyle: {
    borderColor: "#000",
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
  buttonTitleStyle: {
    color: "#000",
    fontFamily: "IBM-italic",
  },
});

export default HomeScreen;
