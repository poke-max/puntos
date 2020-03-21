var mushs = [
  "100",   // Mario
  "10",    // Luigi
  "1000",  // Peach
  "1"      // Toad

  // A change in the values will affect all places at the same time.

];

var options = {
  valueNames: [ 'name', 'mushrooms' ],
  item: '<tr><td class="mdl-data-table__cell--non-numeric name"></td><td class="mushrooms"></td></tr>'
};

var values = [
  {name: 'Mario', mushrooms: mushs[0]},
  {name: 'Luigi', mushrooms: mushs[1]},
  {name: 'Peach', mushrooms: mushs[2]},
  {name: 'Toad' , mushrooms: mushs[3]}
];

var userList = new List('users', options, values);

  document.getElementById("mushroom_0").innerHTML = mushs[0];
  document.getElementById("mushroom_1").innerHTML = mushs[1];
  document.getElementById("mushroom_2").innerHTML = mushs[2];
  document.getElementById("mushroom_3").innerHTML = mushs[3];
