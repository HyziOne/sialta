// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import HomeScreen from './src/screens/home'
// import DestinationSearch from './src/screens/DestinationSearch'
// import SearchResults from './src/screens/SearchResults/index.js'
// import MapScreen from './src/screens/MapScreen'
// import Router from './src/navigation/Router'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <View >
//         <Router></Router>
//       {/* <HomeScreen></HomeScreen> */}
//       {/* <DestinationSearch></DestinationSearch> */}
//       {/* <SearchResults></SearchResults> */}
//       {/* <MapScreen></MapScreen> */}
//     </View>
//   );
// }

import React from "react";
import { View, Text, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/home";
import DestinationSearch from "./src/screens/DestinationSearch";
import SearchResultsPage from "./src/screens/SearchResults";
import MapScreen from "./src/screens/MapScreen";
import HomeTabNavigator from "./src/navigation/HomeTabNavigator";
// import LoginScreen from "./src/screens/Login/LoginScreen";
import SaveActivity from "./src/screens/SaveActivity";
import MoreInformation from "./src/screens/MoreInformation";
import SettingsScreen from "./src/screens/Settings/SettingsScreen";
import SignUpScreen from "./src/screens/Signup";
import LoginScreen from "./src/screens/Login/LoginScreen";
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
import AuthNavigator from './src/navigation/AuthNavigator';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <AuthNavigator />

      {/* <Stack.Navigator>
        
        <Stack.Screen
          name={"home"}
          component={HomeTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Destination"
          component={DestinationSearch}
          options={{ title: "Destination" }}
        />
        <Stack.Screen
          name="Search"
          component={SaveActivity}
          options={{ title: "SaveActivity" }}
        />
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MoreInformation"
          component={MoreInformation}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{ headerShown: true }}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;
