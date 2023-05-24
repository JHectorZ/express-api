// Importaciones de los modulos
import { Request, Response } from 'express';
import { User } from '../entities/User';
import { error } from 'console';

// Funcion para la creacion para el usuario
export const createUser = async (req: Request, res: Response) => {
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
};

// Funcion de obtener usuarios
export const getUsers = async (req: Request, res: Response) => {
   try {
      const users = await User.find();
      return res.json(users);
   } catch (error) {
      return res.json({
         message: error
      })

   }
};

// Funcion de actualizar usuarios
export const updateUser = async (req: Request, res: Response) => {
   try {
      const { firstname, lastname } = req.body
      const dataId = parseInt(req.params.id);
      const user = await User.findOneBy({ id: dataId });

      if (!user) return res.json({ message: "El usuario no existe" })

      user.firstname = firstname
      user.lastname = lastname
      user.save()

      return res.json({message:"Ha sido actualizado el usuario"})

   } catch (error) {
      return res.json({
         message: error
      });
   };
};