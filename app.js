const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const orders = require("./routes/api/orders");
// const User = require('./models/User');
const bodyParser = require('body-parser');
const passport = require('passport')

mongoose
    .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log("Connected to mongoDB"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(passport.initialize())
require('./config/passport')(passport)

// app.get("/", (req, res) => {
    // const user = new User({
    //     email: "test@test.com",
    //     password: "123456"
    // })
    // user.save()
    // res.send("Hello Alice!");
// });

app.use("/api/users", users);
app.use("/api/orders", orders);



const port = process.env.PORT || 5000;

app.listen(port, () => {console.log(`Listening on port ${port}`)});


