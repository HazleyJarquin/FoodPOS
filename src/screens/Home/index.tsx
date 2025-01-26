import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Alert,
} from "react-native";
import { ProductCard } from "../../components/ProductCard";
import { useProductCartStore } from "../../store/useProductCartStore";
import { Icon } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { TRootStackParamList } from "../../types/TRootStackParamList";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const PRODUCTS = [
  {
    id: "1",
    imageUri:
      "https://imgs.search.brave.com/JaXQyyGhRfGX34ayaomlPoDjHYTkoM456GwtMJApHio/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/NDI1MzgxOS9lcy9m/b3RvL2ltYWdlbi1k/ZS1kZXNheXVuby1q/YXBvbmVzYS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9XzRk/V3pCeW40ZklfRU9t/SVpqV3hMX2NtQ1pt/WEdMR1lDeGdBV2NR/UmoxOD0",
    moneySymbol: "$",
    price: 10,
    subtitle: "Subtitle 1",
    title: "Product 1",
  },
  {
    id: "2",
    imageUri: "https://via.placeholder.com/150",
    moneySymbol: "$",
    price: 20,
    subtitle: "Subtitle 2",
    title: "Product 2",
  },
  {
    id: "3",
    imageUri: "https://via.placeholder.com/150",
    moneySymbol: "$",
    price: 30,
    subtitle: "Subtitle 3",
    title: "Product 3",
  },
  {
    id: "4",
    imageUri: "https://via.placeholder.com/150",
    moneySymbol: "$",
    price: 40,
    subtitle: "Subtitle 4",
    title: "Product 4",
  },
  {
    id: "5",
    imageUri: "https://via.placeholder.com/150",
    moneySymbol: "$",
    price: 50,
    subtitle: "Subtitle 5",
    title: "Product 5",
  },
  {
    id: "6",
    imageUri: "https://via.placeholder.com/150",
    moneySymbol: "$",
    price: 60,
    subtitle: "Subtitle 6",
    title: "Product 6",
  },
  {
    id: "7",
    imageUri: "https://via.placeholder.com/150",
    moneySymbol: "$",
    price: 70,
    subtitle: "Subtitle 7",
    title: "Product 7",
  },
  {
    id: "8",
    imageUri: "https://via.placeholder.com/150",
    moneySymbol: "$",
    price: 80,
    subtitle: "Subtitle 8",
    title: "Product 8",
  },
  {
    id: "9",
    imageUri: "https://via.placeholder.com/150",
    moneySymbol: "$",
    price: 90,
    subtitle: "Subtitle 9",
    title: "Product 9",
  },
  {
    id: "10",
    imageUri: "https://via.placeholder.com/150",
    moneySymbol: "$",
    price: 100,
    subtitle: "Subtitle 10",
    title: "Product 10",
  },
];

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 48) / 2;

type HomeTabsScreenNavigationProp = NativeStackNavigationProp<
  TRootStackParamList,
  "HomeTabs"
>;

export const HomeScreen = () => {
  const { addToCart, getTotal, items, clearCart } = useProductCartStore();
  const navigation = useNavigation<HomeTabsScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <ProductCard
              layout="vertical"
              imageUri={item.imageUri}
              moneySymbol={item.moneySymbol}
              price={item.price}
              subtitle={item.subtitle}
              title={item.title}
              onIconPress={() => {
                addToCart({
                  id: item.id,
                  name: item.title,
                  price: item.price,
                  quantity: 1,
                  image: item.imageUri,
                  moneySymbol: item.moneySymbol,
                  subtitle: item.subtitle,
                });
              }}
            />
          </View>
        )}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
      />

      {items.length > 0 && (
        <View
          style={styles.cartSummary}
          onTouchStart={() => navigation.navigate("Facturar")}
        >
          <Icon source="cart-minus" size={20} color="white" />
          <Text style={styles.cartText}>
            Items: {items.length} | Total: ${getTotal().toFixed(2)}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  row: {
    justifyContent: "center",
    marginBottom: 16,
    gap: 16,
  },
  listContent: {
    paddingBottom: 16,
  },
  cardContainer: {
    width: CARD_WIDTH,
    marginBottom: 16,
    alignItems: "center",
  },
  cartSummary: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
    padding: 16,
    backgroundColor: "#1A72DD",
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cartText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
