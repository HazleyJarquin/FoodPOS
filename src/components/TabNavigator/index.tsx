import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-paper";
import { NTabLinks } from "../../navigation/NTabLinks";

export const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 5,
          height: 60,
        },
      }}
    >
      {NTabLinks.map((tab) => (
        <Tab.Screen
          key={tab.id}
          name={tab.name}
          component={tab.component}
          options={() => ({
            tabBarIcon: ({ color, size }) => (
              <Icon source={tab.icon} color={color} size={size} />
            ),
            headerShown: false,
          })}
        />
      ))}
    </Tab.Navigator>
  );
};
