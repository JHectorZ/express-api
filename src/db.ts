// Hacemos la importacion de modulos
import { DataSource } from "typeorm";

// Declaracion del ojeto para la base de datos
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "dev",
    password: "admin",
    database: "typeorm",
    entities: [],
    logging: true,
})