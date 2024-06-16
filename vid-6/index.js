const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// middleware for body parer
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    // res.send("Hellow world vai")
    res.render("index");
})

app.get('/profile/:username', (req, res) => {
    res.send(`Welcome ${req.params.username} !`)
})

app.get('/profile/:username/:age', (req, res) => {
    res.send(`Your name is ${req.params.username} and Age is: ${req.params.age} .`)
})

app.listen(port, () => {
    console.log(`server is Running on  ${port}`)
})