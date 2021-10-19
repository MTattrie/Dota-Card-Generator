const attributeColor = {
  agi: "#025e10",
  int: "#2b79ff",
  str: "#8c1c06"
};

const url = "https://api.opendota.com";
const card = document.getElementById("card");
const btn = document.getElementById("btn");

var heroData = [];
fetchHeroStats();

/**
let fetchDotaData = () => {
//fetch data from open dota
fetch(url + "api/heroStats")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    heroData = data;
    return data;
  });
};
**/

async function fetchHeroStats() {
  let response = await fetch(url + "/api/heroStats");

  console.log(response.status); // 200
  console.log(response.statusText); // OK

  if (response.status === 200) {
    // handle data
    let data = await response.json();
    heroData = data;
    console.log("fetchHeroStats - heroData");
    console.log(heroData);
  }
}

// randomize data
let getDotaData = () => {
  // Generate random # between 0 and 120 (change to const for max# heroes)
  let id = Math.floor(Math.random() * 121);
  //console.log(id);
  generateCard(id);
};

// Generate card
let generateCard = (id) => {
  // Get necessary data and assign it to variables
  console.log("generateCard - id: " + id);
  const heroName = heroData[id].localized_name;
  const imgSrc = url + heroData[id].img;
  const iconSrc = url + heroData[id].icon;
  const attack_type = heroData[id].img;
  const base_agi = heroData[id].base_agi;
  const base_int = heroData[id].base_int;
  const base_str = heroData[id].base_str;
  const roles = heroData[id].roles;
  const base_health = heroData[id].base_health;
  const base_mana = heroData[id].base_mana;
  const base_armor = heroData[id].base_armor;
  const base_mr = heroData[id].base_mr;
  const move_speed = heroData[id].move_speed;
  const primary_attr = heroData[id].primary_attr;
 
  
  // Set themeColor based on primary attribute (agi/int/str) type r/g/b
  const themeColor = attributeColor[primary_attr];
  console.log("theme color:");
  console.log(themeColor);



  card.innerHTML = `
    <p class="hp">
        <img id="icon" src=${iconSrc} alt=${heroName} />
    </p>
    <img src=${imgSrc} alt=${heroName}/>
    <h2 class="dota-name">${heroName}</h2>
    <div class="attribute">${primary_attr}</div>
    <h3>Roles:</h2>
    <div class="roles">
        
    </div>
    <div class="stats">
        <div>
            <h3>Str</h3>
            <p>${base_str}</p>
        </div>
        <div>
            <h3>Agi</h3>
            <p>${base_agi}</p>
        </div>
        <div>
            <h3>Int</h3>
            <p>${base_int}</p>
        </div>
    </div>
  
  `;
  appendRoles(roles);
  styleCard(themeColor);
};

let appendRoles = (roles) => {
  let x = 0;
  console.log(roles);
  roles.forEach((item) => {
    if(x%3 == 0){
      let br = document.createElement("br");
      document.querySelector(".roles").appendChild(br);
      document.querySelector(".roles").appendChild(br);
    }
    let span = document.createElement("SPAN");
    span.textContent = item;
    document.querySelector(".roles").appendChild(span);
    x++;
  });
};

let styleCard = (color) => {
  card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`;
  card.querySelectorAll(".roles span").forEach(roles => {
    roles.style.backgroundColor = color;
  });
};

// window.addEventListener("load", fetchDotaData);
btn.addEventListener("click", getDotaData);