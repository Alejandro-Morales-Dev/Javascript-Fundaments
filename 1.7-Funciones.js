// Función declarada
function user() {
  console.log("Portal User  ");
}

user();

// Función que devuelve valor
function retorna() {
  console.log("Retorno de impuestos");
  return "inicio de proceso";
}

let retornaA = retorna();
console.log(retornaA);

//  Función que recibe valores / Parametros
function user(name = "Alex", perfil = "IT") {
  console.log(`Tu name is ${name} y tu perfil es ${perfil}`);
}

user();

// Función anónima / expresada / USADA más en frameworks
// Buenas prácticas, se usa cuando se inicializa
const funciónExpresada = function () {
  console.log("Función expresada");
};

funciónExpresada();
