import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers, postUsers, putUsers } from "../../services/user.service";


export const getUsuarios = createAsyncThunk(
  "usuarios/getUsuarios",
  async () => {
    return await getUsers();
  }
);

export const postUsuarios = createAsyncThunk(
  "usuarios/postUsuarios",
  async (body) => {
    const { name, email, password, role } = body;
    const resp = await postUsers({ name, email, password, role });
    return resp;
  }
);

export const putUsuarios = createAsyncThunk(
  "usuarios/putUsuarios",
  async (body) => {
    const { name, email, password, role, active } = body;
    const resp = await putUsers({ name, email, password, role }, active);
    return resp;
  }
);

const userSlice = createSlice({
  name: "usuarios",
  initialState: {
    usuariosList: [],
    loading: false,
    active: null,
    error: null,
  },
  reducers: {
    setEdit(state, action) {
      action.payload ? (state.active = action.payload) : (state.active = null);
    },
  },
  extraReducers: {
    //get-----------------------------------------
    [getUsuarios.pending]: (state, action) => {
      state.loading = true;
    },
    [getUsuarios.fulfilled]: (state, action) => {
      action.payload.error
        ? (state.error = action.payload.error)
        : (state.usuariosList = action.payload.resp.users);
      state.loading = false;
    },
    [getUsuarios.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    //post-----------------------------------------
    [postUsuarios.pending]: (state, action) => {
      state.loading = true;
    },
    [postUsuarios.fulfilled]: (state, action) => {
      console.log(action.payload);
      action.payload.error
        ? (state.error = action.payload.error)
        : (state.usuariosList = [
            ...state.usuariosList,
            action.payload.resp.user,
          ]);
      state.loading = false;
    },
    [postUsuarios.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    //put-----------------------------------------
    [putUsuarios.pending]: (state, action) => {
      state.loading = true;
    },
    [putUsuarios.fulfilled]: (state, action) => {
      action.payload.error
        ? (state.error = action.payload.error)
        : (state.usuariosList = state.usuariosList.map((user) =>
            user.uid === action.payload.resp.user.uid
              ? action.payload.resp.user
              : user
          ));
      state.loading = false;
    },
    [putUsuarios.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setEdit } = userSlice.actions;
export default userSlice.reducer;