import { ScrollView, Text, StyleSheet, Linking, Alert } from "react-native";
import { Button, Card, Icon } from "react-native-elements";
import * as MailComposer from "expo-mail-composer";
import { View } from "react-native-animatable";
import { useCallback } from "react";
import CustomCard from "../UI/CustomCard";
import * as Animatable from "react-native-animatable";

const ContactScreen = () => {
  const sendMail = () => {
    MailComposer.composeAsync({
      recipients: ["autoscopia@gmail.com"],
      subject: "Hi",
      body: "Hello, ",
    });
  };

  const URL = "https://instagram.com/autoescopia";

  const OpenURLButton = ({ url }) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Can't open this URL: ${url}`);
      }
    }, [url]);
    return (
      <Button
        title="autoscopia"
        onPress={handlePress}
        style={style.buttonStyle}
        titleStyle={style.buttonTitleStyle}
        type="clear"
        icon={<Icon name="instagram" type="font-awesome" style={style.icon} />}
      />
    );
  };

  return (
    <CustomCard>
      <View>
        <Text style={style.title}>Contact me</Text>
        <>
          <OpenURLButton url={URL} />
          <Button
            title="Send email"
            icon={
              <Icon name="envelope-o" type="font-awesome" style={style.icon} />
            }
            buttonStyle={style.buttonStyle}
            type="clear"
            titleStyle={style.buttonTitleStyle}
            onPress={() => sendMail()}
          />
        </>
      </View>
      <View>
        <Animatable.Image
          animation="pulse"
          iterationCount="infinite"
          source={require("../assets/images/day.png")}
          accessibilityLabel="Outlined sun"
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
  title: {
    fontFamily: "IBM-bold",
    paddingHorizontal: 40,
    marginBottom: 20,
    fontSize: 20,
  },
  buttonStyle: {
    borderColor: "#000",
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: "#fafafa",
    marginVertical: 5,
  },
  buttonTitleStyle: {
    color: "#000",
    fontFamily: "IBM-italic",
  },
  icon: {
    paddingRight: "10%",
  },
});
export default ContactScreen;
