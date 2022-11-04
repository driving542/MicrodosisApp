import HomeScreen from "./screens/HomeScreen";
import BookContentScreen from "./screens/BookContentScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import FavoriteDisplayScreen from "./screens/FavoriteDisplayScreen";
import IndexScreen from "./screens/IndexScreen";
import IndexedScreen from "./screens/IndexedScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "react-native-elements";
//redux
import { Provider } from "react-redux";
import { store } from "./redux/store";
//fonts
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Drawer = createDrawerNavigator();

const drawerContentOptions = {
  activeBackgroundColor: "#FCD299",
  activeTintColor: "#575551",
  labelStyle: {
    fontFamily: "IBM-bold",
  },
};

const iconStyle = {
  marginLeft: 10,
  color: "#FAFAFA",
  fontSize: 24,
};
const screenOptions = {
  headerStyle: {
    backgroundColor: "#FF760D",
  },
  headerTintColor: "#FAFAFA",
  headerTitleStyle: {
    fontFamily: "IBM-bold",
  },
  headerTitleAlign: "left",
};

const HomeNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: "Autoscopia",
          headerLeft: () => (
            <Icon
              name="chevron-left"
              type="font-awesome"
              iconStyle={iconStyle}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Autoscopia"
        component={BookContentScreen}
        screenOptions={screenOptions}
        options={({ navigation }) => ({
          title: "Autoscopia",
          headerLeft: () => (
            <Icon
              name="chevron-left"
              type="font-awesome"
              iconStyle={iconStyle}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const BookContentScreenNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="BookContent"
      screenOptions={screenOptions}
    >
      <Stack.Screen
        name="Autoscopia"
        component={BookContentScreen}
        options={({ navigation }) => ({
          title: "Autoscopia",
          headerLeft: () => (
            <Icon
              name="chevron-left"
              type="font-awesome"
              iconStyle={iconStyle}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const FavoritesScreenNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={({ navigation }) => ({
          title: "Favorites",
          headerLeft: () => (
            <Icon
              name="chevron-left"
              type="font-awesome"
              iconStyle={iconStyle}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
      <Stack.Screen
        name="FavoriteDisplayScreen"
        component={FavoriteDisplayScreen}
        options={({ navigation }) => ({
          title: "Favorites",
          headerLeft: () => (
            <Icon
              name="chevron-left"
              type="font-awesome"
              iconStyle={iconStyle}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const AboutScreenNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={({ navigation }) => ({
          title: "About",
          headerLeft: () => (
            <Icon
              name="chevron-left"
              type="font-awesome"
              iconStyle={iconStyle}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const IndexNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Index"
        component={IndexScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Icon
              name="chevron-left"
              type="font-awesome"
              iconStyle={iconStyle}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
      <Stack.Screen
        name="IndexedScreen"
        component={IndexedScreen}
        options={({ navigation }) => ({
          title: "Autoscopia",
          headerLeft: () => (
            <Icon
              name="chevron-left"
              type="font-awesome"
              iconStyle={iconStyle}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const ContactScreenNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Contact"
        component={ContactScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Icon
              name="chevron-left"
              type="font-awesome"
              iconStyle={iconStyle}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
      {/* <Stack.Screen
          name="IndexedScreen"
          component={IndexedScreen}
          options={({ navigation }) => ({
            title: "Autoscopia",
            headerLeft: () => (
              <Icon
                name="chevron-left"
                type="font-awesome"
                iconStyle={iconStyle}
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        /> */}
    </Stack.Navigator>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    "IBM-bold": require("./assets/fonts/IBMPlexMono-SemiBold.ttf"),
    "IBM-bold-italic": require("./assets/fonts/IBMPlexMono-SemiBoldItalic.ttf"),
    "IBM-italic": require("./assets/fonts/IBMPlexMono-Italic.ttf"),
    "IBM-regular": require("./assets/fonts/IBMPlexMono-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <View
          style={{
            flex: 1,
            paddingTop: 50,
          }}
        >
          <Drawer.Navigator
            initialRouteName="Home"
            drawerStyle={{ backgroundColor: "#FAFAFA" }}
            drawerType="back"
            drawerContentOptions={drawerContentOptions}
          >
            <Drawer.Screen
              name="Home"
              component={HomeNavigator}
              options={{ Title: "Home" }}
            />
            <Drawer.Screen
              name="BookContent"
              component={BookContentScreenNavigator}
              options={{ title: "Autoscopia" }}
            />
            <Drawer.Screen
              name="IndexScreen"
              component={IndexNavigator}
              options={{ title: "Index" }}
            />
            <Drawer.Screen
              name="FavoritesScreenNavigator"
              component={FavoritesScreenNavigator}
              options={{ title: "Favorites" }}
            />
            <Drawer.Screen
              name="About"
              component={AboutScreenNavigator}
              options={{ title: "About me" }}
            />
            <Drawer.Screen
              name="Contact"
              component={ContactScreenNavigator}
              options={{ title: "Contact" }}
            />
          </Drawer.Navigator>
        </View>
      </NavigationContainer>
    </Provider>
  );
}
