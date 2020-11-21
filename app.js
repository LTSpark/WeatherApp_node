const info=require('./info/info');
const argv=require('./config/yargs').argv;

info.getInfo(argv)
  .then(console.log)
  .catch(console.log);



