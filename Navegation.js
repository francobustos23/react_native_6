//Importing React Components
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//Importing Stacks Screens
import { HomeStacks } from './Stacks/HomeStacks'
//Importing Screens
import { CardsScreen } from './Screens/CardsScreen'
//Creating Bottom Tab Navigator
const Tab = createBottomTabNavigator();

//Navigation Container
function MyTabs() {
  return (
    <Tab.Navigator
    //Initial Route Name
    initialRouteName="Home"
    //Tab Bar Options
    screenOptions={{
      tabBarActiveTintColor: 'black',

    }}
    >
        {/* Tab Screens */}
      <Tab.Screen
       name="Home"
       component={HomeStacks} 
       options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
        // tabBarBadge: 3,
        headerShown: false
       }}
       />
      <Tab.Screen
       name="Cards"
       component={CardsScreen} 
       options={{
        tabBarLabel: 'Cards',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="cards" color={color} size={size} />
        ),
        // tabBarBadge: 3,
       }}
       />
    </Tab.Navigator>
  );
}

//Exporting Navegation
export default function Navegation() {
    return (
        //Navigation Container
        <NavigationContainer>
            {/* MyTabs */}
            <MyTabs/>
        </NavigationContainer>
    )
}