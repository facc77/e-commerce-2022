import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("products/getPosts", async () => {
  return fetch(
    "https://backend-e-commerce-2022.herokuapp.com/api/products"
  ).then((res) => res.json());
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: "false",
    error: null,
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;
      state.loading = "false";
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = "errorrrr";
      state.error = "ocurrió un error";
    },
  },
});

export default productsSlice.reducer;
