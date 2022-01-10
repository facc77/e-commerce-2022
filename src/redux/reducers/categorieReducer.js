import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategories, postCategories, putCategories } from "../../services/categorie.service";

export const getCategorias = createAsyncThunk(
  "categorias/getCategorias",
  async () => {
    return await getCategories();
  }
);
export const postCategorias = createAsyncThunk(
  "categorias/postcategorias",
  async (body) => {
    const { name } = body;
    const resp = await postCategories({ name });
    return resp;
  }
);

export const putCategorias = createAsyncThunk(
  "categorias/putCategorias",
  async (body) => {
    const { name, active } = body;
    const resp = await putCategories({ name }, active);
    return resp;
  }
);

const categorieSlice = createSlice({
  name: "categorias",
  initialState: {
    categoriasList: [],
    loading: false,
    active: null,
    error: null,
  },
  reducers: {
    setEditCate(state, action) {
      action.payload ? (state.active = action.payload) : (state.active = null);
    },
  },
  extraReducers: {
    //get-----------------------------------------
    [getCategorias.pending]: (state, action) => {
      state.loading = true;
    },
    [getCategorias.fulfilled]: (state, action) => {
      action.payload.error
        ? (state.error = action.payload.error)
        : (state.categoriasList = action.payload.resp.data);
      state.loading = false;
    },
    [getCategorias.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    //post-----------------------------------------
    [postCategorias.pending]: (state, action) => {
      state.loading = true;
    },
    [postCategorias.fulfilled]: (state, action) => {
      action.payload.error
        ? (state.error = action.payload.error)
        : (state.categoriasList = [
            ...state.categoriasList,
            action.payload.resp.category,
          ]);
      state.loading = false;
    },
    [postCategorias.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    //put-----------------------------------------
    [putCategorias.pending]: (state, action) => {
      state.loading = true;
    },
    [putCategorias.fulfilled]: (state, action) => {
      action.payload.error
        ? (state.error = action.payload.error)
        : (state.categoriasList = state.categoriasList.map((category) =>
            category.uid === action.payload.resp.categorie.uid
              ? action.payload.resp.categorie
              : category
          ));
      state.loading = false;
    },
    [putCategorias.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setEditCate } = categorieSlice.actions;
export default categorieSlice.reducer;