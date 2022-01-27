import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../../services/categorie.service";
import {
  getProducts,
  getProductsByCategory,
  postProducts,
  putProducts,
  deleteProducts,
} from "../../services/product.service";
import { toast } from "react-toastify";
import { imgUpload } from "../../services/imgUpload";

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
    async function pro() {
      let products = [];
      for (let i = 0; i < categoriesList.resp.data.length; i++) {
        const productsData = await getProductsByCategory(
          categoriesList.resp.data[i].uid
        );
        products = [
          {
            name: categoriesList.resp.data[i].name,
            uid: categoriesList.resp.data[i].uid,
            data: productsData.resp.results,
          },
          ...products,
        ];
      }
      return products;
    }

    return await pro();
  }
);

export const postProductos = createAsyncThunk(
  "productos/postProductos",
  async (body) => {
    const { name, category, price, description, shortDescription, img } = body;
    let urlImg = "";
    if (img) {
      urlImg = await imgUpload(img);
    }
    const resp = await postProducts({
      name,
      category,
      price,
      shortDescription,
      description,
      img: urlImg,
    });
    return resp;
  }
);

export const putProductos = createAsyncThunk(
  "productos/putProductos",
  async (body) => {
    const {
      name,
      category,
      price,
      description,
      shortDescription,
      img,
      activeBackoffice,
    } = body;
    let resp;
    if (img.name) {
      const urlImg = imgUpload(img);
      resp = await putProducts(
        { name, category, price, description, shortDescription, img: urlImg },
        activeBackoffice
      );
    } else {
      resp = await putProducts(
        { name, category, price, description, shortDescription, img },
        activeBackoffice
      );
    }
    return resp;
  }
);

export const deleteProductos = createAsyncThunk(
  "productos/deleteProductos",
  async (id) => {
    return await deleteProducts(id);
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    productsList: [],
    productsByCat: [],
    cart: [],
    loading: false,
    active: null,
    activeBackoffice: null,
    error: null,
  },
  reducers: {
    setActiveProduct(state, action) {
      console.log(state, action);
      action.payload ? (state.active = action.payload) : (state.active = null);
    },
    setAddProduct(state, action) {
      const itemIndex = state.cart.findIndex(
        (cartItem) => cartItem._id === action.payload._id
      );

      if (state.cart.some((product) => product._id === action.payload._id)) {
        state.cart[itemIndex].count += 1;
        console.log("aumentar producto");
        toast.info("Cantidad de producto aumentado!", {
          position: "bottom-left",
        });
      } else {
        state.cart = [...state.cart, action.payload];
        console.log("agregar producto");
        toast.success(`${action.payload.name} agregado al carrito!`, {
          position: "bottom-left",
        });
      }
    },
    resetCartOnLogOut(state, action) {
      state.cart = [];
    },
    setDeleteProduct(state, action) {
      const itemIndex = state.cart.findIndex(
        (cartItem) => cartItem._id === action.payload._id
      );
      if (state.cart[itemIndex].count > 1) {
        state.cart[itemIndex].count -= 1;
      } else {
        const restItems = state.cart.filter(
          (product) => product._id !== action.payload._id
        );
        state.cart = restItems;
        toast.success(`${action.payload.name} borrado del carrito!`, {
          position: "bottom-left",
        });
      }
    },
    reduceCartProduct(state, action) {
      const itemIndex = state.cart.findIndex(
        (cartItem) => cartItem._id === action.payload._id
      );
      if (state.cart[itemIndex].count > 1) {
        state.cart[itemIndex].count -= 1;
        toast.info("Cantidad de producto disminuido!", {
          position: "bottom-left",
        });
      } else {
        const restItems = state.cart.filter(
          (product) => product._id !== action.payload._id
        );
        state.cart = restItems;
        toast.success(`${action.payload.name} borrado del carrito!`, {
          position: "bottom-left",
        });
      }
    },
    deleteCartProduct(state, action) {
      const restItems = state.cart.filter(
        (product) => product._id !== action.payload._id
      );
      state.cart = restItems;
      toast.success(`${action.payload.name} borrado del carrito!`, {
        position: "bottom-left",
      });
    },
    setEditPro(state, action) {
      action.payload
        ? (state.activeBackoffice = action.payload)
        : (state.activeBackoffice = null);
    },
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
      if (action.payload.error) {
        state.error = action.payload.error.msg;
      } else {
        state.productsList = [
          ...state.productsList,
          action.payload.resp.product,
        ];
        state.productsByCat = state.productsByCat.map((cat) => {
          if (cat.uid === action.payload.resp.product.category) {
            cat.data = [...cat.data, action.payload.resp.product];
          }
          return cat;
        });
        state.error = null;
      }
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
      if (action.payload.error) {
        state.error = action.payload.error.msg;
      } else {
        state.productsList = state.productsList.map((pro) =>
          pro._id === action.payload.resp.product._id
            ? action.payload.resp.product
            : pro
        );
        state.productsByCat = state.productsByCat.map((cat) => {
          if (cat.uid === action.payload.resp.product.category) {
            cat.data = cat.data.map((pr) =>
              pr._id === action.payload.resp.product._id
                ? action.payload.resp.product
                : pr
            );
          }
          return cat;
        });
        state.error = null;
      }
      state.loading = false;
    },
    [putProductos.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    //delete-----------------------------------------
    [deleteProductos.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteProductos.fulfilled]: (state, action) => {
      if (action.payload.error) {
        state.error = action.payload.error;
      } else {
        state.productsList = state.productsList.filter(
          (fil) => fil._id !== action.payload.resp.productoBorrado._id
        );
        state.productsByCat = state.productsByCat.map((ca) => {
          if (ca.uid === action.payload.resp.productoBorrado.category) {
            ca.data = ca.data.filter(
              (pr) => pr._id !== action.payload.resp.productoBorrado._id
            );
          }
          return ca;
        });
      }
      state.loading = false;
    },
    [deleteProductos.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export const {
  setActiveProduct,
  setAddProduct,
  resetCartOnLogOut,
  reduceCartProduct,
  deleteCartProduct,
  setEditPro,
} = productsSlice.actions;

export default productsSlice.reducer;
