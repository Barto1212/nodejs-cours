const yargs = require('yargs')

const argv = yargs
    .option('time', {
    // alias: 't',
    description: 'Tell the present time',
    type: 'boolean'
  })
  .help()
  .alias('help', 'h').argv

  if (argv.time) {
    console.log('The current time is: ', new Date().toLocaleTimeString())
  }