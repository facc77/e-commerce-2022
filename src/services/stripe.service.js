import { fetchPrivate } from "./fetch-private";

const endpoint = process.env.REACT_APP_ENDPOINT_Stripe || "/order";

const datos = { resp: null, error: null };

export const getOrder = async (id) => {
  const resp = await fetchPrivate(endpoint, null, "GET", id);
  if (resp.ok) {
    datos.resp = await resp.json();
  } else {
    datos.error = resp.statusText;
  }
  return datos;
};

export const postOrder = async (data) => {
  const resp = await fetchPrivate(endpoint, data, "POST");
  if (resp.ok) {
    datos.resp = await resp.json();
    datos.error = null;
  } else {
    datos.error = await resp.json();
    datos.resp = null;
  }
  return datos;
};

export const putOrder = async (endpoint, data, id) => {
  const resp = await fetchPrivate(endpoint, data, "PUT", id);
  if (resp.ok) {
    datos.resp = await resp.json();
    datos.error = null;
  } else {
    datos.error = await resp.json();
    datos.resp = null;
  }
  return datos;
};
