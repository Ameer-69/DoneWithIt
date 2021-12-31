import React from "react";
import { Button, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

import Icon from "./app/components/Icon";
import defaultStyles from "./app/config/colors";
import AuthNavigator from "./app/navigation/AuthNavigator";

// const Tab = createBottomTabNavigator();
// const BottomTabNavigator = () => (
//   <Tab.Navigator>
//     <Tab.Screen
//       name="Feed"
//       options={{
//         tabBarIcon: () => {
//           return (
//             <Icon
//               name="home"
//               size={50}
//               iconColor={defaultStyles.primary}
//               backgroundColor={defaultStyles.white}
//             />
//           );
//         },
//       }}
//       component={ListingsScreen}
//     />
//     <Tab.Screen
//       name="listing"
//       options={{
//         tabBarIcon: () => {
//           return (
//             <Icon
//               name="playlist-plus"
//               size={50}
//               iconColor={defaultStyles.primary}
//               backgroundColor={defaultStyles.white}
//             />
//           );
//         },
//       }}
//       component={ListingEditScreen}
//     />
//     <Tab.Screen
//       name="Account"
//       options={{
//         tabBarIcon: () => {
//           return (
//             <Icon
//               name="account"
//               size={50}
//               iconColor={defaultStyles.primary}
//               backgroundColor={defaultStyles.white}
//             />
//           );
//         },
//       }}
//       component={AccountScreen}
//     />
//   </Tab.Navigator>
// );

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
// const Link = () => {
//   const navigation = useNavigation();

//   return (
//     <Button
//       title="Click"
//       onPress={() => {
//         navigation.navigate("TweetDetails", { id: 1 });
//       }}
//     />
//   );
// };

// const Tweets = () => (
//   <Screen>
//     <Text>Tweets</Text>
//     <Link />
//   </Screen>
// );

// const TweetDetails = ({ route }) => {
//   return (
//     <Screen>
//       <Text>Tweet Details {route.params.id}</Text>
//     </Screen>
//   );
// };

// const Stack = createStackNavigator();

// const StackNavigator = () => (
//   <Stack.Navigator
//     screenOptions={{
//       headerStyle: { backgroundColor: "dodgerblue" },
//       headerTintColor: "white",
//     }}
//   >
//     <Stack.Screen name="Tweets" component={Tweets} />
//     <Stack.Screen
//       name="TweetDetails"
//       component={TweetDetails}
//       options={({ route }) => ({ title: route.params.id })}
//     />
//   </Stack.Navigator>
// );

// const Tab = createBottomTabNavigator();

// const Account = () => (
//   <Screen>
//     <Text>Account</Text>
//   </Screen>
// );

// const TabNavigator = () => (
//   <Tab.Navigator>
//     <Tab.Screen name="Feed" component={StackNavigator} />
//     <Tab.Screen name="Account" component={Account} />
//   </Tab.Navigator>
// );
