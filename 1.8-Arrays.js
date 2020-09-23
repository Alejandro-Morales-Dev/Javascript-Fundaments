// Arrays
const users = ["Alex", "Juan", "Pedro", "Jose"];
console.log(users);
// add
users.push("Ana");
console.log(users);
// consult element
console.log(users[2]);
// array dentro de array
const fruits = ["Frutas", [1, 2, 3, 4], "Verduras", [5, 6, 7, 8]];
console.log(fruits[1][2]);
// Eliminar ultimo elemento
fruits.pop();
console.log(fruits);
// Nueva forma de ECMASCRIPT
const motos = Array.of("Italika", "Honda", "Harley");
console.log(motos);
//método fill / llenar registros
const $cor = Array(50).fill("<3");
console.log($cor);
// foreach -  imprimir una lista con elementos de un array
users.forEach(function (i) {
  console.log(`<li>${i}</li>`);
});
// foreach - imprime elementos con ID
motos.forEach(function (i, index) {
  console.log(`<li id=${index}>${i}</li>`);
});
