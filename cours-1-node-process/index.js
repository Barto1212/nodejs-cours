const operation = process.argv[2]
const array = process.argv

let result = 0
for (let index = 3; index < array.length; index++) {
  if (operation === "add") {
    result = result + Number(array[index]);
  }
  if (operation == "substract") {
    result = result - Number(array[index])
  }
}
console.log(result);