import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import MapScreen from "../screens/MapScreen";
import HomeScreen from "../screens/home";
import DestinationSearch from "../screens/DestinationSearch";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import { PureComponent } from "react/cjs/react.production.min";
import SaveActivity from "../screens/SaveActivity";
import MoreInformation from "../screens/MoreInformation";
import AddEvents from "../screens/AddEvents";

const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
  <TouchableOpacity style={{ marginTop: 10 }} onPress={() => props.onPress()}>
    <FontAwesome name={props.iconName} size={25} color="#FFF" />
  </TouchableOpacity>;
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#000",
        inactiveTintColor: "#FFF",
      }}
      screenOptions={{
        tabBarStyle: {
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          backgroundColor: "#4AA5B0",
          height: 80,
          paddingTop: 10,
          position: "absolute",
        },
        tabStyle: {
          paddingTop: 100,
        },
      }}
    >
      <Tab.Screen
        name={"Sialta"}
        component={MapScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"Messages"}
        // component={DestinationSearch}
        component={MoreInformation}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="bell-o" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={" "}
        showLabel={false}
        component={AddEvents}
        tabBarOptions={{
          activeTintColor: "#000",
          inactiveTintColor: "#FFF",
        }}
        options={{
          headerShown: false,
          // tabBarIcon: ({color}) => (
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ marginTop: -50 }}
              source={require("../../assets/images/Icons/More.png")}
            />
            // <FontAwesome5 name="bell-o" size={25} color={color} style={{marginTop: -50, backgroundColor: '#000', borderRadius: 30}}/>
          ),
        }}
      />
      {/* <Tab.Screen
        name={'Test'}
        component={DestinationSearch}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="bell-o" size={25} color={color} />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton { ...props} iconName="bell-o" />
          )
        }}
      /> */}

      <Tab.Screen
        name={"Sauvegarde"}
        component={SaveActivity}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="heart-o" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"Profil"}
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-o" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
