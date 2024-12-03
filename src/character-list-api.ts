import Axios from "axios";
import { Character, __CHARACTER_URL } from "./character-list-model";

export const getCharacterList = async (): Promise<Character[]> => {
    try{
        const dataList = await Axios.get(__CHARACTER_URL);
        return dataList.data;
    }catch (error){
        throw new Error("Error al cargar la lista de personajes");
    }
};
