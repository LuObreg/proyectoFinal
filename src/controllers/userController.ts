import { Request, Response } from 'express';
import { User } from '../models/User';
import { generateHash } from '../helpers/encrypt';
const bcrypt = require('bcrypt');

const secretPassword = '$2b$10$HetQ66oQKr5YvUi8M/Rl4uawwMTcF5SOPkCpGz9azTg13hXn7TMWO';

export const loginUser = async (req: Request, res: Response) => {
  const userData: User = req.body; // Asigna los datos del body a una variable de tipo User

  // Validación de los datos
  if (!userData.username || !userData.password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    const result = await bcrypt.compare(userData.password, secretPassword);
    
    if (result) {
      return res.status(200).json({ message: 'Login successful' });
    } else {
      return res.status(400).json({ message: 'Password is incorrect' });
    }
  } catch (error) {
    console.error('Error al generar el hash:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};