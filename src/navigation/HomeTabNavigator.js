import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import MapScreen from '../screens/MapScreen';
import HomeScreen from '../screens/home';
import DestinationSearch from '../screens/DestinationSearch';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import { PureComponent } from 'react/cjs/react.production.min';
import PocMaker from '../screens/Poc';
import SaveActivity from '../screens/SaveActivity';
import MonPoc from '../screens/Poc';


const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
  return (
    <Tab.Navigator 
        tabBarOptions={{
        activeTintColor: '#EF4124',
        inactiveTintColor: '#FFF',
      }}
      screenOptions={{
        tabBarStyle: {
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          backgroundColor: '#4AA5B0',
          height: 80,
          paddingTop: 10,
          position: 'absolute',
        },
        tabStyle: {
          paddingTop: 100,
        }
      }}

      >
      <Tab.Screen
        name={'Sialta'}
        component={MapScreen}
        options={{headerShown: false,
          tabBarIcon: ({color}) => (
            <FontAwesome name="home" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Messages'}
        // component={DestinationSearch}
        component={MonPoc}
        options={{headerShown: false,
          tabBarIcon: ({color}) => (
            <FontAwesome name="bell-o" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Sauvegarde'}
        component={SaveActivity}
        options={{headerShown: false,
          tabBarIcon: ({color}) => (
            <FontAwesome name="heart-o" size={25} color={color} />
          ),
        }}
      />      
      <Tab.Screen
        name={'Profil'}
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <FontAwesome name="user-o" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;