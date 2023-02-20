var namenLijst = [];
var hoevelNamen = 0;
var inNamen = document.getElementById('ingevoerdeNamen');
var inNamenRe = document.getElementById('ingevoerdeNamenReverse');

while (parseInt(hoevelNamen) < 4) {
    var hoevelNamen = prompt("Hoeveel namen wilt u?");
}

for (let i = 0; i < hoevelNamen; i++) {
    var naam = prompt("Welke naam wilt u toevoegen?");
    namenLijst.push(naam)
}

inNamen.innerHTML = namenLijst

inNamenRe.innerHTML = (namenLijst.reverse())