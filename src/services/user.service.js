import { fetchPrivate } from "./fetch-private";
import { fetchPublic } from "./fetch-public";

const endpoint = process.env.REACT_APP_ENDPOINT_USERS || "/users";

const datos = {resp:null,error:null };

export const getUsers = async() => {
   const resp = await fetchPublic(endpoint);
   if(resp.ok){
      datos.resp = await resp.json();
   }else{
      datos.error = resp.statusText;
   }
   return datos;
}

export const postUsers = async(data) => {
   const resp = await fetchPrivate(endpoint, data, "POST");
   if(resp.ok){
      datos.resp = await resp.json();
      datos.error = null;
   }else{
      datos.error = await resp.json();
      datos.resp = null;
   }
   return datos;
}

export const putUsers = async(data, id) => {
   const resp = await fetchPrivate(endpoint, data, "PUT", id);
   if(resp.ok){
      datos.resp = await resp.json();
      datos.error = null;
   }else{
      datos.error = await resp.json();
      datos.resp = null;
   }
   return datos;
}

export const deleteUsers = async(id) => {
   const resp = await fetchPrivate(endpoint, null, "DELETE", id);
   if(resp.ok){
      datos.resp = await resp.json();
      datos.error = null;
   }else{
      datos.error = await resp.json();
      datos.resp = null;
   }
   return datos;
}