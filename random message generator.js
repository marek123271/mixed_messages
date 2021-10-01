let miasta = ["Warszawie", "Krakowie", "Gdansku", "opolu", "poznaniu"]; //city

let koledzy = ["Jan", "Adam", "Krzysiek", "Marek", "Artur", "Bartek"]; //friends

const shuffled = koledzy.sort(() => 0.5 - Math.random());


let koledzy_do_gry = shuffled.slice(0, 3); //pick 3 friends

let gry = ["pilke", "klasy", "chowanego", "skakanke"] //games

let miejsca = ["boisku", "ulicy", "hali"] //places

let koniec = ["16", "15", "14"];

let c = [Math.floor(Math.random() * miasta.length)];

let d = [Math.floor(Math.random() * gry.length)];

let e = [Math.floor(Math.random() * koledzy_do_gry.length)];

let f = [Math.floor(Math.random() * miejsca.length)];

let g = [Math.floor(Math.random() * koniec.length)];


zdanie1 = "Mieszkasz w " + miasta[c] + " twoji koledzy to: " + koledzy_do_gry + " .Grasz z nimi  w " + gry[d];

zdanie2 = ". Najbardziej lubisz grać z " + koledzy[e] + "em.";

zdanie3 = " Najczęściej gracie na " + miejsca[f] + ".";

zdanie4 = " Zawsze gracie po szkole, czyli po " + koniec[g];

zdanie = zdanie1 + zdanie2 + zdanie3 + zdanie4;
console.log(zdanie);