import  express  from "express";
import router from "./router";
import db from "./config/db";
import colors from "colors";
import cors, {CorsOptions} from "cors";
import morgan from 'morgan'
import swaggerUi, { serve } from "swagger-ui-express";
import swaggerSpec, { swaggerUiOptions } from "./config/swagger";

//Conectar a base de datos
export async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
       // console.log(colors.blue('conexion exitosa a la bd'));
    } catch (error) {
      //console.log(error);
      console.log(colors.red.bold('Hubo un error al conectar a la BD'));
    }
}

connectDB()

// instancia de express
const server = express()

// Permitir conexiones
const corsOptions : CorsOptions = {
  origin: function(origin, callback) {
    const whitelist = [process.env.FRONTEND_URL]
    callback(null, true)
}
}

server.use(cors(corsOptions))

//Leer datos de formularios
server.use(express.json())

server.use(morgan('dev'))
server.use('/api/products', router)

// Docs 
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions))

export default server