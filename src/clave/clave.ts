import {ValidacionClave} from "./model"
import { obtenerComprobaciones } from "./clave.helper";

export const validarClave = (nombreUsuario: string, clave: string, commonPasswords: string[]): ValidacionClave => {
  const validaciones: ValidacionClave[] = obtenerComprobaciones(clave, commonPasswords, nombreUsuario);
  const validar: ValidacionClave = {esValida: false};
  let error: boolean = false;
  for(let i = 0; i < validaciones.length && !error; i++) {
    if(!validaciones[i].esValida){
      validar.error = validaciones[i].error;
      error = true;
    }
  };
  if(!error){
    validar.esValida=true;
  }
  return validar;
};
