function sunshine() {
  var atkMewtwo = document.getElementById('atkMewtwo').value;
   if(atkMewtwo === ""){atkMewtwo = 480}

   var masaMewtwo = document.getElementById('masaMewtwo').value;
   if(masaMewtwo === ""){masaMewtwo = 0}
   atksMewtwo = parseInt(atkMewtwo) + parseInt(masaMewtwo);

  var potMewtwo = document.getElementById('potMewtwo').value;

  var criMewtwo = document.getElementById("criMewtwo").checked; {
    if (criMewtwo == true) { criMewtwo = 1.5 }
    else { criMewtwo = 1 }
  }

  var aumMewtwo = document.getElementById("aumMewtwo").value;

  var pasMewtwo = document.getElementById("pasMewtwo").value;

  var tipoMewtwo = document.getElementById("tipoMewtwo").value;

  var selectField = document.getElementById("selectField").value;

  var pasdMewtwo = document.getElementById('pasdMewtwo').value;

  var maspMewtwo = document.getElementById("maspMewtwo").value;

  if(maspMewtwo === ""){maspMewtwo = 0}

  if (tipoMewtwo == selectField) {tipoMewtwo = 2}
  else {tipoMewtwo = 1};

parMewtwo = parseInt(maspMewtwo) + parseInt(potMewtwo);

pts2Mewtwo = (tipoMewtwo * atkMewtwo * parMewtwo * criMewtwo * aumMewtwo * pasMewtwo / 100);


ptsMewtwo = (tipoMewtwo * atksMewtwo * parMewtwo * criMewtwo * aumMewtwo * pasMewtwo * pasdMewtwo / 100).toFixed(1);

  document.getElementById("ptsMewtwo").value = ptsMewtwo;

  var perMewtwo = 100 * ((ptsMewtwo * 100) / (atkMewtwo * potMewtwo)) - 100;

document.getElementById('perMewtwo').value = (perMewtwo).toFixed(1) + "%";



/*/ Lycanroc Roca Afilada /*/
var atkLycanroc = document.getElementById('atkLycanroc').value;
 if(atkLycanroc === ""){atkLycanroc = 401}

 var masaLycanroc = document.getElementById('masaLycanroc').value;
 if(masaLycanroc === ""){masaLycanroc = 0}
 atksLycanroc = parseInt(atkLycanroc) + parseInt(masaLycanroc);

var potLycanroc = document.getElementById('potLycanroc').value;

var criLycanroc = document.getElementById("criLycanroc").checked; {
  if (criLycanroc == true) { criLycanroc = 1.5 }
  else { criLycanroc = 1 }
}

var aumLycanroc = document.getElementById("aumLycanroc").value;

var pasLycanroc = document.getElementById("pasLycanroc").value;

var tipoLycanroc = document.getElementById("tipoLycanroc").value;

var selectField = document.getElementById("selectField").value;

var pasdLycanroc = document.getElementById('pasdLycanroc').value;

var maspLycanroc = document.getElementById("maspLycanroc").value;

if(maspLycanroc === ""){maspLycanroc = 0}

if (tipoLycanroc == selectField) {tipoLycanroc = 2}
else {tipoLycanroc = 1};

parLycanroc = parseInt(maspLycanroc) + parseInt(potLycanroc);

pts2Lycanroc = (tipoLycanroc * atkLycanroc * parLycanroc * criLycanroc * aumLycanroc * pasLycanroc / 100);


ptsLycanroc = (tipoLycanroc * atksLycanroc * parLycanroc * criLycanroc * aumLycanroc * pasLycanroc * pasdLycanroc / 100).toFixed(1);

document.getElementById("ptsLycanroc").value = ptsLycanroc;

var perLycanroc = 100 * ((ptsLycanroc * 100) / (atkLycanroc * potLycanroc)) - 100;

document.getElementById('perLycanroc').value = (perLycanroc).toFixed(1) + "%";


//Mismagius Bola Sombra/*/

var atkMismagius = document.getElementById('atkMismagius').value;
 if(atkMismagius === ""){atkMismagius = 323}

 var masaMismagius = document.getElementById('masaMismagius').value;
 if(masaMismagius === ""){masaMismagius = 0}
 atksMismagius = parseInt(atkMismagius) + parseInt(masaMismagius);

var potMismagius = document.getElementById('potMismagius').value;

var criMismagius = document.getElementById("criMismagius").checked; {
  if (criMismagius == true) { criMismagius = 1.5 }
  else { criMismagius = 1 }
}

var aumMismagius = document.getElementById("aumMismagius").value;

var pasMismagius = document.getElementById("pasMismagius").value;

var tipoMismagius = document.getElementById("tipoMismagius").value;

var selectField = document.getElementById("selectField").value;

var pasdMismagius = document.getElementById('pasdMismagius').value;

var maspMismagius = document.getElementById("maspMismagius").value;

if(maspMismagius === ""){maspMismagius = 0}

if (tipoMismagius == selectField) {tipoMismagius = 2}
else {tipoMismagius = 1};

parMismagius = parseInt(maspMismagius) + parseInt(potMismagius);

pts2Mismagius = (tipoMismagius * atkMismagius * parMismagius * criMismagius * aumMismagius * pasMismagius / 100);


ptsMismagius = (tipoMismagius * atksMismagius * parMismagius * criMismagius * aumMismagius * pasMismagius * pasdMismagius / 100).toFixed(1);

document.getElementById("ptsMismagius").value = ptsMismagius;

var perMismagius = 100 * ((ptsMismagius * 100) / (atkMismagius * potMismagius)) - 100;

document.getElementById('perMismagius').value = (perMismagius).toFixed(1) + "%";



var atkCharizard = document.getElementById('atkCharizard').value;
 if(atkCharizard === ""){atkCharizard = 380}

 var masaCharizard = document.getElementById('masaCharizard').value;
 if(masaCharizard === ""){masaCharizard = 0}
 atksCharizard = parseInt(atkCharizard) + parseInt(masaCharizard);

var potCharizard = document.getElementById('potCharizard').value;

var criCharizard = document.getElementById("criCharizard").checked; {
  if (criCharizard == true) { criCharizard = 1.5 }
  else { criCharizard = 1 }
}

var aumCharizard = document.getElementById("aumCharizard").value;

var pasCharizard = document.getElementById("pasCharizard").value;

var tipoCharizard = document.getElementById("tipoCharizard").value;

var selectField = document.getElementById("selectField").value;

var pasdCharizard = document.getElementById('pasdCharizard').value;

var maspCharizard = document.getElementById("maspCharizard").value;

if(maspCharizard === ""){maspCharizard = 0}

if (tipoCharizard == selectField) {tipoCharizard = 2}
else {tipoCharizard = 1};

parCharizard = parseInt(maspCharizard) + parseInt(potCharizard);

pts2Charizard = (tipoCharizard * atkCharizard * parCharizard * criCharizard * aumCharizard * pasCharizard / 100);


ptsCharizard = (tipoCharizard * atksCharizard * parCharizard * criCharizard * aumCharizard * pasCharizard * pasdCharizard / 100).toFixed(1);

document.getElementById("ptsCharizard").value = ptsCharizard;

var perCharizard = 100 * ((ptsCharizard * 100) / (atkCharizard * potCharizard)) - 100;

document.getElementById('perCharizard').value = (perCharizard).toFixed(1) + "%";




/*/Solgaleo Onda Certera/*/

var atkSolgaleo = document.getElementById('atkSolgaleo').value;
if (atkSolgaleo === "") { atkSolgaleo = 355 }

var masaSolgaleo = document.getElementById('masaSolgaleo').value;
if (masaSolgaleo === "") { masaSolgaleo = 0 }
atksSolgaleo = parseInt(atkSolgaleo) + parseInt(masaSolgaleo);

var potSolgaleo = document.getElementById('potSolgaleo').value;

var criSolgaleo = document.getElementById("criSolgaleo").checked; {
  if (criSolgaleo == true) { criSolgaleo = 1.5 }
  else { criSolgaleo = 1 }
}

var aumSolgaleo = document.getElementById("aumSolgaleo").value;

var pasSolgaleo = document.getElementById("pasSolgaleo").value;

var tipoSolgaleo = document.getElementById("tipoSolgaleo").value;

var selectField = document.getElementById("selectField").value;

var pasdSolgaleo = document.getElementById('pasdSolgaleo').value;

var maspSolgaleo = document.getElementById("maspSolgaleo").value;

if (maspSolgaleo === "") { maspSolgaleo = 0 }

if (tipoSolgaleo == selectField) { tipoSolgaleo = 2 }
else { tipoSolgaleo = 1 };

parSolgaleo = parseInt(maspSolgaleo) + parseInt(potSolgaleo);

pts2Solgaleo = (tipoSolgaleo * atkSolgaleo * parSolgaleo * criSolgaleo * aumSolgaleo * pasSolgaleo / 100);


ptsSolgaleo = (tipoSolgaleo * atksSolgaleo * parSolgaleo * criSolgaleo * aumSolgaleo * pasSolgaleo * pasdSolgaleo / 100).toFixed(1);

document.getElementById("ptsSolgaleo").value = ptsSolgaleo;

var perSolgaleo = 100 * ((ptsSolgaleo * 100) / (atkSolgaleo * potSolgaleo)) - 100;

document.getElementById('perSolgaleo').value = (perSolgaleo).toFixed(1) + "%";


/*/Solgaleo Meteo./*/

var atkSolgaleoM = document.getElementById('atkSolgaleoM').value;
if (atkSolgaleoM === "") { atkSolgaleoM = 409 }

var masaSolgaleoM = document.getElementById('masaSolgaleoM').value;
if (masaSolgaleoM === "") { masaSolgaleoM = 0 }
atksSolgaleoM = parseInt(atkSolgaleoM) + parseInt(masaSolgaleoM);

var potSolgaleoM = document.getElementById('potSolgaleoM').value;

var criSolgaleoM = document.getElementById("criSolgaleoM").checked; {
  if (criSolgaleoM == true) { criSolgaleoM = 1.5 }
  else { criSolgaleoM = 1 }
}

var aumSolgaleoM = document.getElementById("aumSolgaleoM").value;

var pasSolgaleoM = document.getElementById("pasSolgaleoM").value;

var tipoSolgaleoM = document.getElementById("tipoSolgaleoM").value;

var selectField = document.getElementById("selectField").value;

var pasdSolgaleoM = document.getElementById('pasdSolgaleoM').value;

var maspSolgaleoM = document.getElementById("maspSolgaleoM").value;

if (maspSolgaleoM === "") { maspSolgaleoM = 0 }

if (tipoSolgaleoM == selectField) { tipoSolgaleoM = 2 }
else { tipoSolgaleoM = 1 };

parSolgaleoM = parseInt(maspSolgaleoM) + parseInt(potSolgaleoM);

pts2SolgaleoM = (tipoSolgaleoM * atkSolgaleoM * parSolgaleoM * criSolgaleoM * aumSolgaleoM * pasSolgaleoM / 100);


ptsSolgaleoM = (tipoSolgaleoM * atksSolgaleoM * parSolgaleoM * criSolgaleoM * aumSolgaleoM * pasSolgaleoM * pasdSolgaleoM / 100).toFixed(1);

document.getElementById("ptsSolgaleoM").value = ptsSolgaleoM;

var perSolgaleoM = 100 * ((ptsSolgaleoM * 100) / (atkSolgaleoM * potSolgaleoM)) - 100;

document.getElementById('perSolgaleoM').value = (perSolgaleoM).toFixed(1) + "%";


/*/ Dragonite H. /*/

var atkDragonite = document.getElementById('atkDragonite').value;
if (atkDragonite === "") { atkDragonite = 402 }

var masaDragonite = document.getElementById('masaDragonite').value;
if (masaDragonite === "") { masaDragonite = 0 }
atksDragonite = parseInt(atkDragonite) + parseInt(masaDragonite);

var potDragonite = document.getElementById('potDragonite').value;

var criDragonite = document.getElementById("criDragonite").checked; {
  if (criDragonite == true) { criDragonite = 1.5 }
  else { criDragonite = 1 }
}

var aumDragonite = document.getElementById("aumDragonite").value;

var pasDragonite = document.getElementById("pasDragonite").value;

var tipoDragonite = document.getElementById("tipoDragonite").value;

var selectField = document.getElementById("selectField").value;

var pasdDragonite = document.getElementById('pasdDragonite').value;

var maspDragonite = document.getElementById("maspDragonite").value;

if (maspDragonite === "") { maspDragonite = 0 }

if (tipoDragonite == selectField) { tipoDragonite = 2 }
else { tipoDragonite = 1 };

parDragonite = parseInt(maspDragonite) + parseInt(potDragonite);

pts2Dragonite = (tipoDragonite * atkDragonite * parDragonite * criDragonite * aumDragonite * pasDragonite / 100);


ptsDragonite = (tipoDragonite * atksDragonite * parDragonite * criDragonite * aumDragonite * pasDragonite * pasdDragonite / 100).toFixed(1);

document.getElementById("ptsDragonite").value = ptsDragonite;

var perDragonite = 100 * ((ptsDragonite * 100) / (atkDragonite * potDragonite)) - 100;

document.getElementById('perDragonite').value = (perDragonite).toFixed(1) + "%";


/*/Sceptile Lluevehojas/*/

var atkSceptile = document.getElementById('atkSceptile').value;
 if(atkSceptile === ""){atkSceptile = 379}

 var masaSceptile = document.getElementById('masaSceptile').value;
 if(masaSceptile === ""){masaSceptile = 0}
 atksSceptile = parseInt(atkSceptile) + parseInt(masaSceptile);

var potSceptile = document.getElementById('potSceptile').value;

var criSceptile = document.getElementById("criSceptile").checked; {
  if (criSceptile == true) { criSceptile = 1.5 }
  else { criSceptile = 1 }
}

var aumSceptile = document.getElementById("aumSceptile").value;

var pasSceptile = document.getElementById("pasSceptile").value;

var tipoSceptile = document.getElementById("tipoSceptile").value;

var selectField = document.getElementById("selectField").value;

var pasdSceptile = document.getElementById('pasdSceptile').value;

var maspSceptile = document.getElementById("maspSceptile").value;

if(maspSceptile === ""){maspSceptile = 0}

if (tipoSceptile == selectField) {tipoSceptile = 2}
else {tipoSceptile = 1};

parSceptile = parseInt(maspSceptile) + parseInt(potSceptile);

pts2Sceptile = (tipoSceptile * atkSceptile * parSceptile * criSceptile * aumSceptile * pasSceptile / 100);


ptsSceptile = (tipoSceptile * atksSceptile * parSceptile * criSceptile * aumSceptile * pasSceptile * pasdSceptile / 100).toFixed(1);

document.getElementById("ptsSceptile").value = ptsSceptile;

var perSceptile = 100 * ((ptsSceptile * 100) / (atkSceptile * potSceptile)) - 100;

document.getElementById('perSceptile').value = (perSceptile).toFixed(1) + "%";


/*/Kingdra CM/*/
0
var atkKingdra = document.getElementById('atkKingdra').value;
 if(atkKingdra === ""){atkKingdra = 309}

 var masaKingdra = document.getElementById('masaKingdra').value;
 if(masaKingdra === ""){masaKingdra = 0}
 atksKingdra = parseInt(atkKingdra) + parseInt(masaKingdra);

var potKingdra = document.getElementById('potKingdra').value;

var criKingdra = document.getElementById("criKingdra").checked; {
  if (criKingdra == true) { criKingdra = 1.5 }
  else { criKingdra = 1 }
}

var aumKingdra = document.getElementById("aumKingdra").value;

var pasKingdra = document.getElementById("pasKingdra").value;

var tipoKingdra = document.getElementById("tipoKingdra").value;

var selectField = document.getElementById("selectField").value;

var pasdKingdra = document.getElementById('pasdKingdra').value;

var maspKingdra = document.getElementById("maspKingdra").value;

if(maspKingdra === ""){maspKingdra = 0}

if (tipoKingdra == selectField) {tipoKingdra = 2}
else {tipoKingdra = 1};

parKingdra = parseInt(maspKingdra) + parseInt(potKingdra);

pts2Kingdra = (tipoKingdra * atkKingdra * parKingdra * criKingdra * aumKingdra * pasKingdra / 100);


ptsKingdra = (tipoKingdra * atksKingdra * parKingdra * criKingdra * aumKingdra * pasKingdra * pasdKingdra / 100).toFixed(1);

document.getElementById("ptsKingdra").value = ptsKingdra;

var perKingdra = 100 * ((ptsKingdra * 100) / (atkKingdra * potKingdra)) - 100;

document.getElementById('perKingdra').value = (perKingdra).toFixed(1) + "%";



/*/Houndoom Al/*/

var atkHoundoom = document.getElementById('atkHoundoom').value;
 if(atkHoundoom === ""){atkHoundoom = 346}

 var masaHoundoom = document.getElementById('masaHoundoom').value;
 if(masaHoundoom === ""){masaHoundoom = 0}
 atksHoundoom = parseInt(atkHoundoom) + parseInt(masaHoundoom);

var potHoundoom = document.getElementById('potHoundoom').value;

var criHoundoom = document.getElementById("criHoundoom").checked; {
  if (criHoundoom == true) { criHoundoom = 1.5 }
  else { criHoundoom = 1 }
}

var aumHoundoom = document.getElementById("aumHoundoom").value;

var pasHoundoom = document.getElementById("pasHoundoom").value;

var tipoHoundoom = document.getElementById("tipoHoundoom").value;

var selectField = document.getElementById("selectField").value;

var pasdHoundoom = document.getElementById('pasdHoundoom').value;

var maspHoundoom = document.getElementById("maspHoundoom").value;

if(maspHoundoom === ""){maspHoundoom = 0}

if (tipoHoundoom == selectField) {tipoHoundoom = 2}
else {tipoHoundoom = 1};

parHoundoom = parseInt(maspHoundoom) + parseInt(potHoundoom);

pts2Houndoom = (tipoHoundoom * atkHoundoom * parHoundoom * criHoundoom * aumHoundoom * pasHoundoom / 100);


ptsHoundoom = (tipoHoundoom * atksHoundoom * parHoundoom * criHoundoom * aumHoundoom * pasHoundoom * pasdHoundoom / 100).toFixed(1);

document.getElementById("ptsHoundoom").value = ptsHoundoom;

var perHoundoom = 100 * ((ptsHoundoom * 100) / (atkHoundoom * potHoundoom)) - 100;


document.getElementById('perHoundoom').value = (perHoundoom).toFixed(1) + "%";


/*/MegaHoundoom/*/

var atkMegaHoundoom = document.getElementById('atkMegaHoundoom').value;
 if(atkMegaHoundoom === ""){atkMegaHoundoom = 380}

 var masaMegaHoundoom = document.getElementById('masaMegaHoundoom').value;
 if(masaMegaHoundoom === ""){masaMegaHoundoom = 0}
 atksMegaHoundoom = parseInt(atkMegaHoundoom) + parseInt(masaMegaHoundoom);

var potMegaHoundoom = document.getElementById('potMegaHoundoom').value;

var criMegaHoundoom = document.getElementById("criMegaHoundoom").checked; {
  if (criMegaHoundoom == true) { criMegaHoundoom = 1.5 }
  else { criMegaHoundoom = 1 }
}

var aumMegaHoundoom = document.getElementById("aumMegaHoundoom").value;

var pasMegaHoundoom = document.getElementById("pasMegaHoundoom").value;

var tipoMegaHoundoom = document.getElementById("tipoMegaHoundoom").value;

var selectField = document.getElementById("selectField").value;

var pasdMegaHoundoom = document.getElementById('pasdMegaHoundoom').value;

var maspMegaHoundoom = document.getElementById("maspMegaHoundoom").value;

if(maspMegaHoundoom === ""){maspMegaHoundoom = 0}

if (tipoMegaHoundoom == selectField) {tipoMegaHoundoom = 2}
else {tipoMegaHoundoom = 1};

parMegaHoundoom = parseInt(maspMegaHoundoom) + parseInt(potMegaHoundoom);

pts2MegaHoundoom = (tipoMegaHoundoom * atkMegaHoundoom * parMegaHoundoom * criMegaHoundoom * aumMegaHoundoom * pasMegaHoundoom / 100);


ptsMegaHoundoom = (tipoMegaHoundoom * atksMegaHoundoom * parMegaHoundoom * criMegaHoundoom * aumMegaHoundoom * pasMegaHoundoom * pasdMegaHoundoom / 100).toFixed(1);

document.getElementById("ptsMegaHoundoom").value = ptsMegaHoundoom;

var perMegaHoundoom = 100 * ((ptsMegaHoundoom * 100) / (atkMegaHoundoom * potMegaHoundoom)) - 100;

document.getElementById('perMegaHoundoom').value = (perMegaHoundoom).toFixed(1) + "%";

/*/Zebstrika/*/

var atkZebstrika = document.getElementById('atkZebstrika').value;
 if(atkZebstrika === ""){atkZebstrika = 306}

 var masaZebstrika = document.getElementById('masaZebstrika').value;
 if(masaZebstrika === ""){masaZebstrika = 0}
 atksZebstrika = parseInt(atkZebstrika) + parseInt(masaZebstrika);

var potZebstrika = document.getElementById('potZebstrika').value;

var criZebstrika = document.getElementById("criZebstrika").checked; {
  if (criZebstrika == true) { criZebstrika = 1.5 }
  else { criZebstrika = 1 }
}

var aumZebstrika = document.getElementById("aumZebstrika").value;

var pasZebstrika = document.getElementById("pasZebstrika").value;

var tipoZebstrika = document.getElementById("tipoZebstrika").value;

var selectField = document.getElementById("selectField").value;

var pasdZebstrika = document.getElementById('pasdZebstrika').value;

var maspZebstrika = document.getElementById("maspZebstrika").value;

if(maspZebstrika === ""){maspZebstrika = 0}

if (tipoZebstrika == selectField) {tipoZebstrika = 2}
else {tipoZebstrika = 1};

parZebstrika = parseInt(maspZebstrika) + parseInt(potZebstrika);

pts2Zebstrika = (tipoZebstrika * atkZebstrika * parZebstrika * criZebstrika * aumZebstrika * pasZebstrika / 100);


ptsZebstrika = (tipoZebstrika * atksZebstrika * parZebstrika * criZebstrika * aumZebstrika * pasZebstrika * pasdZebstrika / 100).toFixed(1);

document.getElementById("ptsZebstrika").value = ptsZebstrika;

var perZebstrika = 100 * ((ptsZebstrika * 100) / (atkZebstrika * potZebstrika)) - 100;

document.getElementById('perZebstrika').value = (perZebstrika).toFixed(1) + "%";


/*/Feraligatr/*/

var atkFeraligatr = document.getElementById('atkFeraligatr').value;
 if(atkFeraligatr === ""){atkFeraligatr = 380}

 var masaFeraligatr = document.getElementById('masaFeraligatr').value;
 if(masaFeraligatr === ""){masaFeraligatr = 0}
 atksFeraligatr = parseInt(atkFeraligatr) + parseInt(masaFeraligatr);

var potFeraligatr = document.getElementById('potFeraligatr').value;

var criFeraligatr = document.getElementById("criFeraligatr").checked; {
  if (criFeraligatr == true) { criFeraligatr = 1.5 }
  else { criFeraligatr = 1 }
}

var aumFeraligatr = document.getElementById("aumFeraligatr").value;

var pasFeraligatr = document.getElementById("pasFeraligatr").value;

var tipoFeraligatr = document.getElementById("tipoFeraligatr").value;

var selectField = document.getElementById("selectField").value;

var pasdFeraligatr = document.getElementById('pasdFeraligatr').value;

var maspFeraligatr = document.getElementById("maspFeraligatr").value;

if(maspFeraligatr === ""){maspFeraligatr = 0}

if (tipoFeraligatr == selectField) {tipoFeraligatr = 2}
else {tipoFeraligatr = 1};

parFeraligatr = parseInt(maspFeraligatr) + parseInt(potFeraligatr);

pts2Feraligatr = (tipoFeraligatr * atkFeraligatr * parFeraligatr * criFeraligatr * aumFeraligatr * pasFeraligatr / 100);


ptsFeraligatr = (tipoFeraligatr * atksFeraligatr * parFeraligatr * criFeraligatr * aumFeraligatr * pasFeraligatr * pasdFeraligatr / 100).toFixed(1);

document.getElementById("ptsFeraligatr").value = ptsFeraligatr;

var perFeraligatr = 100 * ((ptsFeraligatr * 100) / (atkFeraligatr * potFeraligatr)) - 100;

document.getElementById('perFeraligatr').value = (perFeraligatr).toFixed(1) + "%";


/*/Rayquaza/*/

var atkRayquaza = document.getElementById('atkRayquaza').value;
 if(atkRayquaza === ""){atkRayquaza = 380}

 var masaRayquaza = document.getElementById('masaRayquaza').value;
 if(masaRayquaza === ""){masaRayquaza = 0}
 atksRayquaza = parseInt(atkRayquaza) + parseInt(masaRayquaza);

var potRayquaza = document.getElementById('potRayquaza').value;

var criRayquaza = document.getElementById("criRayquaza").checked; {
  if (criRayquaza == true) { criRayquaza = 1.5 }
  else { criRayquaza = 1 }
}

var aumRayquaza = document.getElementById("aumRayquaza").value;

var pasRayquaza = document.getElementById("pasRayquaza").value;

var tipoRayquaza = document.getElementById("tipoRayquaza").value;

var selectField = document.getElementById("selectField").value;

var pasdRayquaza = document.getElementById('pasdRayquaza').value;

var maspRayquaza = document.getElementById("maspRayquaza").value;

if(maspRayquaza === ""){maspRayquaza = 0}

if (tipoRayquaza == selectField) {tipoRayquaza = 2}
else {tipoRayquaza = 1};

parRayquaza = parseInt(maspRayquaza) + parseInt(potRayquaza);

pts2Rayquaza = (tipoRayquaza * atkRayquaza * parRayquaza * criRayquaza * aumRayquaza * pasRayquaza / 100);


ptsRayquaza = (tipoRayquaza * atksRayquaza * parRayquaza * criRayquaza * aumRayquaza * pasRayquaza * pasdRayquaza / 100).toFixed(1);

document.getElementById("ptsRayquaza").value = ptsRayquaza;

var perRayquaza = 100 * ((ptsRayquaza * 100) / (atkRayquaza * potRayquaza)) - 100;

document.getElementById('perRayquaza').value = (perRayquaza).toFixed(1) + "%";


/*/Garchomp/*/

var atkGarchomp = document.getElementById('atkGarchomp').value;
 if(atkGarchomp === ""){atkGarchomp = 331}

 var masaGarchomp = document.getElementById('masaGarchomp').value;
 if(masaGarchomp === ""){masaGarchomp = 0}
 atksGarchomp = parseInt(atkGarchomp) + parseInt(masaGarchomp);

var potGarchomp = document.getElementById('potGarchomp').value;

var criGarchomp = document.getElementById("criGarchomp").checked; {
  if (criGarchomp == true) { criGarchomp = 1.5 }
  else { criGarchomp = 1 }
}

var aumGarchomp = document.getElementById("aumGarchomp").value;

var pasGarchomp = document.getElementById("pasGarchomp").value;

var tipoGarchomp = document.getElementById("tipoGarchomp").value;

var selectField = document.getElementById("selectField").value;

var pasdGarchomp = document.getElementById('pasdGarchomp').value;

var maspGarchomp = document.getElementById("maspGarchomp").value;

if(maspGarchomp === ""){maspGarchomp = 0}

if (tipoGarchomp == selectField) {tipoGarchomp = 2}
else {tipoGarchomp = 1};

parGarchomp = parseInt(maspGarchomp) + parseInt(potGarchomp);

pts2Garchomp = (tipoGarchomp * atkGarchomp * parGarchomp * criGarchomp * aumGarchomp * pasGarchomp / 100);


ptsGarchomp = (tipoGarchomp * atksGarchomp * parGarchomp * criGarchomp * aumGarchomp * pasGarchomp * pasdGarchomp / 100).toFixed(1);

document.getElementById("ptsGarchomp").value = ptsGarchomp;

var perGarchomp = 100 * ((ptsGarchomp * 100) / (atkGarchomp * potGarchomp)) - 100;

document.getElementById('perGarchomp').value = (perGarchomp).toFixed(1) + "%";


/*/MegaGarchomp/*/

var atkMegaGarchomp = document.getElementById('atkMegaGarchomp').value;
 if(atkMegaGarchomp === ""){atkMegaGarchomp = 331}

 var masaMegaGarchomp = document.getElementById('masaMegaGarchomp').value;
 if(masaMegaGarchomp === ""){masaMegaGarchomp = 0}
 atksMegaGarchomp = parseInt(atkMegaGarchomp) + parseInt(masaMegaGarchomp);

var potMegaGarchomp = document.getElementById('potMegaGarchomp').value;

var criMegaGarchomp = document.getElementById("criMegaGarchomp").checked; {
  if (criMegaGarchomp == true) { criMegaGarchomp = 1.5 }
  else { criMegaGarchomp = 1 }
}

var aumMegaGarchomp = document.getElementById("aumMegaGarchomp").value;

var pasMegaGarchomp = document.getElementById("pasMegaGarchomp").value;

var tipoMegaGarchomp = document.getElementById("tipoMegaGarchomp").value;

var selectField = document.getElementById("selectField").value;

var pasdMegaGarchomp = document.getElementById('pasdMegaGarchomp').value;

var maspMegaGarchomp = document.getElementById("maspMegaGarchomp").value;

if(maspMegaGarchomp === ""){maspMegaGarchomp = 0}

if (tipoMegaGarchomp == selectField) {tipoMegaGarchomp = 2}
else {tipoMegaGarchomp = 1};

parMegaGarchomp = parseInt(maspMegaGarchomp) + parseInt(potMegaGarchomp);

ptsMegaGarchomp = (tipoMegaGarchomp * atksMegaGarchomp * parMegaGarchomp * criMegaGarchomp * aumMegaGarchomp * pasMegaGarchomp * pasdMegaGarchomp / 100).toFixed(1);

document.getElementById("ptsMegaGarchomp").value = ptsMegaGarchomp;

var perMegaGarchomp = 100 * ((ptsMegaGarchomp * 100) / (atkMegaGarchomp * potMegaGarchomp)) - 100;

document.getElementById('perMegaGarchomp').value = (perMegaGarchomp).toFixed(1) + "%";


/*/Emboar/*/

var atkEmboar = document.getElementById('atkEmboar').value;
 if(atkEmboar === ""){atkEmboar = 331}

 var masaEmboar = document.getElementById('masaEmboar').value;
 if(masaEmboar === ""){masaEmboar = 0}
 atksEmboar = parseInt(atkEmboar) + parseInt(masaEmboar);

var potEmboar = document.getElementById('potEmboar').value;

var criEmboar = document.getElementById("criEmboar").checked; {
  if (criEmboar == true) { criEmboar = 1.5 }
  else { criEmboar = 1 }
}

var aumEmboar = document.getElementById("aumEmboar").value;

var pasEmboar = document.getElementById("pasEmboar").value;

var tipoEmboar = document.getElementById("tipoEmboar").value;

var selectField = document.getElementById("selectField").value;

var pasdEmboar = document.getElementById('pasdEmboar').value;

var maspEmboar = document.getElementById("maspEmboar").value;

if(maspEmboar === ""){maspEmboar = 0}

if (tipoEmboar == selectField) {tipoEmboar = 2}
else {tipoEmboar = 1};

parEmboar = parseInt(maspEmboar) + parseInt(potEmboar);

ptsEmboar = (tipoEmboar * atksEmboar * parEmboar * criEmboar * aumEmboar * pasEmboar * pasdEmboar / 100).toFixed(1);

document.getElementById("ptsEmboar").value = ptsEmboar;

var perEmboar = 100 * ((ptsEmboar * 100) / (atkEmboar * potEmboar)) - 100;

document.getElementById('perEmboar').value = (perEmboar).toFixed(1) + "%";


/*/Sylveon/*/

var atkSylveon = document.getElementById('atkSylveon').value;
 if(atkSylveon === ""){atkSylveon = 331}

 var masaSylveon = document.getElementById('masaSylveon').value;
 if(masaSylveon === ""){masaSylveon = 0}
 atksSylveon = parseInt(atkSylveon) + parseInt(masaSylveon);

var potSylveon = document.getElementById('potSylveon').value;

var criSylveon = document.getElementById("criSylveon").checked; {
  if (criSylveon == true) { criSylveon = 1.5 }
  else { criSylveon = 1 }
}

var aumSylveon = document.getElementById("aumSylveon").value;

var pasSylveon = document.getElementById("pasSylveon").value;

var tipoSylveon = document.getElementById("tipoSylveon").value;

var selectField = document.getElementById("selectField").value;

var pasdSylveon = document.getElementById('pasdSylveon').value;

var maspSylveon = document.getElementById("maspSylveon").value;

if(maspSylveon === ""){maspSylveon = 0}

if (tipoSylveon == selectField) {tipoSylveon = 2}
else {tipoSylveon = 1};

parSylveon = parseInt(maspSylveon) + parseInt(potSylveon);

ptsSylveon = (tipoSylveon * atksSylveon * parSylveon * criSylveon * aumSylveon * pasSylveon * pasdSylveon / 100).toFixed(1);

document.getElementById("ptsSylveon").value = ptsSylveon;

var perSylveon = 100 * ((ptsSylveon * 100) / (atkSylveon * potSylveon)) - 100;

document.getElementById('perSylveon').value = (perSylveon).toFixed(1) + "%";


/*/MewtwoP/*/

var atkMewtwoP = document.getElementById('atkMewtwoP').value;
 if(atkMewtwoP === ""){atkMewtwoP = 480}

 var masaMewtwoP = document.getElementById('masaMewtwoP').value;
 if(masaMewtwoP === ""){masaMewtwoP = 0}
 atksMewtwoP = parseInt(atkMewtwoP) + parseInt(masaMewtwoP);

var potMewtwoP = document.getElementById('potMewtwoP').value;

var criMewtwoP = document.getElementById("criMewtwoP").checked; {
  if (criMewtwoP == true) { criMewtwoP = 1.5 }
  else { criMewtwoP = 1 }
}

var aumMewtwoP = document.getElementById("aumMewtwoP").value;

var pasMewtwoP = document.getElementById("pasMewtwoP").value;

var tipoMewtwoP = document.getElementById("tipoMewtwoP").value;

var selectField = document.getElementById("selectField").value;

var pasdMewtwoP = document.getElementById('pasdMewtwoP').value;

var maspMewtwoP = document.getElementById("maspMewtwoP").value;

if(maspMewtwoP === ""){maspMewtwoP = 0}

if (tipoMewtwoP == selectField) {tipoMewtwoP = 2}
else {tipoMewtwoP = 1};

parMewtwoP = parseInt(maspMewtwoP) + parseInt(potMewtwoP);

ptsMewtwoP = (tipoMewtwoP * atksMewtwoP * parMewtwoP * criMewtwoP * aumMewtwoP * pasMewtwoP * pasdMewtwoP / 100).toFixed(1);

document.getElementById("ptsMewtwoP").value = ptsMewtwoP;

var perMewtwoP = 100 * ((ptsMewtwoP * 100) / (atkMewtwoP * potMewtwoP)) - 100;

document.getElementById('perMewtwoP').value = (perMewtwoP).toFixed(1) + "%";


/*/Reuniclus/*/

var atkReuniclus = document.getElementById('atkReuniclus').value;
 if(atkReuniclus === ""){atkReuniclus = 377}

 var masaReuniclus = document.getElementById('masaReuniclus').value;
 if(masaReuniclus === ""){masaReuniclus = 0}
 atksReuniclus = parseInt(atkReuniclus) + parseInt(masaReuniclus);

var potReuniclus = document.getElementById('potReuniclus').value;

var criReuniclus = document.getElementById("criReuniclus").checked; {
  if (criReuniclus == true) { criReuniclus = 1.5 }
  else { criReuniclus = 1 }
}

var aumReuniclus = document.getElementById("aumReuniclus").value;

var pasReuniclus = document.getElementById("pasReuniclus").value;

var tipoReuniclus = document.getElementById("tipoReuniclus").value;

var selectField = document.getElementById("selectField").value;

var pasdReuniclus = document.getElementById('pasdReuniclus').value;

var maspReuniclus = document.getElementById("maspReuniclus").value;

if(maspReuniclus === ""){maspReuniclus = 0}

if (tipoReuniclus == selectField) {tipoReuniclus = 2}
else {tipoReuniclus = 1};

parReuniclus = parseInt(maspReuniclus) + parseInt(potReuniclus);

ptsReuniclus = (tipoReuniclus * atksReuniclus * parReuniclus * criReuniclus * aumReuniclus * pasReuniclus * pasdReuniclus / 100).toFixed(1);

document.getElementById("ptsReuniclus").value = ptsReuniclus;

var perReuniclus = 100 * ((ptsReuniclus * 100) / (atkReuniclus * potReuniclus)) - 100;

document.getElementById('perReuniclus').value = (perReuniclus).toFixed(1) + "%";


/*/Pidgeot/*/

var atkPidgeot = document.getElementById('atkPidgeot').value;
 if(atkPidgeot === ""){atkPidgeot = 380}

 var masaPidgeot = document.getElementById('masaPidgeot').value;
 if(masaPidgeot === ""){masaPidgeot = 0}
 atksPidgeot = parseInt(atkPidgeot) + parseInt(masaPidgeot);

var potPidgeot = document.getElementById('potPidgeot').value;

var criPidgeot = document.getElementById("criPidgeot").checked; {
  if (criPidgeot == true) { criPidgeot = 1.5 }
  else { criPidgeot = 1 }
}

var aumPidgeot = document.getElementById("aumPidgeot").value;

var pasPidgeot = document.getElementById("pasPidgeot").value;

var tipoPidgeot = document.getElementById("tipoPidgeot").value;

var selectField = document.getElementById("selectField").value;

var pasdPidgeot = document.getElementById('pasdPidgeot').value;

var maspPidgeot = document.getElementById("maspPidgeot").value;

if(maspPidgeot === ""){maspPidgeot = 0}

if (tipoPidgeot == selectField) {tipoPidgeot = 2}
else {tipoPidgeot = 1};

parPidgeot = parseInt(maspPidgeot) + parseInt(potPidgeot);

ptsPidgeot = (tipoPidgeot * atksPidgeot * parPidgeot * criPidgeot * aumPidgeot * pasPidgeot * pasdPidgeot / 100).toFixed(1);

document.getElementById("ptsPidgeot").value = ptsPidgeot;

var perPidgeot = 100 * ((ptsPidgeot * 100) / (atkPidgeot * potPidgeot)) - 100;

document.getElementById('perPidgeot').value = (perPidgeot).toFixed(1) + "%";


/*/MegaPidgeot/*/

var atkMegaPidgeot = document.getElementById('atkMegaPidgeot').value;
 if(atkMegaPidgeot === ""){atkMegaPidgeot = 455}

 var masaMegaPidgeot = document.getElementById('masaMegaPidgeot').value;
 if(masaMegaPidgeot === ""){masaMegaPidgeot = 0}
 atksMegaPidgeot = parseInt(atkMegaPidgeot) + parseInt(masaMegaPidgeot);

var potMegaPidgeot = document.getElementById('potMegaPidgeot').value;

var criMegaPidgeot = document.getElementById("criMegaPidgeot").checked; {
  if (criMegaPidgeot == true) { criMegaPidgeot = 1.5 }
  else { criMegaPidgeot = 1 }
}

var aumMegaPidgeot = document.getElementById("aumMegaPidgeot").value;

var pasMegaPidgeot = document.getElementById("pasMegaPidgeot").value;

var tipoMegaPidgeot = document.getElementById("tipoMegaPidgeot").value;

var selectField = document.getElementById("selectField").value;

var pasdMegaPidgeot = document.getElementById('pasdMegaPidgeot').value;

var maspMegaPidgeot = document.getElementById("maspMegaPidgeot").value;

if(maspMegaPidgeot === ""){maspMegaPidgeot = 0}

if (tipoMegaPidgeot == selectField) {tipoMegaPidgeot = 2}
else {tipoMegaPidgeot = 1};

parMegaPidgeot = parseInt(maspMegaPidgeot) + parseInt(potMegaPidgeot);

ptsMegaPidgeot = (tipoMegaPidgeot * atksMegaPidgeot * parMegaPidgeot * criMegaPidgeot * aumMegaPidgeot * pasMegaPidgeot * pasdMegaPidgeot / 100).toFixed(1);

document.getElementById("ptsMegaPidgeot").value = ptsMegaPidgeot;

var perMegaPidgeot = 100 * ((ptsMegaPidgeot * 100) / (atkMegaPidgeot * potMegaPidgeot)) - 100;

document.getElementById('perMegaPidgeot').value = (perMegaPidgeot).toFixed(1) + "%";

/*/CharizardA/*/

var atkCharizardA = document.getElementById('atkCharizardA').value;
 if(atkCharizardA === ""){atkCharizardA = 455}

 var masaCharizardA = document.getElementById('masaCharizardA').value;
 if(masaCharizardA === ""){masaCharizardA = 0}
 atksCharizardA = parseInt(atkCharizardA) + parseInt(masaCharizardA);

var potCharizardA = document.getElementById('potCharizardA').value;

var criCharizardA = document.getElementById("criCharizardA").checked; {
  if (criCharizardA == true) { criCharizardA = 1.5 }
  else { criCharizardA = 1 }
}

var aumCharizardA = document.getElementById("aumCharizardA").value;

var pasCharizardA = document.getElementById("pasCharizardA").value;

var tipoCharizardA = document.getElementById("tipoCharizardA").value;

var selectField = document.getElementById("selectField").value;

var pasdCharizardA = document.getElementById('pasdCharizardA').value;

var maspCharizardA = document.getElementById("maspCharizardA").value;

if(maspCharizardA === ""){maspCharizardA = 0}

if (tipoCharizardA == selectField) {tipoCharizardA = 2}
else {tipoCharizardA = 1};

parCharizardA = parseInt(maspCharizardA) + parseInt(potCharizardA);

ptsCharizardA = (tipoCharizardA * atksCharizardA * parCharizardA * criCharizardA * aumCharizardA * pasCharizardA * pasdCharizardA / 100).toFixed(1);

document.getElementById("ptsCharizardA").value = ptsCharizardA;

var perCharizardA = 100 * ((ptsCharizardA * 100) / (atkCharizardA * potCharizardA)) - 100;

document.getElementById('perCharizardA').value = (perCharizardA).toFixed(1) + "%";


/*/MegaCharizard/*/

var atkMegaCharizard = document.getElementById('atkMegaCharizard').value;
 if(atkMegaCharizard === ""){atkMegaCharizard = 455}

 var masaMegaCharizard = document.getElementById('masaMegaCharizard').value;
 if(masaMegaCharizard === ""){masaMegaCharizard = 0}
 atksMegaCharizard = parseInt(atkMegaCharizard) + parseInt(masaMegaCharizard);

var potMegaCharizard = document.getElementById('potMegaCharizard').value;

var criMegaCharizard = document.getElementById("criMegaCharizard").checked; {
  if (criMegaCharizard == true) { criMegaCharizard = 1.5 }
  else { criMegaCharizard = 1 }
}

var aumMegaCharizard = document.getElementById("aumMegaCharizard").value;

var pasMegaCharizard = document.getElementById("pasMegaCharizard").value;

var tipoMegaCharizard = document.getElementById("tipoMegaCharizard").value;

var selectField = document.getElementById("selectField").value;

var pasdMegaCharizard = document.getElementById('pasdMegaCharizard').value;

var maspMegaCharizard = document.getElementById("maspMegaCharizard").value;

if(maspMegaCharizard === ""){maspMegaCharizard = 0}

if (tipoMegaCharizard == selectField) {tipoMegaCharizard = 2}
else {tipoMegaCharizard = 1};

parMegaCharizard = parseInt(maspMegaCharizard) + parseInt(potMegaCharizard);

ptsMegaCharizard = (tipoMegaCharizard * atksMegaCharizard * parMegaCharizard * criMegaCharizard * aumMegaCharizard * pasMegaCharizard * pasdMegaCharizard / 100).toFixed(1);

document.getElementById("ptsMegaCharizard").value = ptsMegaCharizard;

var perMegaCharizard = 100 * ((ptsMegaCharizard * 100) / (atkMegaCharizard * potMegaCharizard)) - 100;

document.getElementById('perMegaCharizard').value = (perMegaCharizard).toFixed(1) + "%";

}
