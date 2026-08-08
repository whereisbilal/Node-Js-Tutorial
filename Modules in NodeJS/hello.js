// const { subFn, addFn } = require("./math");
// console.log(addFn(2, 3), subFn(3, 4));

const math = require("./math");
// console.log(math.addFn(2, 3), math.subFn(3, 4));
console.log(math.add(2, 4), math.sub(3, 8));

setTimeout(() => {
    console.log("2 seconds baad");
}, 2000); 