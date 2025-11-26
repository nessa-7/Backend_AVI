const express = require("express")
const app = express()
const authRoutes = require("../aviBack/routes/authRoutes")
const PreguntasRoutes = require("./routes/PreguntasRouter")
const RespuestaRoutes = require("./routes/RespuestaRouter")
const cors = require("cors")

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json())
app.use('/api',authRoutes,PreguntasRoutes,RespuestaRoutes)

app.listen(4000, () => {
    console.log('Servidor ejecutando puerto 4000')
})