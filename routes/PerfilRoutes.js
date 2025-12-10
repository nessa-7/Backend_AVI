const express = require('express');
const router = express.Router();
const PerfilController = require('./PerfilController');

router.get('/perfilaspirante', PerfilController.getPerfilAspirante);

module.exports = router;
