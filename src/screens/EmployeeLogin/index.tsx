import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { inputStyles } from "../../styles/inputStyles";
import { buttonStyles } from "../../styles/buttonStyles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TRootStackParamList } from "../../types/TRootStackParamList";
import { useNavigation } from "@react-navigation/native";

type EmployeeLoginScreenNavigationProp = NativeStackNavigationProp<
  TRootStackParamList,
  "EmployeeLogin"
>;
export const EmployeeLoginScreen = () => {
  const [text, setText] = useState("");

  const navigation = useNavigation<EmployeeLoginScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        <TextInput
          mode="outlined"
          style={inputStyles.inputPrimaryStyle}
          label="Codigo de Empleado"
          value={text}
          onChangeText={(text) => setText(text)}
          outlineStyle={inputStyles.outlinePrimayStyle}
        />
        <TextInput
          mode="outlined"
          style={inputStyles.inputPrimaryStyle}
          value={text}
          onChangeText={(text) => setText(text)}
          outlineStyle={inputStyles.outlinePrimayStyle}
          label="Password"
          secureTextEntry
        />
      </View>

      <Button
        style={[buttonStyles.primary, { width: "100%" }]}
        labelStyle={buttonStyles.textPrimary}
        mode="contained"
        onPress={() => {
          navigation.navigate("HomeTabs");
        }}
      >
        Iniciar sesión
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
  },
  inputsContainer: {
    width: "100%",
    gap: 20,
  },
});
