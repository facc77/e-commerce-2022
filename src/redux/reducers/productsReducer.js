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
    cart: [],
    loading: false,
    active: null,
    error: null,
  },
  reducers: {
    setActiveProduct(state, action) {
      console.log(state, action);
      action.payload ? (state.active = action.payload) : (state.active = null);
    },
    setAddProduct(state, action) {
      state.cart = [...state.cart, action.payload];
    },
    /* setDeleteProduct(state, action) {
      action.payload ? (state.active = action.payload) : (state.active = null);
    }, */
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

    //post-----------------------------------------
    [postProductos.pending]: (state, action) => {
      state.loading = true;
    },
    [postProductos.fulfilled]: (state, action) => {
      action.payload.error
        ? (state.error = action.payload.error)
        : (state.productsList = [
            ...state.productsList,
            action.payload.resp.category,
          ]);
      state.loading = false;
    },
    [postProductos.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    //put-----------------------------------------
    [putProductos.pending]: (state, action) => {
      state.loading = true;
    },
    [putProductos.fulfilled]: (state, action) => {
      state.productsList = state.productsList.map((product) =>
        product.uid === action.payload.resp.product.uid
          ? action.payload.resp.product
          : product
      );
      state.loading = false;
    },
    [putProductos.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export const { setActiveProduct, setAddProduct } = productsSlice.actions;

export default productsSlice.reducer;
