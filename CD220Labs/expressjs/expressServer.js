const express = require('express');
const app = new express();

let loginDetails = [];
const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];

app.get("/",(req,res)=>{
    res.send("Welcome to the express server")
})

app.get("/loginDetails",(req,res)=>{
    res.send(JSON.stringify(loginDetails));
})

app.post("/login/:name",(req,res)=>{
    loginDetails.push({"name":req.params.name,"login_time":new Date()});
    res.send(req.params.name + ", You are logged in!")
})

app.get("/:name",(req,res)=>{
    res.send("Hello "+req.params.name)
})

// fix
app.get("/fetchMonth/:num", (req, res) => {
    let index = parseInt(num) - 1;
    if (index >= 1 && index < months.length) {
        res.send(months[index]);
    } else {
        res.status(400).send("Invalid month number");
    }
});

app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})

