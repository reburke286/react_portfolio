var express = require("express");
var nodemailer = require("nodemailer");

// Sets up the Express App
// =============================================================
var app = express();

//Messages
const messages = [];

//get msg
app.get("msg", function (req, res) {
    return res.json(messages);
  });
  
// Post Routes
  app.post("/msg", (req, res) => {
    const output = `
    <p>You have a new message</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p> ${req.body.message}</p>
    `;
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "reburke286",
        pass: "$croogeMcDuck3",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  
    // send mail with defined transport object
    let info = transporter.sendMail({
      from: '"Portfolio Contact" <reburke286@gmail.com>',
      to: "rebeccadburke@gmail.com",
      subject: "Contact from Portfolio",
      html: output,
    });
  
    console.log("Message sent: %s", info.messageId);
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });

module.exports = router;