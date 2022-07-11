const fs = require('fs');
const path = require('path');


const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('<h1>Página Principal</h1>')
});

// app.get('/productos', function(req, res) {
//     res.sendFile(path.join(__dirname, '/views/productos.html'));
// });

app.get('/productos/:id', function(req, res) {
    const id = req.params.id;
    const filePath = path.join(__dirname, `/views/productos${ id }.html`);
    const ruta = fs.existsSync(filePath) ? filePath : path.join(__dirname, `/views/404.html`);

    res.sendFile(ruta);

    // res.send(`Productos: #${ id }`);
    //res.sendFile(path.join(__dirname, `/views/productos${ id }.html`));
});

app.listen(3000);