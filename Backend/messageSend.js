const nodemailer = require('nodemailer');

const sendMail = async (transporter, mailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log('Error occurred:', error);
  }
};

const send = async (name, phone, email, message) => {
  // Create a transporter using your SMTP settings
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: process.env.smtp_email,
    port: process.env.smtp_port,
    secure: false,
    auth: {
      user: process.env.userEmail,
      pass: process.env.password
    }
  });

  // Compose the email message
  const mailOptions = {
    from: email,
    to: process.env.userEmail,
    subject: 'Communication',
    html: `
      <h1>YOUR MESSAGE</h1>
      <h4>sent By:</h4>
      <h2>${name}</h2>
      <h4>Message:</h4>

       <h3> ${message}</h3>
     
      <p>His email id: ${email}</p>
      <p>His Phone number: ${phone}</p>
    `
  };

  // Send the email
  await sendMail(transporter, mailOptions);
};

const sendmessage = async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;
    if (!name || !phone || !email || !message) {
      return res.status(400).json({ code: 400, message: 'Missing required fields' });
    }

    await send(name, phone, email, message);

    res.status(200).json({ code: 200, message: 'Message sent successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ code: 500, message: 'Something went wrong' });
  }
};

module.exports = { sendmessage };
