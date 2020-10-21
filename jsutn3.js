let s1 = 2;
let s2 = 3;
let s3 = 4;
let s4 = 5;

document.write(`
<h3>Suma</h3>
<h4>${s1} + ${s2} = ${s1 + s2}</h4>`);

document.write(`
<h3>Resta</h3>
<h4>${s2} - ${s1} = ${s2 - s1}</h4>`);

document.write(`
<h3>Multiplicacion</h3>
<h4>${s3} x ${s4} = ${s3 * s4}</h4>`);

document.write(`
<h3>Division</h3>
<h4>${s3} / ${s4} = ${s3 / s4}</h4>`);

let arr = [
  " Tiempos Violentos",
  " Ciudad de dios",
  " La naranja mecanica",
  " Apocalypsis Now",
  " El padrino",
];

document.write(`
<h2>Peliculas Favoritas ordenadas alfabeticamente</h2>
<h4>${arr.sort()}</h4>`);
