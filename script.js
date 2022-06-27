const ar = ["Felipe", "Matheus", "Lucas", "Rogério", "Raquel"];

console.log(" // Crie um array que receba 5 itens e exiba no console.", ar);
ar.unshift("Vanessa");
console.log(
  "// Utilize um método para adicionar um nome ao inicio do array.",
  ar
);
ar.pop();
console.log("// Utilize um método para remover o último nome do array.", ar);
ar.push("Fabrício", "Andressa");
console.log(
  "// Utilize um método para adicionar dois nomes ao fim do array.",
  ar
);
ar.shift();
console.log("// Utilize um método para remover o primeiro nome do array.", ar);

let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];

numbers.sort((a, b) => a - b);

console.log(
  "// Utilize um método para organizar em ordem crescente o seguinte array:",
  numbers
);
