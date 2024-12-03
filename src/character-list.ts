import {__URL } from "./character-list-model";
import { getCharacterList } from "./character-list-api";
import { makeCharacterContent } from "./character-list-helper";

const writeCharacters = async(): Promise<void> => {
    const characters = await getCharacterList();
    const list = document.getElementById("character-list");
    if(list && list instanceof HTMLDivElement){
        characters.forEach((character) => {
            const characterContent = makeCharacterContent(character);
            list.appendChild(characterContent);
        });
    }else{
        throw new Error("No se ha encontrado el listado de personajes");
    }
};

const filterCharacter = (name: string) =>{
    window.location.href= `../character-filter/index.html?name=${encodeURIComponent(name)}`;
}

const characterNameInput = document.getElementById("name");

const filterButton = document.getElementById("button-filter");
if(filterButton && filterButton instanceof HTMLButtonElement && characterNameInput && characterNameInput instanceof HTMLInputElement){
    filterButton.addEventListener("click", () => filterCharacter(characterNameInput.value));
}

document.addEventListener("DOMContentLoaded", writeCharacters);