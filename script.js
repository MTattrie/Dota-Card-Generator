const url = "https://api.opendota.com/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");

let getDotaData = () => {
  // Generate random # between 0 and 120
  let id = Math.floor(Math.random() * 121);
  console.log(id);
};

btn.addEventListener("click", getDotaData);


