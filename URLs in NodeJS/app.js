const url = require("url");
const http = require("http");
const fs = require("fs");




const Server = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") {
        res.statusCode = 204;
        return res.end();
    };

    const logs = `${new Date().toLocaleString()} ${req.url} New request recived`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);


    fs.appendFile("fax.txt", logs + "\n", (err) => {
        console.log(err);

        switch (myUrl.pathname) {
            case "/": res.end("Welcome Home");
                break;
            case "/about":
                const username = myUrl.query.myname
                const age = myUrl.query.myage

                if (!username || !age) {
                    return res.end("please enter a key and value in url");
                }

                res.end(`Hello my name is ${username} and i am ${age} years old`);

                break;

            case "/search":
                const search = myUrl.query.search_query;
                res.end(`Here are your result search ${search}`);

                break;
            default:
                res.end("404 not found");
        }
    })

})


Server.listen(8000, () => {
    console.log("server start http://localhost8000")
})
