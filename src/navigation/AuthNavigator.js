import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/Login/LoginScreen';
import SignUpScreen from '../screens/Signup';
import MapScreen from '../screens/MapScreen';
import HomeTabNavigator from './HomeTabNavigator';
import HomeScreen from '../screens/home';
import DestinationSearch from '../screens/DestinationSearch';
import MoreInformation from '../screens/MoreInformation';
import AddEvents from '../screens/AddEvents';
import SaveActivity from '../screens/SaveActivity';

const Stack = createStackNavigator();
// Navigator, Screen, Group

function AuthNavigator() {
  console.log(Stack);
  return (
    <Stack.Navigator screenOptions={{}} initialRouteName={"LoginScreen"}>
      <Stack.Screen
        name={"LoginScreen"}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={"SignUpScreen"}
        component={SignUpScreen}
        options={{headerShown: false}}
        // options={({route}) => ({
        //   // headerBackTitle: 'Back',
        //   headerBackTitleVisible: false,
        //   title: route.params.userId,
        // })}
      />

      <Stack.Screen
        name={"MapScreen"}
        component={HomeTabNavigator}
        options={{headerShown: false}}
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
        {/* <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{ title: "MapScreen" }}
        /> */}
        <Stack.Screen
          name="MoreInformation"
          component={MoreInformation}
          options={{ title: "Plus d'informations" }}
        />
         <Stack.Screen
          name="SaveActivity"
          component={SaveActivity}
          options={{ title: "Vos activités" }}
        />
    </Stack.Navigator>
  );
}

export default AuthNavigator;