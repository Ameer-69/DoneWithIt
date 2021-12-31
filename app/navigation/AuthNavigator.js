import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" componen={WelcomeScreen} />
      <Stack.Screen name="Login" componen={LoginScreen} />
      <Stack.Screen name="Register" componen={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
