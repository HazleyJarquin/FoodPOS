import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { TRootStackParamList } from "../../types/TRootStackParamList";
import { useNavigation } from "@react-navigation/native";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  TRootStackParamList,
  "Home"
>;
export const LoginScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <Text>LoginPage</Text>
      <Button onPress={() => navigation.navigate("HomeTabs")}>Go Home</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
