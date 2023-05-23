// Importamos los modulos
import 'reflect-metadata';
import app from './app';
import { AppDataSource } from './db';

// Declaracion de variables
const port = 8000;

// Importamos nuestros modulos
import routerUser from './routes/user.routes'

// Funcionalidades
async function main() {
    await AppDataSource.initialize();
    console.log('[+] La base de datos se ha initalizado correctamente');
    
    app.listen(port);
    console.log(`[+] El server ha sido iniciado, este es el link: http://localhost:${port}`);
};

main()


// Enrutamiento
app.use('/user', routerUser)


