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
