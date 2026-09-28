const express = require("express");
const http = require("http");


const app = express();
const PORT = 8000;


app.get("/", (req, res) => {
    res.send("This is a home page")
});

app.get("/about", (req, res) => {
    const name = req.query.name;
    res.send(`This is a about page and my name is ${name} and my age is ${req.query.myage}`)
});

// const server = http.createServer(app);
app.listen(PORT, () => {
    console.log("Server Started");
});