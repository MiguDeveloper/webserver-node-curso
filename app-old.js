const http = require('http');

http
  .createServer((req, res) => {
    res.write('hola Miguel');
    res.end(); // le indicamos qyue ya termino la escritura
  })
  .listen(8080);

console.log('Escuchando en el puerto 80');
