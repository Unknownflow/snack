import * as React from 'react';
import { Text, View, StyleSheet  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from 'react-native-vector-icons';

import HomeScreen from './components/HomeScreen';
import Checklist from './components/Checklist';
import LocationTracker from './components/LocationTracker';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            //Set the icon based on which route it is (name of the tab)
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Checklist') {
              iconName = 'list';
            } else if (route.name === 'Location') {
              iconName = 'compass'
            }

            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Checklist" component={Checklist} />
        <Tab.Screen name="Location Tracker" component={LocationTracker} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

