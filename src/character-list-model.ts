export const __URL: string = "http://localhost:3000";
export const __CHARACTER_URL: string = "http://localhost:3000/personajes";

export interface Character {
    id: string;
    nombre: string;
    apodo: string;
    especialidad: string;
    habilidades: string;
    amigo: string;
    imagen: string;
};