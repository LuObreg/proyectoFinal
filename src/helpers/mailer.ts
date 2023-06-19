var nodemailer = require("nodemailer");
import { MailOptions } from '../models/Mail';

// Configuración de transporte de correo
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'mail@gmail.com', // Correo electrónico desde el cual se enviará el mensaje
    pass: 'tu_contraseña', // Contraseña del correo electrónico
  },
});


async function mailer(mailOptions: MailOptions): Promise<{ response: string }> {
  return new Promise<{ response: string }>((resolve, reject) => {
    transporter.sendMail(mailOptions, (error: Error | null, info: string) => {
      if (error) {
        console.error(error);
        reject('Error al enviar el mensaje');
      } else {
        console.log('Mensaje enviado: ' + info);
        resolve({ response: 'Mensaje enviado correctamente' });
      }
    });
  });
}


 export {mailer};