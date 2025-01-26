import { HomeScreen } from "../screens/Home";
import { PaymentScreen } from "../screens/Payment";
import { ProductsScreen } from "../screens/Products";

export const NTabLinks = [
  {
    id: 1,
    name: "Inicio",
    icon: "home-outline",
    component: HomeScreen,
  },
  {
    id: 2,
    name: "Inventario",
    icon: "book-edit-outline",
    component: ProductsScreen,
  },
  {
    id: 3,
    name: "Facturar",
    icon: "wallet-outline",
    component: PaymentScreen,
  },
];
