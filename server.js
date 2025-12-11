const express = require("express")
const app = express()
const authRoutes = require("../aviBack/routes/authRoutes")
const PreguntasRoutes = require("./routes/PreguntasRouter")
const RespuestaRoutes = require("./routes/RespuestaRouter")
const ProgramasRoutes = require("./routes/programasRoutes")
const PerfilRoutes = require("./routes/PerfilRoutes")
const cors = require("cors")
const bcrypt = require("bcryptjs")
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()


app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json())
app.use('/api',authRoutes,PreguntasRoutes,RespuestaRoutes,ProgramasRoutes,PerfilRoutes)


app.post("/crearadmin", async (req, res) => {
    
    const {idADMIN,nombre,email,password} = req.body
    const datoencriptado = await bcrypt.hash(password,10)
    const nuevoadmin = await prisma.aDMIN.create({data:
        {idADMIN: Number(idADMIN),nombre,email,password:datoencriptado}
    })
    res.json(nuevoadmin)
})

app.listen(4000, () => {
    console.log('Servidor ejecutando puerto 4000')
})