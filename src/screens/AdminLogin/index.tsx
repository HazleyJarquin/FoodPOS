import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { inputStyles } from "../../styles/inputStyles";
import { buttonStyles } from "../../styles/buttonStyles";

export const AdminLoginScreen = () => {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        <TextInput
          mode="outlined"
          style={inputStyles.inputPrimaryStyle}
          label="Codigo de Propietario"
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
        onPress={() => {}}
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
