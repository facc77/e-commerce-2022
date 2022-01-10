import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getProducts,
  postProducts,
  putProducts,
} from "../../services/product.service";

export const getProductos = createAsyncThunk(
  "productos/getProductos",
  async () => {
    return await getProducts();
  }
);

export const postProductos = createAsyncThunk(
  "productos/postProductos",
  async (body) => {
    const { name, category, price, description, img } = body;
    const resp = await postProducts({
      name,
      category,
      price,
      description,
      img,
    });
    return resp;
  }
);

export const putProductos = createAsyncThunk(
  "productos/putProductos",
  async (body) => {
    const { name, category, price, description, img } = body;
    const resp = await putProducts({
      name,
      category,
      price,
      description,
      img,
    });
    return resp;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    productsList: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [getProductos.pending]: (state, action) => {
      state.loading = true;
    },
    [getProductos.fulfilled]: (state, action) => {
      state.productsList = action.payload.resp.data;
      state.loading = false;
    },
    [getProductos.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default productsSlice.reducer;
