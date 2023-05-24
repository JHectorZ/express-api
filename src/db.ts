// Hacemos la importacion del .env para obtener las credenciales
import dotenv from 'dotenv';
dotenv.config();

// Hacemos la importacion de modulos
import { DataSource } from "typeorm";
import { User } from './entities/User'

// Declaracion del ojeto para la base de datos
export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3306'),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [User],
    logging: true,
    synchronize: true
});