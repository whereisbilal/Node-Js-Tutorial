const https = require("https");
const fs = require("fs");

const myServer = https.createServer((req, res) => {
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
    });  
});

myServer.listen(8000, () => {
    console.log("Server started");
});

// http://localhost:8000/