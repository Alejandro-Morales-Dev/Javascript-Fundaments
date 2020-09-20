// Declarar variable y utilizar propiedad length
let name = "Alejandro";
console.log(`Tu nombre es ${name}`);
console.log("el número de caracteres de tu nombre son", name.length);

// object y uso propiedades .toUpperCase .toLowerCase

const user = {
  name: "alex",
  mail: "alexx.mozam@gmail.com",
};

console.log(
  user.name.toLowerCase(),

  user.mail.toLocaleUpperCase()
);

// validar que no se repita una palabra
let lorem =
  "Lorem ipsum dolor sit amet amet consectetur adipisicing elit. Nostrum vel dolores";

console.log(lorem.includes("amet"));

// Me mandan una cadena de texto con los datos de una usuaria, genero un array
let = userA = "Ana Jimenez ana@gmail.com RH";
console.log(userA.split(" "));
