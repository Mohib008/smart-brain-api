const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const app = express();


app.use(bodyParser.json());

const database = {
    users: [
        {
            id: "123",
            name: "Arsala",
            email: "arsala.m@gmail.com",
            password: "12345",
            entries: 0,
            joint: new Date(),
        },
        {
            id: "144",
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
            id: "13",
            name: "shakib",
            email: "Shakib.m@gmail.com",
            password: "145",
            entries: 0,
            joint: new Date(),
        },

    ], 

    longin:[

         {
           id: "1200",
           hash: "",
           email: "arsala@gmail.com"
         }
    ]
}




app.get("/", (req, res) => {
    res.send(database.users);
})

app.post("/signin", (req, res) => {
    if(req.body.email === database.users[0].email && req.body.password === database.users[0].password){
        res.json("Success!");
    } else {
        res.status(400).json("Longin fail Try again!");
    }
});

app.post("/register", (req, res) => {
    const {name, email, password} = req.body;
    bcrypt.hash(password, null, null, function(err, hash) {
        console.log(hash);
    })
    database.users.push({
        id: "12",
        name: name,
        email: email,
        password: password,
        entries: 0,
        joint: new Date(),
    });
    res.json(database.users[database.users.length-1]);
});

app.get("/profile/:id", (req, res)=> {
    let found = false;
    const { id } = req.params;
    database.users.forEach(user => {
        if(user.id === id) {
            found = true;
            res.json(user)
        } if (!found){
            res.status(404).json("User not found!");
        }
    });
});

app.put("/image", (req, res)=> {
    let found = false;
    const { id } = req.body;
    database.users.forEach(user => {
        if(user.id === id) {
            found = true;
            user.entries++
           return res.json(user.entries)
        } if (!found){
            res.status(400).json("User not found!");
        }
    });
});



app.listen(3000, () => {
    console.log("App is runing on port 3000!");
});

