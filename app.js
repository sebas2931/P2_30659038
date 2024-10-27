const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,'/static')));

app.set('view engine','ejs');

app.set('views',path.join(__dirname,'/views'));

app.get('/',(req,res)=>{
    try{
    res.render('index'); 
    }catch(error){
    console.error(error.message);
    res.status(500).send('Error en el Servidor');    
    }
});

app.listen(port,()=>{
    console.log(`Ruta Completa del Servidor : ${__dirname} `)
    console.log(`Servidor corriendo en el puerto : ${port} `);
})
