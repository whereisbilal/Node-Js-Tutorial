const http = require("http");
const fs = require("fs");
const url = require("url")


const myHandler = ((req, res) => {
    if (req.url === "/favicon.ico") {
        res.statusCode = 204;
        return res.end();
    }

    const logs = `${req.method} ${req.url} \n`;
    const myUrl = url.parse(req.url, true)

    fs.appendFile("uri.txt", logs, (err) => {
        if (err) {
            console.log("Error", err);
            return res.end("Something went wrong");
        }
    });

    switch (myUrl.pathname) {
        case "/":
            if (req.method === "GET") {
                res.end("Home page");
            }

            break;

        case "/search":
            if (req.method === "GET") {
                const search = myUrl.query.query_search;
                const age = myUrl.query.myage;

                res.end(`Here are your search result ${search} and my age is ${age}`)
            }

            break;

        default:
            break;
    }
})


const server = http.createServer(myHandler);


server.listen(8000, () => {
    console.log("Server in running on 8000");
})

