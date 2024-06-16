const express = require('express');
const app = express();
const port = 3000;


// middleware for body parer
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    // res.send("Hellow world vai")
    res.render("index");
})

app.listen(port, () => {
    console.log(`server is Running on  ${port}`)
})