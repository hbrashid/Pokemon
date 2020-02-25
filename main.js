window.onload = function() {
  getPokemon();
}



// define array's
let pokemons = [];


const getPokemon = () => {
  fetch('https://pokeapi.co/api/v2/pokemon/?limit=100')
    .then((response) => { return response.json()})

    .then((results) => {
      pokemon = results.results;
      fetchPokemon(pokemon);
      
    })
    // .then((results) => {
    //   pokemon = results.results;
    //   displayPokemon(pokemon);
      
    // })
}

const fetchPokemon = (pokemon) =>{
  console.log(pokemon)

}

// const displayPokemon = (pokemon) => {
  
//     const allPosts = document.getElementById("displayPokemon");
//     contacts.map((pokemon) => {
      
//       const div = document.createElement("div");
//       div.setAttribute("class", "pokemon")

//       const picture = document.createElement("img");
//       picture.src = displayPokemon
//       const name = document.createElement("p");

//       allPosts.append(div);
//       div.appendChild(name);
//       div.appendChild(picture);
      
//       const button = document.createElement("button");
//       button.setAttribute("id", "Details")
//       button.innerHTML = "Contact Details";
//       div.appendChild(button);

//       button.onclick = function() {

//       };

//     });
// }

