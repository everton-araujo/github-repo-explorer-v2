import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';
import { useTheme } from "styled-components";

import { SearchRepo } from "../screens/SearchRepo";
import { Favorites } from "../screens/Favorites";
import { History } from "../screens/History";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator 
      initialRouteName="Search"
      screenOptions={{
        headerShown: false,
        // tabBarLabelPosition: 'beside-icon',
        // tabBarShowLabel: false
        tabBarActiveTintColor: '#FFF',
        tabBarInactiveTintColor: '#000',
        tabBarStyle: { 
          backgroundColor: theme.colors.tab_container,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        }
      }}
    >

      <Screen 
        name="Likes" 
        component={Favorites} 
        options={{
          tabBarIcon: () => 
            <Feather
              name="heart"
              size={24}
              color='red'
            />
        }}
      />

      <Screen 
        name="Search" 
        component={SearchRepo} 
        options={{
          tabBarIcon: () => 
            <Feather
              name="search"
              size={24}
              color='red'
            />
        }}
      />

      <Screen
        name="History"  
        component={History} 
        options={{
          tabBarIcon: () => 
            <Feather
              name="archive"
              size={24}
              color='red'
            />
        }}
      />
    </Navigator>
  );
}
