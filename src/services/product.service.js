import { fetchPublic } from "./fetch-public";
import { fetchPrivate } from "./fetch-private";

const endpoint = process.env.REACT_APP_ENDPOINT_PRODUCTS || "/products";

const datos = { resp: null, error: null };

export const getProducts = async () => {
  const resp = await fetchPublic(endpoint);
  if (resp.ok) {
    datos.resp = await resp.json();
  } else {
    datos.error = resp.statusText;
  }
  return datos;
};

export const postProducts = async (data) => {
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

export const putProducts = async (data, id) => {
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

export const deleteProducts = async (id) => {
  const resp = await fetchPrivate(endpoint, null, "DELETE", id);
  if (resp.ok) {
    datos.resp = await resp.json();
    datos.error = null;
  } else {
    datos.error = await resp.json();
    datos.resp = null;
  }
  return datos;
};

export const getProductsByCategory = async (idCat) => {
  const resp = await fetchPublic(`/search/categories/${idCat}`);
  if (resp.ok) {
    datos.resp = await resp.json();
  } else {
    datos.error = resp.statusText;
  }
  return datos;
};
