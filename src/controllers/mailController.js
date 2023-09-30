import { mailer } from "../helpers/mailer.js";

export const sendEmail = async (req, res) => {
  const mailOptions = {
    from: req.body.email,
    to: 'lu.obregon@hotmail.com',
    subject: `Mensaje de ${req.body.name}`,
    text: req.body.message,
  };
  try {
    const info = await mailer(mailOptions);
    console.log('Mensaje enviado: ' + info.response);
    res.send('Mensaje enviado correctamente');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al enviar el mensaje');
  }
};
