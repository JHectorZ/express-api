// Importamos los modulos
import 'reflect-metadata'
import app from './app'

// Declaracion de variables
const port = 8000

// Funcionalidades como escucha del puerto
app.listen(port);
console.log(`Server is start in link: http://localhost:${port}`);


