const express = require('express');
const app = express();
const path = require('path');

/** motor generador de plantillas */
app.set('view engine', 'pug');
/** senialar la carpaeta raiz de vistas */
app.set('views', path.join(__dirname, 'views'));

/** Routes */
app.use(require('./routes/index.route'))

/** static files */
app.use(express.static(path.join(__dirname, '../public')));

app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../public/404.html'));
})


app.listen(3000, ()=>{
    console.log('servidor a la espera de conexiones');
})