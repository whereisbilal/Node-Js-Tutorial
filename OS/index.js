const os = require('node:os');
// console.log(os.freemem());
// console.log(os.homedir());
// console.log(os.hostname());
// const text = `Hello${os.EOL}World`
// console.log(text);

// console.log(os.EOL);

// console.log("Hello World");
// const os = require('os');

// const cpuCount = os.availableParallelism();

// console.log(`Available CPUs: ${cpuCount}`);

console.log(os.cpus().length);


console.log(os.availableParallelism());
console.log(os.hostname());