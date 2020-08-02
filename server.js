const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const app = express();


app.use(bodyParser.json());

const database = {
    users: [
        {
            id: "123444",
            name: "Arsala",
            email: "arsala.m@gmail.com",
            password: "12345",
            entries: 0,
            joint: new Date(),
        },
        {
            id: "1244",
            name: "Mohib",
            email: "mohib.m@gmail.com",
            password: "145",
            entries: 0,
            joint: new Date(),
        },
        {
            id: "12",
            name: "Nazif",
            email: "nazif.m@gmail.com",
            password: "1234",
            entries: 0,
            joint: new Date(),
        },
        {
            id: "12",
            name: "shakib",
            email: "Shakib.m@gmail.com",
            password: "145",
            entries: 0,
            joint: new Date(),
        },

    ]
}


app.get("/", (req, res) => {
    console.log(database.users);
})

app.post("/signin", (req, res) => {
    if(req.body.email === database.users[0].email && req.body.password === database.users[0].password){
        res.json("Success!");
    } else {
        res.status(400).json("Longin fail Try again!");
    }
})




app.listen(3000, () => {
    console.log("App is runing on port 3000!");
});

