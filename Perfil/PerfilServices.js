const { prisma } = require('../prisma/prismaClient');

const PerfilService = {
    async traerPerfil() {
        return await prisma.aspirante.findMany(); 
    }
};

module.exports = PerfilService;
