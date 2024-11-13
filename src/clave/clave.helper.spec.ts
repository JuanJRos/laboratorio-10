import {ValidacionClave, __ERROR_CLAVE_VACIA, __ERROR_NOMBRE_USUARIO, __ERROR_NO_CARACT_ESPECIAL, __ERROR_NO_LONG_MINIMA, __ERROR_NO_MAYUS_MINUS, __ERROR_NO_NUMEROS, __ERROR_PALABRAS_COMUNES, commonPasswords} from "./model";
import {tieneMayusculasYMinusculas, claveVacia, tieneNumeros, tieneCaracteresEspeciales, longitudMinima, tieneNombreUsuario, tienePalabrasComunes} from "./clave.helper";

describe("claveVacia", () =>{
    it("Debería de devolver esVálida false y el error correspondiente", () =>{
        //Arrange
        const clave: string = "";

        //Act
        const result = claveVacia(clave);

        //Asert
        const validacion: ValidacionClave = {esValida: false, error: __ERROR_CLAVE_VACIA};

        expect(result).toEqual(validacion);
    });
    it("Debería de devolver esVálida true", () =>{
        //Arrange
        const clave: string = "pruebaClave";

        //Act
        const result = claveVacia(clave);

        //Asert
        const validacion: ValidacionClave = {esValida: true};

        expect(result).toEqual(validacion);
    });
});


describe("tieneMayusculasYMinusculas", () =>{
    it("Debería devolver esVálida false y el error correspondiente", () =>{
        //Arrange
        const clave: string = "sinmayusculasniminusculas";

        //Act
        const result = tieneMayusculasYMinusculas(clave);

        //Asert
        const validacion: ValidacionClave = {esValida: false, error: __ERROR_NO_MAYUS_MINUS};

        expect(result).toEqual(validacion);
    });
    it("Debería devolver esVálida true", () =>{
        //Arrange
        const clave: string = "mayUsculasYminuSculas";

        //Act
        const result = tieneMayusculasYMinusculas(clave);

        //Asert
        const validacion: ValidacionClave = {esValida: true};

        expect(result).toEqual(validacion);
    });
});

describe("tieneNumeros", () =>{
    it("Debería devolver esVálida false y el error correspondiente", () =>{
        //Arrange
        const clave: string = "notienenumeros";

        //Act
        const result = tieneNumeros(clave);

        //Asert
        const validacion: ValidacionClave = {esValida: false, error: __ERROR_NO_NUMEROS};

        expect(result).toEqual(validacion);
    });
    it("Debería devolver esVálida true", () =>{
        //Arrange
        const clave: string = "t1enenumer8s";

        //Act
        const result = tieneNumeros(clave);

        //Asert
        const validacion: ValidacionClave = {esValida: true};

        expect(result).toEqual(validacion);
    });
});

describe("tieneCaracteresEspeciales", () =>{
    it("Debería devover esVálida false y el error correspondiente", () =>{
        //Arrange
        const clave: string = "notienecaracteresespeciales";

        //Act
        const result = tieneCaracteresEspeciales(clave);

        //Asert
        const validacion: ValidacionClave = {esValida: false, error: __ERROR_NO_CARACT_ESPECIAL};

        expect(result).toEqual(validacion);
    });
    it("Debería devover esVálida true", () =>{
        //Arrange
        const clave: string = "[tienecaracteresespeciale/s";

        //Act
        const result = tieneCaracteresEspeciales(clave);

        //Asert
        const validacion: ValidacionClave = {esValida: true};

        expect(result).toEqual(validacion);
    });
});

describe("longitudMinima", () =>{
    it("Debería devolver esVálida false y el error correspondiente", () =>{
        //Arrange
        const clave: string = "cinco";

        //Act
        const result = longitudMinima(clave);

        //Asert
        const validacion: ValidacionClave = {esValida: false, error: __ERROR_NO_LONG_MINIMA};

        expect(result).toEqual(validacion);
    });
    it("Debería devolver esVálida true", () =>{
        //Arrange
        const clave: string = "12345678";

        //Act
        const result = longitudMinima(clave);

        //Asert
        const validacion: ValidacionClave = {esValida: true};

        expect(result).toEqual(validacion);
    });
});

describe("tieneNombreUsuario", () =>{
    it("Debería devolver esVálida false y el error correspondiente", () =>{
        //Arrange
        const usuario: string = "usuario";
        const clave: string = "usuario";

        //Act
        const result = tieneNombreUsuario(usuario, clave);

        //Asert
        const validacion: ValidacionClave = {esValida: false, error: __ERROR_NOMBRE_USUARIO};

        expect(result).toEqual(validacion);
    });
    it("Debería devolver esVálida true", () =>{
        //Arrange
        const usuario: string = "usuario";
        const clave: string = "adminisrador";

        //Act
        const result = tieneNombreUsuario(usuario, clave);

        //Asert
        const validacion: ValidacionClave = {esValida: true};

        expect(result).toEqual(validacion);
    });
});

describe("tienePalabrasComunes", () =>{
    it("Debería devolver esVálida false y el error correspondiente", () =>{
        //Arrange
        const clave: string = "football";

        //Act
        const result = tienePalabrasComunes(commonPasswords, clave);

        //Asert
        const validacion: ValidacionClave = {esValida: false, error: __ERROR_PALABRAS_COMUNES};

        expect(result).toEqual(validacion);
    });
    it("Debería devolver esVálida true", () =>{
        //Arrange
        const clave: string = "rebuscada";

        //Act
        const result = tienePalabrasComunes(commonPasswords, clave);

        //Asert
        const validacion: ValidacionClave = {esValida: true};

        expect(result).toEqual(validacion);
    });
});