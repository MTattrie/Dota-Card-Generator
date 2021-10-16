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
}

// window.addEventListener("load", fetchDotaData);
btn.addEventListener("click", getDotaData);