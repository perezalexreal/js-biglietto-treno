let km = parseInt(prompt("Inserisci i km che desideri percorre"));

let eta = parseInt(prompt("Inseriscila tua eta"));


let sconto = ' ';

let prezzoTotale = km * 0.21;

if( eta < 18){
    prezzoTotale = (prezzoTotale - (prezzoTotale * 0.2)).toFixed(2);
    sconto = '20%'
} else if( eta > 65 ){
    prezzoTotale = (prezzoTotale - (prezzoTotale * 0.4)).toFixed(2);
    sconto = '40%'
} else {
    prezzoTotale = prezzoTotale.toFixed(2)
    sconto = '0%'
    // Non applicare nessuno sconto
}

document.getElementById('p-totale').innerHTML = prezzoTotale + '€';
document.getElementById('sconto').innerHTML = sconto;
document.getElementById('km').innerHTML = km;
document.getElementById('eta').innerHTML = eta;
