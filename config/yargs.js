const direction={
    alias: 'd',
    demand: true,
    desc: 'Place where we want to get the weather report'
};
const country={
    default:'none',
    alias: 'c',
    desc: 'Country of the place where we want to get the weather report. Optional parameter to specify'
};
const region={
    default: 'none',
    alias: 'r',
    desc: 'Region of the place where we want to get the weather report. Optional parameter to specify'
};


const argv=require('yargs').options({
    direction,
    country,
    region
})
.help()
.argv;

module.exports={
    argv
}