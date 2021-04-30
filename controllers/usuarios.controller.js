const { response } = require('express');

const getUsuariosAll = (req, res = response) => {
  res.status(200).send({
    name: 'Miguel',
    lastName: 'Chinchay',
  });
};

module.exports = { getUsuariosAll };
