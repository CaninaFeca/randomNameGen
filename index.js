var adj = [];
var text = fetch("./adjectives.json")
  .then((response) => response.json())
  .then((result) => {
    adj = result;
  });

var names = [];
text = fetch("./names.json")
  .then((response) => response.json())
  .then((result) => {
    names = result;
  });

$(document).ready(function () {
  $("#btn").click(function () {
    var randomAdj = adj[Math.floor(Math.random() * adj.length) + 1];
    var randomName = names[Math.floor(Math.random() * names.length) + 1];
    randomName = capitalizeFirstLetter(randomName);

    console.log(randomAdj + randomName);
    $("h2").html(randomAdj + randomName);
  });
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
