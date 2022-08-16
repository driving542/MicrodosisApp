import { View, Text, Image, StyleSheet } from "react-native";
import CustomCard from "../UI/CustomCard";
import * as Animatable from "react-native-animatable";

const AboutScreen = () => {
  return (
    <CustomCard>
      <View style={style.textContainer}>
        <Text style={style.textName}>Hi, I'm Majo.</Text>
        <Text style={style.text}>
          I recently got into web development and decided to build an app for my
          latest book. Enjoy!
        </Text>
      </View>
      <View>
        <Animatable.Image
          animation="pulse"
          iterationCount="infinite"
          source={require("../assets/images/rhombus.png")}
          accessibilityLabel="Outlined Rhombus"
          style={{
            height: 90,
            width: 90,
          }}
        />
      </View>
    </CustomCard>
  );
};

const style = StyleSheet.create({
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
});

export default AboutScreen;
