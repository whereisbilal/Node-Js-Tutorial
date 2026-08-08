<<<<<<< HEAD
// const { subFn, addFn } = require("./math");
// console.log(addFn(2, 3), subFn(3, 4));

const math = require("./math");
// console.log(math.addFn(2, 3), math.subFn(3, 4));
console.log(math.add(2, 4), math.sub(3, 8));

setTimeout(() => {
    console.log("2 seconds baad");
}, 2000); 
=======
const math = require("./math")

console.log(math.add(3, 4), math.sub(3, 3), math.divide(3, 4));
>>>>>>> adc02d780291dd010dd26e33457022369ca815b1
