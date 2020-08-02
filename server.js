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
            email: "Mohib.m@gmail.com",
            password: "145",
            entries: 0,
            joint: new Date(),
        },
        {
            id: "1234",
            name: "Nazif",
            email: "Nazif.m@gmail.com",
            password: "1234",
            entries: 0,
            joint: new Date(),
        },
        {
            id: "12",
            name: "Shakib",
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
    res.send("Signin");
})

app.listen(3000, () => {
    console.log("App is runing on port 3000!");
});