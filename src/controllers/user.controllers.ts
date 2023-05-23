// Importaciones de los modulos
import {Request, Response} from 'express'
import { User } from '../entities/User'
import { error } from 'console';

// Funcion para la creacion para el usuario
export const createUser = async(req: Request, res: Response) =>{
     try {
        const user = new User;

        const { firstname, lastname } = req.body;
        user.firstname = firstname;
        user.lastname = lastname;

        await user.save();
        return res.json(user)
     } catch (error) {
        return res.json({
            message: error
        })
     }
}

