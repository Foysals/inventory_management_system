var nodemailer = require('nodemailer');

const SendEmailUtility= async (EmailTo, EmailText, EmailSubject) => {

    let transporter = nodemailer.createTransport({
        host: 'mail.moulik.com.bd',
        port: 25,
        secure: false,
        auth: {
            user: "info@moulik.com.bd",
            pass: '$&*1590s'
        },tls: {
            rejectUnauthorized: false
        },
    });

    let mailOptions = {
        from: 'Inventory Management System <info@moulik.com.bd>',
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText
    };

   return  await transporter.sendMail(mailOptions)

}
module.exports=SendEmailUtility