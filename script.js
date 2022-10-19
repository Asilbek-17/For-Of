var elPokeList = document.querySelector(".pokemon-list");
var PokemonsSlice = pokemons.slice(0 , 148);

for (var pokemon of PokemonsSlice) {
    // DOMga elemnt yaratish
    var newPokeItem = document.createElement("li");
    var newPokeTitle = document.createElement("h3");
    var newPokeNum = document.createElement("span");
    var newPokeImg = document.createElement("img");
    var newPokeType = document.createElement("p");
    var newPokeTime = document.createElement("time");
    
    // Style
    newPokeItem.classList.add("pokemon-item");
    newPokeTitle.classList.add("pokemon-title");
    newPokeImg.classList.add("pokemon-img");
    newPokeNum.classList.add("pokemon-span");
    newPokeType.classList.add("pokemon-text");
    newPokeTime.classList.add("pokemon-time");
    
    // Elementlarga qiymat berish
    newPokeTitle.textContent = pokemon.name;
    newPokeNum.textContent = pokemon.num;
    
    newPokeImg.src = pokemon.img;
    newPokeImg.width = "248";
    newPokeImg.height = "280";
    newPokeImg.alt = pokemon.name;
    
    newPokeType.textContent = pokemon.type.join(" ");
    
    newPokeTime.textContent = pokemon.spawn_time;
    
    // Elementlarni liga joylash
    newPokeItem.appendChild(newPokeTitle);
    newPokeItem.appendChild(newPokeNum);
    newPokeItem.appendChild(newPokeImg);
    newPokeItem.appendChild(newPokeType);
    newPokeItem.appendChild(newPokeTime);
    
    elPokeList.appendChild(newPokeItem);
}