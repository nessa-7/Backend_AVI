const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const bcrypt = require("bcryptjs")

const jwt = require("jsonwebtoken")

const authService = {

    async registeraspirante(data){
        const {idASPIRANTE,nombre_completo,email,telefono,password}=data

        //encriptar password
        const datoencriptado = await bcrypt.hash(password,10)
        const nuevoaspirante = await prisma.aSPIRANTE.create({data:
            {idASPIRANTE,nombre_completo,email,telefono,password:datoencriptado}
        })

        return nuevoaspirante
    },

    
    async login(data){
        const {idASPIRANTE, password} = data
        const aspirante = await prisma.aSPIRANTE.findUnique({ where: { idASPIRANTE }})
        if (!aspirante){
            return null
        }
        else{
            const valido = await bcrypt.compare(password, aspirante.password)
            if (!valido){
                return null
            }
            const token = jwt.sign(
                { id: aspirante.idASPIRANTE, email: aspirante.email, nombre_completo: aspirante.nombre_completo},
                "JWT_SECRET",
                { expiresIn: "2h"}
            )
            return {aspirante, token}
        }
    },

    logout(){

    }

}

module.exports = authService