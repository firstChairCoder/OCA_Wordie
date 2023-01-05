import type { ComponentProps } from "react";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import { GameScreen } from "../screens/GameScreen";

const { Navigator, Screen } = createBottomTabNavigator();
export default function AppNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: "#ECE",
        tabBarActiveTintColor: "purple"
      }}
    >
      <Screen
        name={"Game"}
        component={GameScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="games" color={color} />
        }}
      />
    </Navigator>
  );
}

function TabBarIcon(props: {
  name: ComponentProps<typeof MaterialIcons>["name"];
  color: string;
}) {
  return <MaterialIcons size={24} style={{ marginBottom: -4 }} {...props} />;
}
