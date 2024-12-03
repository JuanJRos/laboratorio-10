import { getCharacterList } from "../character-list-api";
import { makeCharacterContent } from "../character-list-helper";
import { __URL} from "../character-list-model";

const getUrlName = (): string => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("name") || "";
    console.log(name);
    return decodeURIComponent(name);
};

const writeCharacters = async(): Promise<void> => {
    const characters = await getCharacterList();
    const filterCharacter = characters.filter((character) => character.nombre.toUpperCase().match(getUrlName().toUpperCase()));
    const list = document.getElementById("character-list");
    if(list && list instanceof HTMLDivElement){
        filterCharacter.forEach((character) => {
            const characterContent = makeCharacterContent(character);
            list.appendChild(characterContent);
        });
    }else{
        throw new Error("No se ha encontrado el listado de personajes");
    }
};

document.addEventListener("DOMContentLoaded", writeCharacters);