import { Request, Response } from 'express';
import {mailer} from '../helpers/mailer';

export const sendEmail = async (req: Request, res: Response) => {
    console.log(req.body)
  const { name, email, message } = req.body;
  const mailOptions = {
    name,
    email,
    message
  }
  try {
    const info = await mailer(mailOptions);
    console.log('Mensaje enviado: ' + info.response);
    res.send('Mensaje enviado correctamente');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al enviar el mensaje');
  }
};

export default { sendEmail };
