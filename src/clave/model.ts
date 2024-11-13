export const commonPasswords: string[] = [
    "password",
    "123456",
    "qwerty",
    "admin",
    "letmein",
    "welcome",
    "monkey",
    "sunshine",
    "password1",
    "123456789",
    "football",
    "iloveyou",
    "1234567",
    "123123",
    "12345678",
    "abc123",
    "qwerty123",
    "1q2w3e4r",
    "baseball",
    "password123",
    "superman",
    "987654321",
    "mypass",
    "trustno1",
    "hello123",
    "dragon",
    "1234",
    "555555",
    "loveme",
    "hello",
    "hockey",
    "letmein123",
    "welcome123",
    "mustang",
    "shadow",
    "12345",
    "passw0rd",
    "abcdef",
    "123abc",
    "football123",
    "master",
    "jordan23",
    "access",
    "flower",
    "qwertyuiop",
    "admin123",
    "iloveyou123",
    "welcome1",
    "monkey123",
    "sunshine1",
    "password12",
    "1234567890",
  ];

export interface ValidacionClave {
    esValida: boolean;
    error?: string;
}

export const __LONGITUD_MINIMA: number = 8;

export const __ERROR_NO_MAYUS_MINUS: string = "La clave debe de tener mayúsculas y minúsculas";
export const __ERROR_NO_NUMEROS: string = "La clave debe de tener números";
export const __ERROR_NO_CARACT_ESPECIAL: string = "La clave debe de tener caracteres especiales";
export const __ERROR_NO_LONG_MINIMA: string = "La clave debe de tener una longitud mínima de 8 caracteres";
export const __ERROR_NOMBRE_USUARIO: string = "La clave no debe tener el nombre del usuario";
export const __ERROR_PALABRAS_COMUNES: string = "La clave no debe de contener palabras comunes";
export const __ERROR_CLAVE_VACIA: string = "Debe de introducir una clave";