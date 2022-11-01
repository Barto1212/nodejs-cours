import yargs from "yargs";

const arg = yargs(process.argv).argv
console.log(arg.name);