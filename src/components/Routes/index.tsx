import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { enableScreens } from "react-native-screens";
import { TRootStackParamList } from "../../types/TRootStackParamList";
import { LoginScreen } from "../../screens/Login";

import { TabNavigator } from "../TabNavigator";
import { SelectTypeLoginScreen } from "../../screens/SelectTypeLogin";

enableScreens();

const Stack = createNativeStackNavigator<TRootStackParamList>();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SelectTypeLogin"
          component={SelectTypeLoginScreen}
          options={{
            headerShown: true,
            headerBackButtonDisplayMode: "minimal",
            headerStyle: {
              backgroundColor: "white",
            },
            headerTintColor: "#1A72DD",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
            headerTitle: "Inicio de sesión",
            headerShadowVisible: false,
          }}
        />

        <Stack.Screen
          name="HomeTabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
