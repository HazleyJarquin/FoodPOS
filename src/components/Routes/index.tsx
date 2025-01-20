import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { enableScreens } from "react-native-screens";
import { TRootStackParamList } from "../../types/TRootStackParamList";
import { LoginScreen } from "../../screens/Login";

import { TabNavigator } from "../TabNavigator";

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

        <Stack.Screen name="HomeTabs" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
