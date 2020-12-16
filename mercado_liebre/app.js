const express = require('express');
const path = require('path');

const app = express();

app.listen(3030,()=>{ console.log('server ML run')});

app.use(express.static(path.join(__dirname,'./public')));

app.get('/home',(req,res)=> {

  res.sendFile(path.join(__dirname,'./views/home.html'))
});