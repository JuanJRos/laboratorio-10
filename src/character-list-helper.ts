import { __URL, Character } from "./character-list-model";

const makeCharacterImage = (imageCharacter: string, name: string): HTMLImageElement =>{
    const image = document.createElement("img");
    image.src = `${__URL}/${imageCharacter}`;
    image.alt = name;
    return image;
};

const textSection = (text: string): HTMLParagraphElement =>{
    const section = document.createElement("p");
    section.textContent = text;
    return section;
};

export const makeCharacterContent = (character: Character): HTMLDivElement =>{
    const characterElement = document.createElement("div");
    characterElement.classList.add("character-content");

    const image = makeCharacterImage(character.imagen, character.nombre);
    characterElement.appendChild(image);

    const name = textSection(`Nombre: ${character.nombre}`);
    characterElement.appendChild(name);

    const speciality = textSection(`Especialidad: ${character.especialidad}`);
    characterElement.appendChild(speciality);

    const skills = textSection(`Habilidades: ${character.habilidades}`);
    characterElement.appendChild(skills);

    return characterElement;
};