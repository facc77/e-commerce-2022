import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login, register, revalidation } from '../../services/authApi';

export const startLogin = createAsyncThunk(
  'auth/startLogin',
  async (body) => {
    const datos = await login(body);
    localStorage.setItem("token", datos.resp.data.token);
    return datos;
  },
);

export const startRegister = createAsyncThunk(
  'auth/startRegister',
  async (body) => {
    const datos = await register(body);
    localStorage.setItem("token", datos.resp.data.token);
    return datos;
  },
);

export const startRevalidation = createAsyncThunk(
  'auth/startRevalidation',
  async () => {
    const datos =  await revalidation();
    localStorage.setItem("token", datos.resp.data.token);
    return datos;
  },
);


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: [],
    token:null,
    logged:false,
    loading: true,
    error: null,
  },
  reducers: {
    setLogout(state, action){
      state.user = [];
      state.token = null;
      state.logged = false;
      state.loading = false;
      state.error = null;

      localStorage.removeItem("token");
    }
  },
  extraReducers: {
    //login-----------------------------------------
    [startLogin.pending]: (state, action) => {
      state.loading = true;
    },
    [startLogin.fulfilled]: (state, action) => {
      console.log(action);
      if(action.payload.error)
      { 
        state.error = action.payload.resp.error.msg
        state.logged = false;
      }else
      {
        state.token = action.payload.resp.data.token;
        state.user = action.payload.resp.data.user ;
        state.logged = true;
      }
      state.loading = false;
    },
    [startLogin.rejected]: (state, action) => {
      state.error = "ocurrio un error";
      state.logged = false;
      state.loading = false;
    },

    //register-----------------------------------------
    [startRegister.pending]: (state, action) => {
      state.loading = true;
    },
    [startRegister.fulfilled]: (state, action) => {
      if(action.payload.error)
      { 
        state.error = action.payload.resp.error.msg;
        state.logged = false;
      }else
      {
        state.token = action.payload.resp.data.token;
        state.user = action.payload.resp.data.NewUser ;
        state.logged = true;
      }
      state.loading = false;
    },
    [startRegister.rejected]: (state, action) => {
      state.error = "ocurrio un error";
      state.logged = false;
      state.loading = false;
    },

    //revalidation-----------------------------------------
    [startRevalidation.pending]: (state, action) => {
      state.loading = true;
    },
    [startRevalidation.fulfilled]: (state, action) => {
      if(action.payload.error)
      { 
        state.error = action.payload.resp.error.msg;
        state.logged = false;
      }else
      {
        state.token = action.payload.resp.data.token;
        state.user = action.payload.resp.data.user ;
        state.logged = true;
      }
      state.loading = false;
    },
    [startRevalidation.rejected]: (state, action) => {
      state.logged = false;
      state.loading = false;
    },
  },
});

export const { setLogout } = authSlice.actions;
export default authSlice.reducer;