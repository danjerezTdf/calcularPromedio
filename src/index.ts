/* Ejercicios de Repaso
Ejercicio – Calcular Promedio
• El DT de los infantiles del equipo de fútbol desea
saber el promedio de la edad de los chicos
• La edad de los chicos va de 3 a 7 años. Las
edades son cargadas al azar (use la función
aleatorio(menorValor, mayorValor), es decir
aleatorio(3,7))
• Muestre todas las edades y el promedio de las
mismas */

let infantiles: number[] = new Array(8);
let min: number = 3;
let max: number = 7;

function aleatorio(menorValor: number, mayorValor: number): number {
  return Math.floor(Math.random() * (mayorValor + 1 - menorValor) + menorValor);
}
function promediarValoresArray(arrayUno: number[]): number {
  let resultado: number = 0;
  let promedio: number = 0;
  for (let i: number = 0; i < arrayUno.length; i++) {
    resultado += arrayUno[i];
  }
  promedio = resultado / arrayUno.length;
  return promedio;
}

for (let i: number = 0; i < infantiles.length; i++) {
  infantiles[i] = aleatorio(min, max);
}

console.log(
  `las edades de los infantiles son: ${infantiles} y el prodemdio de las mismas es ${promediarValoresArray(
    infantiles
  )}`
);
