import nodemailer from "nodemailer";

// Configuración de transporte de correo
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'mail@gmail.com', // Correo electrónico desde el cual se enviará el mensaje
    pass: 'tu_contraseña', // Contraseña del correo electrónico
  },
});

export async function mailer(mailOptions) {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
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