import { fetchPrivate } from "./fetch-private";
import { fetchPublic } from "./fetch-public";

const endpointLogin = process.env.REACT_APP_ENDPOINT_LOGIN || "/auth/login";
const endpointRegister =
  process.env.REACT_APP_ENDPOINT_REGISTER || "/auth/register";
const endpointRevalidation =
  process.env.REACT_APP_ENDPOINT_REVALIDATION || "/auth/renew";

const datos = { resp: null, error: null };

export const login = async (data) => {
  const resp = await fetchPublic(endpointLogin, data, "POST");
  if (resp.ok) {
    const ok = await resp.json();
    datos.resp = ok;
    datos.error = null;
  } else {
    const err = await resp.json();
    datos.resp = null;
    datos.error = err;
  }
  return datos;
};

export const register = async (data) => {
  const resp = await fetchPublic(endpointRegister, data, "POST");
  if (resp.ok) {
    const ok = await resp.json();
    datos.resp = ok;
    datos.error = null;
  } else {
    const err = await resp.json();
    datos.resp = null;
    datos.error = err;
  }
  return datos;
};

export const revalidation = async () => {
  const resp = await fetchPrivate(endpointRevalidation);
  if (resp.ok) {
    const ok = await resp.json();
    datos.resp = ok;
    datos.error = null;
  } else {
    const err = await resp.json();
    datos.resp = null;
    datos.error = err;
  }
  return datos;
};
