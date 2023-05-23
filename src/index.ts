// Importamos los modulos
import express from 'express';
import morgan from 'morgan';
import corns from 'cors'
import 'reflect-metadata'

// Hacemos la delacaracion de variables
const app = express();
const port = 8000

// Creacion y uso de los modulos morgan y cors
app.use(morgan('dev'));
app.use(corns())

// Funcionalidades como escucha del puerto
app.listen(port);
console.log(`Server is start in link: http://localhost:${port}`);


