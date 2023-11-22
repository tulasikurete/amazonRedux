import { configureStore } from "@reduxjs/toolkit";
import ProductsDetails from "./ProductsDetails";

export const Store = configureStore({
  reducer: {
    amazon: ProductsDetails,
  },
});
