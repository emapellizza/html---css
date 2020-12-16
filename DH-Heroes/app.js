const express = require('express');
const path = require('path');

const app = express();

app.listen(3031,()=>{ console.log('server run')});

const publicPath = path.resolve(__dirname,'./public')
app.use(express.static(publicPath));

app.get('/',(req,res)=> {
  /* let htmlpath = path.resolve(__dirname,'./index.html')
   res.sendFile(htmlpath);
   */
  res.sendFile(path.join(__dirname,'./views/index.html'))
});

app.get('/home',(req,res)=> {
  res.sendFile(path.join(__dirname,'./views/home.html'))
});

app.get('/babbage',(req,res)=> {
    res.sendFile(path.join(__dirname,'./views/babbage.html'))
  });

  app.get('/berners-lee',(req,res)=> {
    res.sendFile(path.join(__dirname,'./views/berners-lee.html'))
  });

  app.get('/clarke',(req,res)=> {
    res.sendFile(path.join(__dirname,'./views/clarke.html'))
  });

  app.get('/hamilton',(req,res)=> {
    res.sendFile(path.join(__dirname,'./views/hamilton.html'))
  });

  app.get('/hopper',(req,res)=> {
    res.sendFile(path.join(__dirname,'./views/hopper.html'))
  });

  app.get('/lovelace',(req,res)=> {
    res.sendFile(path.join(__dirname,'./views/lovelace.html'))
  });

  app.get('/turing',(req,res)=> {
    res.sendFile(path.join(__dirname,'./views/turing.html'))
  });
