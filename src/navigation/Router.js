import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home";
import DestinationSearch from "../screens/DestinationSearch";
import SearchResultsPage from "../screens/SearchResults";
import MapScreen from "../screens/MapScreen";
import MoreInformation from "../screens/MoreInformation";
import AddEvents from "../screens/AddEvents";
import SignUpScreen from "../screens/Signup";
import LoginScreen from "../screens/Login/LoginScreen";
import HomeTabNavigator from "./HomeTabNavigator";
import SaveActivity from "../screens/SaveActivity";

const Stack = createNativeStackNavigator();
const OldStack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"SignUpScreen"}
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeTabNavigator"
          component={HomeTabNavigator}
          options={{ title: "HomeTabNavigator" }}
        />
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Destination"
          component={DestinationSearch}
          options={{ title: "Destination" }}
        />
        <Stack.Screen
          name="Search"
          component={AddEvents}
          options={{ title: "AddEvents" }}
        />
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{ title: "MapScreen" }}
        />
        <Stack.Screen
          name="MoreInformation"
          component={MoreInformation}
          options={{ title: "MoreInformation" }}
        />
        <Stack.Screen
          name="SaveActivity"
          component={SaveActivity}
          options={{ title: "SaveActivity" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
