const $container = document.getElementById("container");

const URL_API = "https://rickandmortyapi.com/api/character";

console.log(URL_API);

fetch(URL_API)
.then((response) => response.json()) 
.then((data) => {
    const characters = data.results;

    for (let character of characters){
        console.log (character);
        $container.innerHTML += `
        <div class="box">
        <p>Name:</p>
        <h3>${character.name}</h3>
        <img class="character-img" src="${character.image}" alt="Imagen de ${character.image}"> 
        <p>Gender: ${character.gender}</p>
        <p>Species: ${character.species}</p>
        <p>Status: ${character.status}</p>
        </div>`;
    }
});
