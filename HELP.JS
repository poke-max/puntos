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
