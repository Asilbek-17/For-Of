const elPokeList = document.querySelector(".pokemon-list");
const elForm = document.querySelector(".js-form");
const elINp = document.querySelector(".search-inp");

function renderpokes(kino){
    elPokeList.innerHTML = ""
    
    kino.forEach(item => {
        
        const newPokeItem = document.createElement("li");
        const newPokeTitle = document.createElement("h3");
        const newPokeNum = document.createElement("span");
        const newPokeImg = document.createElement("img");
        const newPokeType = document.createElement("p");
        const newPokeWeaknesses = document.createElement("p");
        const newPokeWeight = document.createElement("p");
        const newPokeTime = document.createElement("time");
        
        // Style
        newPokeItem.classList.add("pokemon-item");
        newPokeTitle.classList.add("pokemon-title");
        newPokeImg.classList.add("pokemon-img");
        newPokeNum.classList.add("pokemon-span");
        newPokeType.classList.add("pokemon-text");
        newPokeWeaknesses.classList.add("pokemon-text");
        newPokeWeight.classList.add("pokemon-text");
        newPokeTime.classList.add("pokemon-time");
        
        // Elementlarga qiymat berish
        newPokeTitle.textContent = item.name;
        newPokeNum.textContent = item.num;
        
        newPokeImg.src = item.img;
        newPokeImg.width = "248";
        newPokeImg.height = "280";
        newPokeImg.alt = item.name;
        
        newPokeType.textContent = item.type.join(" ");
        
        newPokeTime.textContent = item.spawn_time;
        newPokeWeaknesses.textContent = item.weaknesses.join(", ");
        newPokeWeaknesses.style.fontSize = "14px";

        newPokeWeight.textContent = item.weight;

        
        // Elementlarni liga joylash
        newPokeItem.appendChild(newPokeTitle);
        newPokeItem.appendChild(newPokeNum);
        newPokeItem.appendChild(newPokeImg);
        newPokeItem.appendChild(newPokeType);
        newPokeItem.appendChild(newPokeTime);
        newPokeItem.appendChild(newPokeWeaknesses);
        newPokeItem.appendChild(newPokeWeight);
        
        elPokeList.appendChild(newPokeItem);
    });
}

// Selection
const elSelect = document.querySelector(".js-select");

const weaknesses = [];

pokemons.forEach(itm => {
    itm.weaknesses.forEach (item => {
        if (! weaknesses.includes(item)) {
            weaknesses.push(item)
        }
    })
});

const selectionFragment = document.createDocumentFragment();

weaknesses.forEach(weakness => {
    const newOption = document.createElement("option");

    newOption.textContent = weakness;
    newOption.value = weakness;

    selectionFragment.appendChild(newOption);
});

elSelect.appendChild(selectionFragment);

// SORT
const pokeSort = document.querySelector(".js-sort")

function sortPokemons(poke, sortTypes) {
    if(sortTypes === "Az") {
        poke.sort((a , b) => {
            return String(a.name).toLowerCase().charCodeAt(0) - String(b.name).toLowerCase().charCodeAt(0) 
        });
    };
    
    if(sortTypes === "Za") {
        poke.sort((a , b) => {
            return String(b.name).toLowerCase().charCodeAt(0) - String(a.name).toLowerCase().charCodeAt(0) 
        });
    };
    
    if(sortTypes === "No") {
        poke.sort((a , b) => {
            return a.id - b.id
        });
    };
    
    if(sortTypes === "On") {
        poke.sort((a , b) => {
            return b.id - a.id
        });
    };
    
    if(sortTypes === "Tz") {
        poke.sort((a , b) => {
            return parseFloat(a.weight) - parseFloat(b.weight) 
        });
    };
    
    if(sortTypes === "Zt") {
        poke.sort((a , b) => {
            return parseFloat(b.weight) - parseFloat(a.weight) 
        });
    };
};

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    const newInputValue = elINp.value.trim();
    const nweSelectValue = elSelect.value;
    
    const regexTitle = new RegExp(newInputValue, "gi");
    
    const searchPokemons = pokemons.filter(item => {
        const searchPokemonsInput = item.name.match(regexTitle) && (String(item.weaknesses).match(nweSelectValue) || nweSelectValue === "all") 
        
        return searchPokemonsInput
    });
    
    if(searchPokemons.length > 0) {
        sortPokemons(searchPokemons, pokeSort.value)
        renderpokes(searchPokemons);
    } else {
        elPokeList.innerHTML = "poke not found !"
    }
})

renderpokes(pokemons)