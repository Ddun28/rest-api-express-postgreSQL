import  express  from "express";
import router from "./router";
import db from "./config/db";
import colors from "colors";
//Conectar a base de datos
async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
       // console.log(colors.blue('conexion exitosa a la bd'));
    } catch (error) {
      console.log(error);
      console.log(colors.red.bold('Hubo un error al conectar a la BD'));
    }
}

connectDB()

// instancia de express
const server = express()

//Leer datos de formularios
server.use(express.json())

server.use('/api/products', router)

server.get('/api', (req, res) => {
  res.json({msg: 'Desde API'})
})

export default server