import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/Login/LoginScreen';
import SignUpScreen from '../screens/Signup';
import MapScreen from '../screens/MapScreen';
import HomeTabNavigator from './HomeTabNavigator';
import HomeScreen from '../screens/home';
import DestinationSearch from '../screens/DestinationSearch';
import AddEvents from '../screens/AddEvents';
import MoreInformation from '../screens/MoreInformation';
import SettingsScreen from '../screens/Settings/SettingsScreen';

const Stack = createStackNavigator();
// Navigator, Screen, Group

function AuthNavigator() {
  console.log(Stack);
  return (
    <Stack.Navigator screenOptions={{}} initialRouteName={"LoginScreen"}>
      <Stack.Screen
        name={"SignUpScreen"}
        component={SignUpScreen}
        options={({route}) => ({
          // headerBackTitle: 'Back',
          headerBackTitleVisible: false,
          title: route.params.userId,
        })}
      />
      <Stack.Screen
        name={"LoginScreen"}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen name={ROUTES.REGISTER} component={Register} /> */}
      <Stack.Screen
        name={"Home"}
        component={HomeTabNavigator}
        options={{headerShown: false}}
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
          name="MoreInformation"
          component={MoreInformation}
          options={{ title: "MoreInformation" }}
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
    </Stack.Navigator>
  );
}

export default AuthNavigator;