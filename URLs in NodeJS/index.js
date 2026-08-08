const http = require("http");
const fs = require("fs");
const url = require("url");


const myServer = http.createServer((req, res) => {
        if (req.url === "/favicon.ico") {
            res.statusCode = 204;
             return res.end();
        };

    const log = `${new Date().toLocaleString()} ${req.url} "New req recived \n`;
    const myUrl = url.parse(req.url, true) ;
    console.log(myUrl);
    

    fs.appendFile("test.txt", log + "\n", (err)=>{
        if (err) {
            console.log(err);
        }
   

    switch (myUrl.pathname) {
        case "/": res.end("Welcome Home");
            
            break;
        case "/about": 
        const username = myUrl.query.myname;
        const age = myUrl.query.myage;

        res.end(`Hi my name is ${username} and my age is ${age}`); 
            break;  
        case "/search": 
        const search = myUrl.query.search_query;
        res.end(`Here are your result search ${search}`);
            break;

        default:
           res.end("404 not found");
    }
   });
});

myServer.listen(8000, () => {
    console.log("Server started");
});