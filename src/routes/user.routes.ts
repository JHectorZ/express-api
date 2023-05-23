// Importacion de modulos
import { Router } from "express";

// Importacion de nuestros modulos
import { createUser } from '../controllers/user.controllers'

// Declaracion de variables
const router = Router();


// Enrutamiento
router.get('/', (req, res) =>{
    res.send('Este es el router de productos')
})

router.post('/create', createUser)

// Exportamos router
export default router;