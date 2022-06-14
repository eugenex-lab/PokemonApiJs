const bucket = document.querySelector('#bucket');
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'



for (let i = 1; i < 101; i++) {
    const pokemon = document.createElement('div');
    const label = document.createElement('label');
    pokemon.classList.add('pokemon');
    label.innerText = 'Pokemon #' +  i;
    // pokemon.classList.add('pokemon');
    const newImg = document.createElement('img');
    newImg.src = baseUrl +  i + '.png';
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    bucket.appendChild(pokemon);

}