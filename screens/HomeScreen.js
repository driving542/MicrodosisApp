import { Text, Image } from "react-native";
import CustomCard from "../UI/CustomCard";

const HomeScreen = ({ navigation }) => {
  return (
    <CustomCard>
      <Image source={require("../assets/images/label.gif")} />
      <Text
        style={{
          fontFamily: "IBM-regular",
          paddingHorizontal: 40,
          marginBottom: 20,
          fontSize: 15,
        }}
      >
        Majo Almeyra
      </Text>
    </CustomCard>
  );
};

export default HomeScreen;
