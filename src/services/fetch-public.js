export const fetchPublic = ( endpoint, data, method = 'GET', id ) => {

 const base = process.env.REACT_APP_BASE_URL || "https://backend-e-commerce-2022.herokuapp.com/api";

 const url = `${base}${endpoint}/${id || ""}`;

 if ( method === 'GET' ) {
     return fetch( url );
 } else {
     return fetch( url, {
         method,
         headers: {
             'Content-type': 'application/json'
         },
         body: JSON.stringify( data )
     });
 }
}