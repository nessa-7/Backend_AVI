const express = require('express');
const router = express.Router();
const ProgramasController = require('../controllers/programasController');

router.get('/', ProgramasController.getProgramas);

module.exports = router;
