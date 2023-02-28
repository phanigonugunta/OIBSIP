const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();
const port = 80;
// const mongoose = require('mongoose');

// const Register = require("./db");
// require("./db");
// const reg = require("./db");
// require("./conn");

mongoose.connect('mongodb://127.0.0.1:27017/pbp', { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error",()=>{console.log("error in connection")});
db.once("open",()=>{console.log("connected to database")});

const pageSchema = new mongoose.Schema({
        myname: String,
        mypass: String
});

const signupp = new mongoose.Schema({
    myname: String,
    pno: String,
    email: String,
    passw: String,
});

var pbpc = mongoose.model("pbpc",pageSchema);
// var ps1 = mongoose.model("",)

app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 

app.use('/static/mp/assets/bootstrap/css',express.static('static/mp/assets/bootstrap/css'));
app.use('/static/mp/assets/bootstrap/js',express.static('static/mp/assets/bootstrap/js'));
app.use('/static/mp/assets/css',express.static('static/mp/assets/css'));
app.use('/static/mp/assets/fonts',express.static('static/mp/assets/fonts'));
app.use('/static/mp/assets/img',express.static('static/mp/assets/img'));
app.use('/static/mp/assets/js',express.static('static/mp/assets/js'));
app.use('/static/login/login/assets/bootstrap/css',express.static('static/login/login/assets/bootstrap/css'));
app.use('/static/login/login/assets/bootstrap/js',express.static('static/login/login/assets/bootstrap/js'));
app.use('/static/login/login/assets/css',express.static('static/login/login/assets/css'));
app.use('/static/signup/assets/bootstrap/css',express.static('static/signup/assets/bootstrap/css'));
app.use('/static/signup/assets/bootstrap/js',express.static('static/signup/assets/bootstrap/js'));
app.use('/static/signup/assets/css',express.static('static/signup/assets/css'));
app.use('/static/signup/assets/fonts',express.static('static/signup/assets/fonts'));
app.use('/static/signup/assets/js',express.static('static/signup/assets/js'));

app.set('view engine', 'ejs')

// Set the views directory
app.set('views', path.join(__dirname, 'views'))


app.get("/", (req, res)=>{ 
    res.status(200).render(`main.ejs`);
});

app.get("/login", (req, res)=>{
    res.status(200).render(`login.ejs`);
});


app.post("/login", async (req, res)=>{
    username = req.body.email
    password = req.body.password
    
    const login1 = new pbpc({ myname: username, mypass: password });
    const logged = await login1.save();
    console.log(username);
    // res.send(username);
    res.status(200).render("main1.ejs");
    console.log(logged);

});

app.post("/signup", (req, res)=>{

    console.log("submitted");
    username = req.body.name
    password = req.body.password
    phone = req.body.phone
    email = req.body.email
    gender = req.body.RadioOption
    address = req.body.address

    let output = username+" "+password+" "+phone+" "+email+" "+gender+" "+address
    fs.writeFileSync('output2.txt', output)
    res.status(200).render('main.ejs');
});


app.get("/signup", (req, res)=>{
    res.status(200).render(`signup.ejs`);
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});