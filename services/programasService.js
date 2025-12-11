const programas = require('../data/programas');

const ProgramasService = {
  async traerProgramas() {
    return programas;
  }
};

module.exports = ProgramasService;
