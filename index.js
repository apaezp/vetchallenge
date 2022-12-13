const { registrar, leer } = require("./operaciones");

const argumentos = process.argv.slice(2);
const operacion = argumentos[0];

if (operacion === "registrar") {
  registrar(
    argumentos[1],
    argumentos[2],
    argumentos[3],
    argumentos[4],
    argumentos[5]
  );
};

if (operacion === "leer") {
  leer();
};

if(argumentos === undefined || argumentos.length === 0 || operacion !== "registrar" || operacion !== "leer" || !argumentos[1] || !argumentos[2] || !argumentos[3] || !argumentos[4] || !argumentos[5]) {
  console.log("Por favor, ingrese una operación válida");
  return;
}