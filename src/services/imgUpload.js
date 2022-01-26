export const imgUpload = async (file) => {
 const url = process.env.REACT_APP_URL_CLAUDINARY;

 const formData = new FormData();
 formData.append("upload_preset", "e-commerce");
 formData.append("file", file);

 try {
   const resp = await fetch(url, {
     method: "POST",
     body: formData,
   });

   if (resp.ok) {
     const body = await resp.json();
     return body.secure_url;
   } else {
     throw await resp.json();
   }
 } catch (error) {
   throw error;
 }
};