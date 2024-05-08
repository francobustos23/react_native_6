import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Importing Screens
import { HomeScreen } from '../Screens/HomeScreen'
import { StackScreen } from '../Screens/StackScreen'

const HomeStackNavigator = createNativeStackNavigator();

export const HomeStacks = () => {

    return (
        <HomeStackNavigator.Navigator
        initialRouteName="HomeScreen"
        >
            <HomeStackNavigator.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="Stacks"
                component={StackScreen}
            />
        </HomeStackNavigator.Navigator>
    )
}