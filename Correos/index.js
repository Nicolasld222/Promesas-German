const nodemailer = require('nodemailer');
const fs = require('fs');
require('dotenv').config();

// 1. Crear el transporte SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// 2. Función para enviar un solo correo
function enviarCorreo({ to, subject, text }) {
  return transporter.sendMail({
    from: `"Mailer" <${process.env.SMTP_USER}>`,
    to,
    subject,
    text
  });
}

// 3. Leer los correos del archivo
const listaCorreos = JSON.parse(fs.readFileSync('emails.json', 'utf8'));

// 4. Enviar todos los correos usando Promesas
Promise.all(listaCorreos.map(enviarCorreo))
  .then(results => {
    console.log(`✅ Correos enviados correctamente: ${results.length}`);
  })
  .catch(error => {
    console.error(`❌ Error al enviar correos:`, error);
  });