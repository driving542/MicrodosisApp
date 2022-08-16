import { View } from "react-native";

const CustomCard = (props) => {
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
        margin: "auto",
        alignItems: "center",
      }}
    >
      {props.children}
    </View>
  );
};

export default CustomCard;
