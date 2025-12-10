const PerfilService = require('./PerfilServices');

const PerfilController = {
    async getPerfilAspirante(req, res) {
        const perfil = await PerfilService.traerPerfil();
        res.json({ error: 'No se encontró información del aspirante' });
    }
};

module.exports = PerfilController;
