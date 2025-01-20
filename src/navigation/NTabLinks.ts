import { HomeScreen } from "../screens/Home";
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
    name: "Productos",
    icon: "basket-outline",
    component: ProductsScreen,
  },
];
