import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,

  products: [
    {
      image: "https://m.media-amazon.com/images/I/617SbvdpCoL._SL1500_.jpg",
      name: "Electronic weighing machines ",
      price: 1000,
      quantity: 0,
      id: 0,
    },
    {
      image: "https://m.media-amazon.com/images/I/61xNG4wjOuL._SL1400_.jpg",
      name: "hp",
      price: 200,
      quantity: 0,
      id: 1,
    },

    {
      image: "https://m.media-amazon.com/images/I/71wRh+9yqrL._SL1500_.jpg",
      name: "Degital-watch",
      price: 1200,
      quantity: 0,
      id: 2,
    },

    {
      image: "https://m.media-amazon.com/images/I/71+ardR+AHL._SL1500_.jpg",
      name: "Almond-butter",
      price: 120,
      quantity: 0,
      id: 3,
    },
    {
      image: "https://m.media-amazon.com/images/I/61Uh7P5bIUL._SL1100_.jpg",
      name: " Sports Running Shoes…  ",
      price: 1500,
      quantity: 0,
      id: 4,
    },
    {
      image: "https://m.media-amazon.com/images/I/71jeOlx-lgL._SL1500_.jpg",
      name: "Tricycle ",
      price: 2200,
      quantity: 0,
      id: 5,
    },
  ],
  cart: [],
  query: "",
};

const ProductDetails = createSlice({
  name: "amazon",
  initialState,
  reducers: {
    increment: (state, action) => {
      if (state.products[action.payload].quantity === 10) {
        return;
      }
      state.products[action.payload].quantity++;
      state.products = [...state.products];
      const found = state.cart.find(
        (product) => product.id === state.products[action.payload].id
      );
      if (found) {
        found.quantity++;
        state.cart = [...state.cart];
        // state.products = [...state.products, action.payload];
      }
    },
    decrement: (state, action) => {
      if (state.products[action.payload].quantity === 0) {
        return;
      }
      state.products[action.payload].quantity--;
      state.products = [...state.products];

      const found = state.cart.find(
        (product) => product.id === state.products[action.payload].id
      );
      if (found) {
        found.quantity--;
        state.cart = [...state.cart];
        state.products = [...state.products, action.payload];
      }
    },

    createCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    updateQuery: (state, action) => {
      state.query = action.payload.trim();
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, createCart, updateQuery } =
  ProductDetails.actions;
export const ProductSelector = (id) => (state) => state.amazon.products[id];
export default ProductDetails.reducer;
