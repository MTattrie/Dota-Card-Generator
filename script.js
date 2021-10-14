const url = "https://api.opendota.com/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");

fetchHeroStats();

// fetch data from open dota
// fetch(url + "api/heroStats")
//   .then((response) => response.json())
//   .then((data) => console.log(data[23].name));
async function fetchHeroStats() {
  let response = await fetch(url + "api/heroStats");

  console.log(response.status); // 200
  console.log(response.statusText); // OK

  if (response.status === 200) {
    let data = await response.json();
    console.log(data);
    console.log(data[getDotaData()].name);
    // handle data
  }
}

// randomize data
let getDotaData = () => {
  // Generate random # between 0 and 120
  let id = Math.floor(Math.random() * 121);
  console.log(id);
  return id;
};

// display card data

btn.addEventListener("click", getDotaData);