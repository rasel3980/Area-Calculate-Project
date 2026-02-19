const express = require('express');
const PORT = 3000;
const app = express();

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})
app.get('/triangle',(req,res)=>{
    res.sendFile(__dirname + '/triangle.html')
})
app.get('/circle',(req,res)=>{
    res.sendFile(__dirname + '/circle.html')
})
app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);
})