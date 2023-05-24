// Importacion de modulos
import { Router } from "express";

// Importacion de nuestros modulos
import { createUser, getUsers, updateUser, deleteUser } from '../controllers/user.controllers'

// Declaracion de variables
const router = Router();


// Enrutamiento
router.get('/', getUsers);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

// Exportamos router
export default router;