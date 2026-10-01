const express = require("express");

   const app = express();  

app.get("/", (req, res) => {
    res.send("Hello /")
    
});

app.get("/about", (req, res)=>{
      const name = req.query.name;
      const age = req.query.age;
      if (!name) {
        res.send("plz write a name")
      }

      if (!age) {
        res.send("plz write a age") 
      }

    res.send(`My name is ${name} My age is ${age}`);
})

app.listen(8000, ()=>{
    console.log("server started");
    
});

