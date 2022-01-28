import Swal from "sweetalert2";

export const successAlert = (title, text) =>{
 Swal.fire({
  icon: 'success',
  title: title || 'Hecho',
  text: text || 'Tarea realizada con éxito',
  confirmButtonColor:"#00214D",
  toast:true
 })
};

export const errorAlert = (title, text) =>{
 Swal.fire({
  icon: 'error',
  title: title || 'Oops...',
  text:  text || 'Ocurrió un error inesperado.!!',
  confirmButtonColor:"#00214D",
  toast:true
})
};

export const questionAlert = async(title, text , confirmText) => {
 const resp = await Swal.fire({
   title: title || 'Estás seguro?',
   text: text || "¡Esta acción es irreversible!",
   icon: 'warning',
   toast:true,
   showCancelButton: true,
   confirmButtonColor: '#3085d6',
   cancelButtonColor: '#d33',
   confirmButtonText: confirmText || 'Si, Adelante!'
 })
 return resp.isConfirmed;
};