import "./style.css";

type TipoIva =
  | "general"
  | "reducido"
  | "superreducidoA"
  | "superreducidoB"
  | "superreducidoC"
  | "sinIva";

const __IVA_GENERAL = 0.21; //21%
const __REDUCIDO = 0.1; // 10%
const __SUPER_REDUCIDO_A = 0.05; // 5%
const __SUPER_REDUCIDO_B = 0.04; // 4%
const __SUPER_REDUCIDO_C = 0;
const __SIN_IVA = 0;

export interface Producto {
  nombre: string;
  precio: number;
  tipoIva: TipoIva;
};

export interface LineaTicket {
    producto: Producto;
    cantidad: number;
};

const productos: LineaTicket[] = [
    {
      producto: {
        nombre: "Legumbres",
        precio: 2,
        tipoIva: "general",
      },
      cantidad: 2,
    },
    {
      producto: {
        nombre: "Perfume",
        precio: 20,
        tipoIva: "general",
      },
      cantidad: 3,
    },
    {
      producto: {
        nombre: "Leche",
        precio: 1,
        tipoIva: "superreducidoC",
      },
      cantidad: 6,
    },
    {
      producto: {
        nombre: "Lasaña",
        precio: 5,
        tipoIva: "superreducidoA",
      },
      cantidad: 1,
    },
];

export interface ResultadoLineaTicket {
    nombre: string;
    cantidad: number;
    precionSinIva: number;
    tipoIva: TipoIva;
    precioConIva: number;
};

export interface ResultadoTotalTicket {
  totalSinIva: number;
  totalConIva: number;
  totalIva: number;
}
export interface TotalPorTipoIva {
    tipoIva: TipoIva;
    cuantia : number;
};

interface TicketFinal {
  lineas: ResultadoLineaTicket[];
  total: ResultadoTotalTicket;
  desgloseIva: TotalPorTipoIva[];
}

export const calculaTicket = (lineasTicket: LineaTicket[]): TicketFinal => {
  const resultadoLinea: ResultadoLineaTicket[] = obtenerResultadoLinea(lineasTicket);  
  return{
      lineas: resultadoLinea,
      total: calcularResultadoTotalTicket(resultadoLinea),
      desgloseIva: calcularTotalIvaProducto(resultadoLinea)
    };
};

export const calcularIvaPorProducto = (producto: Producto): number => {
    return parseFloat((producto.precio * obtenerTipoIva(producto)+producto.precio).toFixed(2));
};

export function obtenerTipoIva(producto: Producto): number{
    let iva: number = 0;
    switch(producto.tipoIva){
        case "general":{
            iva =  __IVA_GENERAL;
            break;
        }
        case "sinIva":{
            iva =  __SIN_IVA;
            break;
        }
        case "reducido":{
            iva =  __REDUCIDO;
            break;
        }
        case "superreducidoA":{
            iva =  __SUPER_REDUCIDO_A;
            break;
        }
        case "superreducidoB":{
            iva =  __SUPER_REDUCIDO_B;
            break;
        }
        case "superreducidoC":{
            iva =  __SUPER_REDUCIDO_C;
            break;
        }
    };
    return iva;
  };

export const obtenerResultadoLinea = (lineasTicket: LineaTicket[]): ResultadoLineaTicket[] => {
  let resultadoLineaTicket: ResultadoLineaTicket[] = [];
  for(let i = 0; i < lineasTicket.length; i++){
      resultadoLineaTicket.push({
          nombre: lineasTicket[i].producto.nombre,
          cantidad: lineasTicket[i].cantidad,
          precionSinIva: lineasTicket[i].producto.precio,
          tipoIva: lineasTicket[i].producto.tipoIva,
          precioConIva: calcularIvaPorProducto(lineasTicket[i].producto),
        },);   
  };
  return resultadoLineaTicket;
};

export function calcularResultadoTotalTicket(resultadoLineaTicket: ResultadoLineaTicket[]): ResultadoTotalTicket{
  const totalSinIva: number = parseFloat(resultadoLineaTicket.reduce((acc: number, resultadoLineaTicket) => 
    acc + (resultadoLineaTicket.precionSinIva*resultadoLineaTicket.cantidad), 0).toFixed(2));
  const totalConIva: number = parseFloat(resultadoLineaTicket.reduce((acc: number, resultadoLineaTicket) => 
    acc + (resultadoLineaTicket.precioConIva*resultadoLineaTicket.cantidad), 0).toFixed(2));
  const totalIva: number = parseFloat((totalConIva-totalSinIva).toFixed(2));
  return {totalSinIva: totalSinIva,
    totalConIva: totalConIva,
    totalIva: totalIva
  };
};

export function calcularTotalIvaProducto(resultadoLineaTicket: ResultadoLineaTicket[]): TotalPorTipoIva[]{
  let totalPorIva: TotalPorTipoIva[]=[];
  resultadoLineaTicket.forEach((resultadoLineaT)=> {   
    if(totalPorIva.find((total) => total.tipoIva===resultadoLineaT.tipoIva)===undefined){
      totalPorIva.push({tipoIva: resultadoLineaT.tipoIva, 
      cuantia: parseFloat((resultadoLineaT.cantidad*resultadoLineaT.precioConIva).toFixed(2))
    })}else{
      sumarDuplicadoTipoIva(totalPorIva, resultadoLineaT);
  };
  });
  return totalPorIva;
};

const sumarDuplicadoTipoIva = (totalPorTipoIva: TotalPorTipoIva[], resultadoLineaTicket: ResultadoLineaTicket): void =>{
  const importe = totalPorTipoIva.find((total) => total.tipoIva===resultadoLineaTicket.tipoIva);
  if(importe!==null && importe!==undefined){
    importe.cuantia += parseFloat((resultadoLineaTicket.cantidad*resultadoLineaTicket.precioConIva).toFixed(2));
  }
};

console.log(calculaTicket(productos));
