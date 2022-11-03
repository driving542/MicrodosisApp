import HomeScreen from "./screens/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import PoemCardScreen from "./screens/PoemCardScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AboutScreen from "./screens/AboutScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import FullIndexScreen from "./screens/FullIndexScreen";
import FavoriteCarrouselScreen from "./screens/FavoriteCarrouselScreen";
import IndexShelf from "./screens/IndexShelf";
import IndexedScreen from "./screens/IndexedScreen";
//imports for redux
import { Provider } from "react-redux";
import { favoritesReducer } from "./features/favorites/favoritesSlice";
import { store } from "./redux/store";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Icon } from "react-native-elements";

const Drawer = createDrawerNavigator();

const iconStyle = {
  marginLeft: 10,
  color: "#fff",
  fontSize: 24,
};
const screenOptions = {
  headerStyle: {
    backgroundColor: "#FF760D",
  },
  headerTintColor: "#fff",
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
        component={FullIndexScreen}
        screenOptions={screenOptions}
        options={({ navigation }) => ({
          title: "Autoscopia",
          headerLeft: () => (
            <Icon
              name="chevron-left"
              type="font-awesome"
              iconStyle={{
                marginLeft: 10,
                color: "#fff",
                fontSize: 24,
              }}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const FullIndexScreenNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="FullIndex" screenOptions={screenOptions}>
      <Stack.Screen
        name="Autoscopia"
        component={FullIndexScreen}
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
          title: "Favoritos",
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
        name="FavoriteCarrouselScreen"
        component={FavoriteCarrouselScreen}
        options={({ navigation }) => ({
          title: "Favoritos",
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
        component={IndexShelf}
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
            drawerStyle={{ backgroundColor: "#fff" }}
            drawerType="back"
            drawerContentOptions={{
              activeBackgroundColor: "#FCD299",
              activeTintColor: "#575551",
              labelStyle: {
                fontFamily: "IBM-bold",
              },
            }}
          >
            <Drawer.Screen
              name="Home"
              component={HomeNavigator}
              options={{ Title: "Home" }}
            />
            <Drawer.Screen
              name="FullIndex"
              component={FullIndexScreenNavigator}
              options={{ title: "Autoscopia" }}
            />
            <Drawer.Screen
              name="IndexShelf"
              component={IndexNavigator}
              options={{ title: "Index" }}
            />
            <Drawer.Screen
              name="Favorites"
              component={FavoritesScreenNavigator}
              options={{ title: "Favorites" }}
            />
            <Drawer.Screen
              name="About"
              component={AboutScreenNavigator}
              options={{ title: "About me" }}
            />
          </Drawer.Navigator>
        </View>
      </NavigationContainer>
    </Provider>
  );
}
