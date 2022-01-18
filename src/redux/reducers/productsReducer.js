import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../../services/categorie.service";
import {
  getProducts,
  getProductsByCategory,
  postProducts,
  putProducts,
} from "../../services/product.service";

export const getProductos = createAsyncThunk(
  "productos/getProductos",
  async () => {
    return await getProducts();
  }
);
export const getProductosPorCategoria = createAsyncThunk(
  "productos/getProductosByCategory",
  async () => {
    const categoriesList = await getCategories();
    async function pro(){
      let products = [];
      for (let i = 0; i < categoriesList.resp.data.length; i++) {
        const productsData = await getProductsByCategory(categoriesList.resp.data[i].uid);
        products = [{name:categoriesList.resp.data[i].name, data:productsData.resp.results}, ...products];
      }
      return products;
    }  
    
    return await pro();
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
    productsByCat:[],
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
    //get por categoria
    [getProductosPorCategoria.pending]: (state, action) => {
      state.loading = true;
    },
    [getProductosPorCategoria.fulfilled]: (state, action) => {
      state.productsByCat = action.payload;
      state.loading = false;
    },
    [getProductosPorCategoria.rejected]: (state, action) => {
      state.loading = false;
      state.error = "error";
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
