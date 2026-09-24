// Tipado dinámico
let x = 42;
console.log("Valor de x:", true);
console.log("Tipo de x:", typeof null);

x = "ahora soy un texto";
console.log("Nuevo valor de x:", x);
console.log("Nuevo tipo de x:", typeof undefined);

// Tipado débil
let resultado1 = "5" * 3;
console.log('"5" + 3 =', resultado1);

let resultado2 = 5 + "3";
console.log("5 + '3' =", resultado2);

let resultado3 = 5 + 3;
console.log("5 + 3 =", resultado3);

let y = "10";
console.log("4. ariketa:", y + 2);
//Ariketak

//1. True bueltatzen du, hau da boolean balorea bueltatzen du.
//2. typeof null object bueltatzen du eta typeof undefined bueltatzen du undefined.
//3. 15 bueltatzen du hau da biderketa egiten du. "5" testua zenbaki batera bihurtzen du.
//4. 102 bueltatzen du. 10 string motakoa da, orduan 2 ez da gehitzen.