import { Tabs } from "expo-router";
import React from "react";
import {
  MaterialIcons,
  AntDesign,
  Ionicons,
  Fontisto,
} from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      // initialRouteName="cabins"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#F4ECE1",
        tabBarInactiveTintColor: "#B7C7D7",
        tabBarStyle: {
          backgroundColor: "#1B2631",
          borderTopColor: "transparent",
          paddingBottom: 10,
          height: 70,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="cabins"
        options={{
          title: "Cabins",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              size={24}
              name="cabin"
              color={focused ? "#C69963" : "#B7C7D7"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="reservations"
        options={{
          title: "Reservations",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Fontisto
              size={24}
              name="calendar"
              color={focused ? "#C69963" : "#B7C7D7"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name="person"
              color={focused ? "#C69963" : "#B7C7D7"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About us",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <AntDesign
              size={24}
              name="infocirlce"
              color={focused ? "#C69963" : "#B7C7D7"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name="settings"
              color={focused ? "#C69963" : "#B7C7D7"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
