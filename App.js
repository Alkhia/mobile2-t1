import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PaperProvider } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

import AppNavigator from "./src/navigation/AppNavigator"; // Stack com todos os CRUDs
import Dashboard from "./src/screens/Dashboard";
import Settings from "./src/screens/Settings";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              let iconName;
              switch (route.name) {
                case "CRUDs":
                  iconName = "list";
                  break;
                case "Dashboard":
                  iconName = "bar-chart";
                  break;
                case "Config":
                  iconName = "settings";
                  break;
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#007AFF",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="CRUDs" component={AppNavigator} />
          <Tab.Screen name="Dashboard" component={Dashboard} />
          <Tab.Screen name="Config" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
