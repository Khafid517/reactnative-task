import * as React from "react";

//Import Navigation Container
import { NavigationContainer } from "@react-navigation/native";

// Import Stack Navigation
import { createStackNavigator } from "@react-navigation/stack";

//Import Bottom Tab Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

//Import Icon
import { Ionicons } from "@expo/vector-icons"


// Import Theme Native Base
import { useTheme } from "native-base";

// Import Screen
import Calculator from "./src/screens/Calculator"
import Home from "./src/screens/Home";
import ToDo from "./src/screens/ToDo";

// Create Stack Navigation
const Stack = createStackNavigator();

//Create Bottom Tab Navigation
const Tab = createBottomTabNavigator()

// Create Component Bottom Tab Navigation
function MyTab() {
  const theme = useTheme()

  return (
    <Tab.Navigator
      initialRouteName="ToDo"
      screenOptions={({ route }) => ({
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: theme.colors.primary["600"] },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline"
          } else if (route.name == "Calculator") {
            iconName = focused ? "calculator" : "calculator-outline"
          } else if (route.name == "ToDo") {
            iconName = focused ? "list" : "list-outline"
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: theme.colors.primary["600"],
        tabBarInactiveTintColor: "gray"
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Calculator" component={Calculator} />
      <Tab.Screen name="ToDo" component={ToDo} />
    </Tab.Navigator>
  )
}

export default function Container() {
  // Init Theme
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MyTab}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
