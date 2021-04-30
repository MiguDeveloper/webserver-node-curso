const { Router } = require('express');
const { getUsuariosAll } = require('../controllers/usuarios.controller');

const router = Router();

// get all users
router.get('/', getUsuariosAll);

module.exports = router;
