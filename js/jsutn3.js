let btn = document.getElementById("BotCheckPal");
let pal = document.getElementById("CheckPal");
let st;
let st2;
let btnRom = document.getElementById("BotCheckRom");
let rom = document.getElementById("CheckRom");

document.addEventListener("DOMContentLoaded", (e) => {
  palindromo("#BotCheckPal");
  convertToRoman("#BotCheckRom");
});

/*---------------detector palindromos---------------------------------------*/

function palindromo(btn) {
  document.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      st = prompt("Escriba la palabra o frase a comprobar:");

      let test2 = Number(st);
      if (isNaN(test2)) {
        let original = st
          .replace(/,/gi, "")
          .replace(/\s/gi, "")
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        console.log(original);
        let reversed = original
          .split("")
          .reverse()
          .join("")
          .replace(/\s/gi, "")
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        console.log(reversed);
        if (original === reversed) {
          pal.innerHTML = `La frase/palabra "${st}" es un palindromo`;
        } else {
          pal.innerHTML = `La frase/palabra "${st}" no es un palindromo`;
        }
      } else {
        pal.innerHTML = `No se introdujo una palabra o frase valida`;
      }
    }
  });
}

/*---------------Pasaje a numeros romanos---------------------------------------*/

function convertToRoman(btn) {
  document.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      st2 = prompt("Escriba el numero a transformar");
      let test = Number(st2);
      console.log(test);
      if (isNaN(test) || test === 0 || test > 3999 || !Number.isInteger(test)) {
        rom.innerHTML = `No se introdujo un numero valido`;
      } else {
        let decimalValue = [
          1000,
          900,
          500,
          400,
          100,
          90,
          50,
          40,
          10,
          9,
          5,
          4,
          1,
        ];
        let romanNumeral = [
          "M",
          "CM",
          "D",
          "CD",
          "C",
          "XC",
          "L",
          "XL",
          "X",
          "IX",
          "V",
          "IV",
          "I",
        ];

        let romanized = "";
        let copy = st2.slice();

        for (var index = 0; index < decimalValue.length; index++) {
          while (decimalValue[index] <= st2) {
            romanized += romanNumeral[index];
            st2 -= decimalValue[index];
          }
        }

        rom.innerHTML = `El numero ${copy} es ${romanized}`;
      }
    }
  });
}

/*---------------Boton Scroll Top---------------------------------------------*/

document.addEventListener("DOMContentLoaded", (e) => {
  ScrollUp("#ScrollTop");
});

function ScrollUp(Btn) {
  const d = document;
  let scroll = document.documentElement;

  d.addEventListener("click", (e) => {
    if (e.target.matches(Btn) || e.target.matches(`${Btn} *`)) {
      scroll.scrollTop = 0;
    }
  });

  window.addEventListener("scroll", (e) => {
    if (scroll.scrollTop > 500) {
      d.querySelector(Btn).classList.remove("is-hidden");
    } else {
      d.querySelector(Btn).classList.add("is-hidden");
    }
  });
}

$(document).ready(function () {});
