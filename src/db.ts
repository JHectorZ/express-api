// Hacemos la importacion de modulos
import { DataSource } from "typeorm";
import { User } from './entities/User'

// Declaracion del ojeto para la base de datos
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "dev",
    password: "admin",
    database: "typeorm",
    entities: [User],
    logging: true,
    synchronize: true
})