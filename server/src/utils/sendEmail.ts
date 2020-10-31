import * as nodemailer from 'nodemailer';

export const sendEmail = async(email: string, link: string ) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 465,
    secure: true,
    auth: {
      user: 'apikey',
      pass: process.env.SENDGRID_API_KEY
    }
  })

  const info = await transporter.sendMail({
    from: '"D systems" <danilocordeiro.ti@gmail.com>',
    to: email,
    subject: 'Welcome',
    text: 'Account confirmation',
    html: `<b>Hello</b> <a href="${link}">Confirm email</a>`,
  });

  console.log('Message sent: %s', info.messageId);
}