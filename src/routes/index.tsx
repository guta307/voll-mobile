import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pages/Login/page";

import Subscription from "../pages/Subscription/page";
import Tabs from "../tabs";

const Tab = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Subscription"
          component={Subscription}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
