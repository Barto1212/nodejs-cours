const yargs = require("yargs");
const argv = yargs.option("value").argv;
console.log(argv.value);
if (argv.time) {
  console.log("The current time is: ", new Date().toLocaleTimeString());
}
