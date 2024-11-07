import { obtenerTipoIva, Producto, calcularIvaPorProducto, calcularTotalIvaProducto, LineaTicket, TotalPorTipoIva, ResultadoLineaTicket, 
    obtenerResultadoLinea, calcularResultadoTotalTicket, ResultadoTotalTicket } from "./main";

describe("obtenerTipoIva", () =>{
    it("Debería de devolver el tipo de iva aplicable", () => {
        //Arrange
        const producto: Producto = {nombre: "Patatas", precio: 2.03, tipoIva: "superreducidoB"};

        //Act
        const result = obtenerTipoIva(producto);

        //Asert
        const iva: number = 0.04;

        expect(result).toEqual(iva);
    });

    it("Debería de devolver el tipo de iva aplicable", () => {
        //Arrange
        const producto: Producto = {nombre: "Legumbres", precio: 2, tipoIva: "general"};

        //Act
        const result = obtenerTipoIva(producto);

        //Asert
        const iva: number = 0.21;

        expect(result).toEqual(iva);
    });
});

describe("calcularIvaPorProducto", () =>{
    it("Debería de devolver el precio del producto multiplicado por el iva correspondiente", () =>{
        //Arrange
        const producto: Producto = {nombre: "Patatas", precio: 2.03, tipoIva: "superreducidoB"};

        //Act
        const result = calcularIvaPorProducto(producto);

        //Asert
        const ivaProcuto: number = 2.11;

        expect(result).toEqual(ivaProcuto);
    });
});

describe("obtenerResultadoLinea", () =>{
    it("Debería de devolver la interface ResultadoLineaTicket con sus valores correspondientes", () =>{
        //Arrange
        const lineaTicket: LineaTicket[] = [{
            producto: {
              nombre: "Perfume",
              precio: 20,
              tipoIva: "general",
            },
            cantidad: 3,
        },{
            producto: {
                nombre: "Lasaña",
                precio: 5,
                tipoIva: "superreducidoA",
                },
            cantidad: 1,
        }];

        //Act
        const result = obtenerResultadoLinea(lineaTicket);

        //Asert
        const resultadoLinea: ResultadoLineaTicket[] = [{
            nombre: "Perfume",
            cantidad: 3,
            precionSinIva: 20,
            tipoIva: "general",
            precioConIva: 24.20,
            },{
            nombre: "Lasaña",
            cantidad: 1,
            precionSinIva: 5,
            tipoIva: "superreducidoA",
            precioConIva: 5.25,
        }];

        expect(result).toEqual(resultadoLinea);
    });
});

describe("calcularResultadoTotalTikcet", () =>{
    it("Debe devolver el total con iva, total sin iva y el iva total del ticket", () =>{
        //Arrange
        const resultadoLinea: ResultadoLineaTicket[] = [{
            nombre: "Perfume",
            cantidad: 3,
            precionSinIva: 20,
            tipoIva: "general",
            precioConIva: 24.20,
            },{
            nombre: "Lasaña",
            cantidad: 1,
            precionSinIva: 5,
            tipoIva: "superreducidoA",
            precioConIva: 5.25,
        }];

        //Act
        const result = calcularResultadoTotalTicket(resultadoLinea);

        //Asert
        const resultadoTotalTicket: ResultadoTotalTicket = {
            totalSinIva: 65,
            totalConIva: 77.85,
            totalIva: 12.85
        };

        expect(result).toEqual(resultadoTotalTicket);
    });
});

describe("calcularTotalIvaProducto", () =>{
    it("Debería de devolver el total del producto con el iva aplicado", () =>{
        //Arrange
        const resultadoLinea: ResultadoLineaTicket[] = [{
            nombre: "Perfume",
            cantidad: 3,
            precionSinIva: 20,
            tipoIva: "general",
            precioConIva: 24.20,
        },{
            nombre: "Lasaña",
            cantidad: 1,
            precionSinIva: 5,
            tipoIva: "superreducidoA",
            precioConIva: 5.25,
        },{
            nombre: "Legumbres",
            cantidad: 2,
            precionSinIva: 2,
            tipoIva: "general",
            precioConIva: 0.42,
        }];

        //Act
        const result = calcularTotalIvaProducto(resultadoLinea);

        //Asert
        const totalPorIva: TotalPorTipoIva[] = [{
            tipoIva: "general", cuantia: 73.44},{
            tipoIva: "superreducidoA", cuantia: 5.25}
        ];

        expect(result).toEqual(totalPorIva);
    });
});