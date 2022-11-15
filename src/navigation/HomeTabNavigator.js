import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import MapScreen from '../screens/MapScreen';
import HomeScreen from '../screens/home';
import DestinationSearch from '../screens/DestinationSearch';


const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
      }}>
      <Tab.Screen
        name={'Sauvegarde'}
        component={HomeScreen}
        options={{headerShown: false,
          tabBarIcon: ({color}) => (
            <FontAwesome name="heart-o" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Sialta'}
        component={MapScreen}
        options={{headerShown: false,
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="airbnb" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Messages'}
        component={DestinationSearch}
        options={{headerShown: false,
          tabBarIcon: ({color}) => (
            <Feather name="message-square" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;