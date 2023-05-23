// Importamos los modulos
import express from 'express';
import morgan from 'morgan';
import corns from 'cors'

// Hacemos la delacaracion de variables
const app = express();

// Creacion y uso de los modulos morgan y cors
app.use(morgan('dev'));
app.use(corns())
app.use(express.json())

// Exportacion de app
export default app;