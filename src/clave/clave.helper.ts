import { __ERROR_CLAVE_VACIA, __ERROR_NO_CARACT_ESPECIAL, __ERROR_NO_LONG_MINIMA, __ERROR_NO_MAYUS_MINUS, 
    __ERROR_NO_NUMEROS, __ERROR_NOMBRE_USUARIO, __ERROR_PALABRAS_COMUNES, __LONGITUD_MINIMA, ValidacionClave } from "./model";

export const claveVacia = (clave: string): ValidacionClave =>{
    const validacion: ValidacionClave = {esValida: false};
    if(clave===null || clave===undefined || clave==="")
        validacion.error=__ERROR_CLAVE_VACIA;
    else
        validacion.esValida=true;

    return validacion;
};

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave =>{
    const validacion: ValidacionClave = {esValida: false};
    let mayus: boolean = false;
    let minus: boolean = false;
    for(let i = 0; i<clave.length; i++){     
        if(clave[i].match(/[A-Z]/)){
            mayus=true;
        }else{
            if(clave[i].match(/[a-z]/))
                minus=true;
        }
    };
    if(!mayus || !minus){
        validacion.error=__ERROR_NO_MAYUS_MINUS;
    }else{
        validacion.esValida=true;
    }
    return validacion;
};

export const tieneNumeros = (clave: string): ValidacionClave => {
    const validacion: ValidacionClave = {esValida: false};
    let numero: boolean = false;
    for(let i = 0; i<clave.length; i++){
        if(clave[i].match(/[0123456789]/)){
            numero=true;
            break;
        }
    };
    if(numero){
        validacion.esValida=true;
    }else{
        validacion.error=__ERROR_NO_NUMEROS;
    }
    return validacion;
};

export const tieneCaracteresEspeciales = (clave: string): ValidacionClave =>{
    const validacion: ValidacionClave = {esValida: false};
    let caracterEspecial: boolean = false;
    for(let i = 0; i<clave.length; i++){
        if(clave[i].match(/[!¡@#$%&*()_+=|<>/?{}\\[\]~-]/)){
            caracterEspecial = true;
            break;
        }
    };
    if(caracterEspecial){
        validacion.esValida = true;
    }else{
        validacion.error = __ERROR_NO_CARACT_ESPECIAL;
    }
    return validacion;
};

export const longitudMinima = (clave: string): ValidacionClave =>{
    const validacion: ValidacionClave = {esValida: false};
    if(clave.length >= __LONGITUD_MINIMA){
        validacion.esValida = true;
    }else{
        validacion.error = __ERROR_NO_LONG_MINIMA;
    }
    return validacion;
};

export const tieneNombreUsuario = (nombreUsuario: string, clave: string): ValidacionClave =>{
    const validacion: ValidacionClave = {esValida: false};
    if(nombreUsuario===clave){
        validacion.error = __ERROR_NOMBRE_USUARIO;
    }else{
        validacion.esValida=true;
    }
    return validacion;
};

export const tienePalabrasComunes = (commonPasswords: string[], clave: string): ValidacionClave =>{
    const validacion: ValidacionClave = {esValida: false};
    if(commonPasswords.find((comun)=> comun===clave)){
        validacion.error = __ERROR_PALABRAS_COMUNES;
    }else{
        validacion.esValida = true;
    }
    return validacion;
};

export const obtenerComprobaciones = (clave: string, commonPasswords: string[], nombreUsuario: string): ValidacionClave[] =>{
    return [claveVacia(clave), tieneMayusculasYMinusculas(clave), tieneNumeros(clave), 
        tieneCaracteresEspeciales(clave), longitudMinima(clave), tieneNombreUsuario(nombreUsuario, clave), 
        tienePalabrasComunes(commonPasswords, clave)];
}