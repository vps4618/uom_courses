"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      user: "vishwapraveen4618@gmail.com", // generated ethereal user
      pass:"fljiyzpborpezcxi", // gmail generated app password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Vishwa Praveen" <vishwapraveen30145@gmail.com>', // sender address
    to: "vishwapraveen30145@gmail.com", // list of receivers
    subject: "Test Email", // Subject line
    text: "The email send by nodemailer npm package.", // plain text body
    html: "<b>The email send by nodemailer npm package.</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
