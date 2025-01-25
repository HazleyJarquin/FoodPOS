import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, StyleSheet, Text, View } from "react-native";
import { TRootStackParamList } from "../../types/TRootStackParamList";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { buttonStyles } from "../../styles/buttonStyles";
import { posData } from "../../data/PosData";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { commonStyles } from "../../styles/commonStyles";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  TRootStackParamList,
  "Home"
>;
export const LoginScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        commonStyles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <Text style={styles.titleStyle}>{posData.appName}</Text>
      <Image
        source={require("../../../assets/images/loginImage.png")}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.buttonsContainer}>
        <Button
          style={[buttonStyles.outline, { width: "100%" }]}
          labelStyle={buttonStyles.textOutline}
          onPress={() => navigation.navigate("SelectTypeLogin")}
        >
          Iniciar sesión
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    width: "100%",
    paddingBottom: 30,
  },
  titleStyle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1A72DD",
    paddingTop: 20,
  },
});
