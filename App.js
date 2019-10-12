import React from 'react';
import { createAppContainer } from 'react-navigation';
import{ createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import WaterScreen from './water';
import Ferriscreen from './ferris';



const tabNavigator = createBottomTabNavigator({

  Ferris:{ screen: Ferriscreen,
    navigationOptions: {
      tabBarLabel: 'Ferris Wheel',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-settings" color={tintColor} size={22} />
      )
    }
  },
  
  Water: { screen: WaterScreen,
    navigationOptions: {
      tabBarLabel: 'Water',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-heart" color={tintColor} size={22} />
      )
    }

  },

});

export default createAppContainer (tabNavigator)