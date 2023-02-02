const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(cors());

app.post("/ContactForm", async (req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
      user: "mahmoodibrahim886@gmail.com",
      pass: "vjaaskszsnwcubxl",
    },
  });

  let info = await transporter.sendMail({
    from: 'mahmoodibrahim886@gmail.com',
    to: "hmughal0123@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  });

    res.send({
    message: info.messageId,
  });
  
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
});

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});
