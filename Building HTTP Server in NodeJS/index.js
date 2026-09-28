const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    console.log("My server started");

    const log = `${Date.now()} ${req.url}: New request received\n`;

    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.log("Error writing log:", err);
            res.statusCode = 500;
            res.end("Internal Server Error");
            return;
        }

        switch (req.url) {
            case "/":
                res.end("This is Home page");
                break;

            case "/about":
                res.end("This is About page");
                break;

            default:
                res.statusCode = 404;
                res.end("404 Not Found");
                break;
        }
    });
});

myServer.listen(8000, () => {
    console.log("Server started on port 8000");
});