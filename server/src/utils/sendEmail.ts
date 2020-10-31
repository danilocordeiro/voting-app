import * as nodemailer from 'nodemailer';

export const main = async() => {
  let transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 465,
    secure: true,
    auth: {
      user: 'apikey',
      pass: process.env.SENDGRID_API_KEY
    }
  })
}