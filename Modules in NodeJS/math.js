<<<<<<< HEAD
function add(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}


module.exports = {
    addFn: add,
    subFn: sub
}

// Overwrite 
// module.exports = add;
// module.exports = sub;

// exports.add = (a, b) => a + b;
// exports.sub = (a, b) => a - b;
=======
// function add(a, b) {
//     return a + b
// }

// function sub(a, b) {
//     return a - b
// }

// module.exports = {
//     add,
//     sub
// }

exports.add = (a, b) => a + b;
exports.sub = (a, b) => a - b;

exports.divide = (a, b) => a / b
>>>>>>> adc02d780291dd010dd26e33457022369ca815b1
