const yargs = require("yargs");

const argv = yargs
  .option("sauce", {
    description: "choose sauce",
    type: "string",
  })
  .option("size", {
    description: "choose format",
    type: "string",
    choices: ["s", "m", "l", "xl"],
  })
  .option("toping", {
    alias: "t",
    description: "choose toping",
    type: "array",
    choices: ["mushroom", "bacon", "onion", "artichoke"],
  })
  .help()
  .alias("help", "h").argv;

if (argv.sauce && argv.size) {
  let size;
  switch (argv.size) {
    case "s":
      size = "small";
      break;
    case "m":
      size = "medium";
      break;
    case "l":
      size = "large";
    default:
      size = "medium";
      break;
  }
  console.log(`A ${size} ${argv.sauce} pizza with ${argv.toping}`);
}
