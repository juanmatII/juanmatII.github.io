
const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    res.send('Hola con Express');
});
app.get('/contactos',(req, res)=>{
    res.send('Hola con Express');
});
app.get('/servicion',(req, res)=>{
    res.send('Hola con Express');
});
app.get('/usuario/:id',(req, res)=>{
    res.send(`Usuario ID: ${req.params.id}`);
})

app.listen(3000, ()=>console.log('Servidor express'));