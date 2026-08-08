const fs = require("fs");
<<<<<<< HEAD
const math = require("../Modules in NodeJS/math");

const http = require("http");
const { loadavg } = require("os");

// Async
// const r = fs.readFile("./test.txt", "utf-8", (err, result)=>{
//     if (err) {
//         console.log(err);
//     }

//     else {
//         console.log(result);
//     }
// });


// Sync 
// const r = fs.readFileSync("./test.txt", "utf-8")
// console.log(r);


// writeFile

=======

// Sync
// const r = fs.writeFileSync("./test.txt", "Hye there");
// console.log(r);

>>>>>>> adc02d780291dd010dd26e33457022369ca815b1
// // Async
// const b = fs.writeFile("./form.txt", "I am form", (err)=>{});
// console.log(b);

<<<<<<< HEAD
// Sync 
// const b = fs.writeFileSync("./form.txt", "I am form");
// console.log(b);




// fs.appendFileSync("./test.txt", `${new Date().toLocaleString()} Today date and time  \n`);


// const a = fs.readFile("./test.txt", "utf-8", (err, result) => {
//     if (err) {
//         console.log(err);
//     }

//     else {
//         console.log(result);
//     }

// });  
// fs.appendFileSync("./test.txt", `${String(math.addFn(7, 6))} \n`)

// const myserver = http.createServer((req, res) => {
//     res.writeHead(200, {
//         "Content-Type": "text/html"
//     });
//     fs.readFile("./test.txt", "utf-8", (err, result) => {
//         if (err) {
//             res.end(err); 
//         }

//         else {
//             // res.end(`<pre>${result}</pre>`);
//             res.end(result.replace(/\n/g, "<br>"))
//         }

//     });

//     // res.end(String(math.addFn(7, 6)));

// });

// myserver.listen(8000, () => {
//     console.log("server started");
// })


// console.log("hello");








console.log(fs.statSync("./test.txt").atime);

fs.writeFileSync("./abu.txt", "I am abu iam harrypotter");






















//Non Blocking 
// fs.readFile("test.txt", "utf8", (err, data) => {

//     console.log(data);

// });

// console.log("Hello");


// Blocking 
// const data = fs.readFileSync("test.txt", "utf8");

// console.log(data);



// console.log("Hello");   
=======
// fs.appendFileSync("./test.txt", new Date().toLocaleString())/
// fs.appendFileSync("./test.txt", "hye harry")
               
// console.log(fs.statSync("./test.txt").atime)

const a = fs.writeFileSync("./abu.txt","I am abu iam harrypotter")
>>>>>>> adc02d780291dd010dd26e33457022369ca815b1
