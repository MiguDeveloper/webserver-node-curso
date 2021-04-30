require('dotenv').config();
const hbs = require('hbs');
const express = require('express');

// inicio de express
const app = express();

// renderizar html desde backend
app.set('view engine', 'hbs');
hbs.registerPartials(`${__dirname}/views/partials`, function (err) {});

// json in req
app.use(express.json());

// servir content static: OJO las rutas estaticas tienen prioridad
app.use(express.static('public'));

app.use('/api/usuarios', require('./routers/usuario.routes'));

app.get('/', (req, res) => {
  res.render('home', {
    title: 'NODE::curso',
    developer: 'Miguel Chinchay',
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    title: 'NODE::curso',
    developer: 'Miguel Chinchay',
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    title: 'NODE::curso',
    developer: 'Miguel Chinchay',
  });
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

// inicio del server
app.listen(process.env.PORT, () => {
  console.log(`Express corriendo en el puerto ${process.env.PORT}`);
});
