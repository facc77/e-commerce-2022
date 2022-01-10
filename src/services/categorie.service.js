import { fetchPrivate } from "./fetch-private";
import { fetchPublic } from "./fetch-public";


const endpoint = process.env.REACT_APP_ENDPOINT_CATEGORIES || "/categories";

const datos = {resp:null,error:null };

export const getCategories = async() => {
   const resp = await fetchPublic(endpoint);
   if(resp.ok){
      datos.resp = await resp.json();
   }else{
      datos.error = resp.statusText;
   }
   return datos;
}

export const postCategories = async(data) => {
   const resp = await fetchPrivate(endpoint, data, "POST");
   if(resp.ok){
      datos.resp = await resp.json();
   }else{
      datos.error = resp.statusText;
   }
   return datos;
}

export const putCategories = async(data, id) => {
   const resp = await fetchPrivate(endpoint, data, "PUT", id);
   if(resp.ok){
      datos.resp = await resp.json();
   }else{
      datos.error = resp.statusText;
   }
   return datos;
}

export const deleteCategories = async(id) => {
   const resp = await fetchPrivate(endpoint,null, "DELETE", id);
   if(resp.ok){
      datos.resp = await resp.json();
   }else{
      datos.error = resp.statusText;
   }
   return datos;
}