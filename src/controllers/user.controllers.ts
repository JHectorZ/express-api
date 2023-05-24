// Importaciones de los modulos
import { Request, Response } from 'express';
import { User } from '../entities/User';

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
      if (error instanceof Error){
         return res.status(500).json({message:error.message})
      }
   }
};

// Funcion de obtener usuarios
export const getUsers = async (req: Request, res: Response) => {
   try {
      const users = await User.find();
      return res.status(200).json(users);
   } catch (error) {
      if (error instanceof Error){
         return res.status(500).json({message:error.message})
      }
   }
};

// Funcion de actualizar usuarios
export const updateUser = async (req: Request, res: Response) => {
   try {
      const dataId = parseInt(req.params.id);
      const user = await User.findOneBy({ id: dataId });

      if (!user) return res.status(404).json({ message: "El usuario no existe" })

      await User.update({ id: dataId }, req.body);

      return res.status(204).json({ message: "Ha sido actualizado el usuario" })

   } catch (error) {
      if (error instanceof Error){
         return res.status(500).json({message:error.message})
      }
   };
};

// Funcion para eleminar usuarios
export const deleteUser = async (req: Request, res: Response) => {
   try {
      const dataId = parseInt(req.params.id);
      const result = await User.delete({ id: dataId });

      if (result.affected === 0) return res.status(404).json({ message: "El usuario no existe" })

      return res.status(204).json({
         message: "El usuario ha sido borrado exitosamente"

      });
   } catch (error) {
      if (error instanceof Error){
         return res.status(500).json({message:error.message})
      }
   }
}; 