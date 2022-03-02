import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { SearchRepo } from "../screens/SearchRepo";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator 
      initialRouteName="Search"
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: 'beside-icon',
        // tabBarShowLabel: false
      }}
    >
      <Screen name="Likes" component={SearchRepo} />
      <Screen name="Search" component={SearchRepo} />
      <Screen name="History" component={SearchRepo} />
    </Navigator>
  );
}
