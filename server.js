const express = require('express');
const bodyParser = require('body-parser')
const PORT = 3000;
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})
app.get('/triangle',(req,res)=>{
    res.sendFile(__dirname + '/triangle.html')
})
app.get('/circle',(req,res)=>{
    res.sendFile(__dirname + '/circle.html')
})

app.post('/circle',(req,res)=>{
    const radius = req.body.radius;
    const area = Math.PI * radius * radius;
    res.send(`<h3>Are of Circle is : ${area}</h3>`)
})
app.post('/triangle',(req,res)=>{
    const base = req.body.base;
    const height = req.body.height;
    const area = 0.5 * base * height;
    res.send(`<h3>Are of Circle is : ${area}</h3>`)
})
app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);
})