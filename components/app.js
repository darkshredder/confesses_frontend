import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostConfession from './post_confession/app';
import Home from './dashboard/app'
function HomeScreen() {
  return (<Home />);
}

function SettingsScreen() {
  return (
    <PostConfession />
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Feeds" component={HomeScreen} />
        <Tab.Screen name="Post Confession" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
