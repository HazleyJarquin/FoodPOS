import { FlatList, StyleSheet, View } from "react-native";
import { Button, Checkbox, Text, TextInput } from "react-native-paper";
import { useProductCartStore } from "../../store/useProductCartStore";
import { ProductCard } from "../../components/ProductCard";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { inputStyles } from "../../styles/inputStyles";
import { useState } from "react";
import { buttonStyles } from "../../styles/buttonStyles";

export const PaymentScreen = () => {
  const [total, setTotal] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const insets = useSafeAreaInsets();
  const { items, removeFromCart, getTotal, clearCart } = useProductCartStore();

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };

  const handleChange = (text: string) => {
    if (text === "") {
      setTotal(null);
    } else {
      setTotal(Number(text));
    }
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <TextInput
        mode="outlined"
        label="Nombre del cliente"
        style={inputStyles.inputPrimaryStyle}
        outlineStyle={inputStyles.outlinePrimayStyle}
      />

      <View style={{ gap: 2 }}>
        <TextInput
          value={total !== null ? total.toString() : ""}
          onChangeText={handleChange}
          mode="outlined"
          keyboardType="numeric"
          label="Monto a pagar"
          style={inputStyles.inputPrimaryStyle}
          outlineStyle={inputStyles.outlinePrimayStyle}
          error={total !== null && total < getTotal()}
        />
        {total !== null && total < getTotal() && (
          <Text style={{ color: "red", fontSize: 10 }}>
            El monto a pagar no puede ser menor al total de la compra
          </Text>
        )}
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        style={styles.flatList}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 16 }}>
            <ProductCard
              imageUri={item.image}
              layout="horizontal"
              moneySymbol={item.moneySymbol}
              subtitle={item.subtitle}
              price={item.price}
              title={item.name}
              quantity={item.quantity}
              onIconPress={() => {
                removeFromCart(item.id);
              }}
            />
          </View>
        )}
      />

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Total:</Text>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          ${getTotal().toFixed(2)}
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Cambio:</Text>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          $
          {total !== null
            ? total >= getTotal()
              ? (total - getTotal()).toFixed(2)
              : "0.00"
            : "0.00"}
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Checkbox.Item
          label="Para llevar"
          status={selectedOption === "paraLlevar" ? "checked" : "unchecked"}
          onPress={() => handleSelectOption("paraLlevar")}
        />
        <Checkbox.Item
          label="Para comer aquí"
          status={selectedOption === "paraComerAqui" ? "checked" : "unchecked"}
          onPress={() => handleSelectOption("paraComerAqui")}
        />
      </View>
      <Button
        mode="contained"
        icon={"wallet-outline"}
        style={buttonStyles.primary}
        labelStyle={buttonStyles.textPrimary}
        onPress={clearCart}
      >
        Pagar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  flatList: {
    width: "100%",
    padding: 2,
    paddingTop: 15,
  },
});
