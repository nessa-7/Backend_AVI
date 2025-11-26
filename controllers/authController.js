const authService = require('../services/authService')

const authController = {
    async registeraspirante(req,res){
        const aspirantenuevo = await authService.registeraspirante(req.body)
        res.json({mensaje:"Registro realizado", aspirantenuevo})
    },

    async login(req, res){
        const result = await authService.login(req.body)
        if(!result){
            return res.json({mensaje: "Credenciales incorrectas"})
        }
        else{
            res.json({
                mensaje: "Login exitoso",
                token: result.token,
                aspirante: result.aspirante
            })
        }
    }
}

module.exports = authController