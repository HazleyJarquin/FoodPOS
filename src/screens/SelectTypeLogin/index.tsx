import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { commonStyles } from "../../styles/commonStyles";
import { posData } from "../../data/PosData";
import { buttonStyles } from "../../styles/buttonStyles";

export const SelectTypeLoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
        <Text style={styles.titleStyle}>¡Bienvenido a {posData.appName}!</Text>
        <Text style={styles.descriptionStyle}>
          Seleccione iniciar sesión como propietario o empleado primero para
          continuar.
        </Text>
      </View>

      <Image source={require("../../../assets/images/selectRolImage.png")} />

      <View style={{ width: "100%", gap: 10 }}>
        <Button
          icon="account"
          style={[buttonStyles.primary, { width: "100%" }]}
          onPress={() => {}}
          labelStyle={buttonStyles.textPrimary}
        >
          Propietario
        </Button>
        <Text style={{ color: "#000000", textAlign: "center" }}>O</Text>
        <Button
          icon="account-group"
          style={[
            buttonStyles.primary,
            { width: "100%", justifyContent: "space-between" },
          ]}
          onPress={() => {}}
          labelStyle={buttonStyles.textPrimary}
        >
          Empleado
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    alignItems: "center",
    gap: 50,
  },
  titleStyle: {
    color: "#2A3256",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    paddingTop: 20,
  },
  descriptionStyle: {
    color: "#2A3256",
    fontSize: 16,
    textAlign: "left",
    paddingTop: 10,
  },
});
