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
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false});
  }
};
