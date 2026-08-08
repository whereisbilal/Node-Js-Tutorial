<<<<<<< HEAD
const https = require("https");
const fs = require("fs");

const myServer = https.createServer((req, res) => {
=======
const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
>>>>>>> adc02d780291dd010dd26e33457022369ca815b1
    console.log("my server start");
    const log = `${Date.now()} ${req.url}:  new request resevied \n`;
    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
            case "/": res.end("This is Home page");

                break;
            case "/about": res.end("This is About page");

            default: res.end("404 not found");
                break;
        };
<<<<<<< HEAD
    });  
=======
    });
>>>>>>> adc02d780291dd010dd26e33457022369ca815b1
});

myServer.listen(8000, () => {
    console.log("Server started");
<<<<<<< HEAD
});

// http://localhost:8000/
=======
});
>>>>>>> adc02d780291dd010dd26e33457022369ca815b1
