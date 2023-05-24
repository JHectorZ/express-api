// Importacion de modulos
import { Router } from "express";

// Importacion de nuestros modulos
import { createUser, getUsers,updateUser } from '../controllers/user.controllers'

// Declaracion de variables
const router = Router();


// Enrutamiento
router.get('/', getUsers);
router.post('/create', createUser);
router.put('/update/:id', updateUser);

// Exportamos router
export default router;