const operateur = process.argv[2];
const elements = process.argv.slice(3);

let result = 0;
for (let i in elements) {
  if (operateur === "sum" || operateur === "add") {
    console.log(elements[i]);
    // Faire la somme :
    result = result + Number(elements[i]);
  }

  if (operateur === "substract") {
    // Soustraire
    result = result - Number(elements[i]);
  }
}

console.log("resultat final : ", result);
