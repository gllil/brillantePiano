// const admin = require("firebase-admin");
const functions = require("firebase-functions");

const nodemailer = require("nodemailer");

// admin.initializeApp();

exports.contactMe = functions.https.onCall((data, context) => {
  const output = `
  <br/>
  <h5>Name: ${data.name}</><br/>
  <h5>Phone: ${data.phone}</><br/>
  <h5>Email: ${data.email}</><br/>
  <h5>Message: ${data.message}</>

  `;

  async function main() {
    let transporter = nodemailer.createTransport({
      host: "smtp.outlook.com",
      port: 587,
      secure: false,
      auth: {
        user: "garyjllil@outlook.com", // generated ethereal user
        pass: functions.config().contactemail.password, // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `Brillante Piano Mail <garyjllil@outlook.com>`, // sender address
      replyTo: `${data.email}`,
      to: "camillerweber@gmail.com", // list of receivers
      subject: `Message from ${data.name}`, // Subject line
      text: null,
      html: output, // html body
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }

  return main()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  // admin
  //   .firestore()
  //   .collection("mail")
  //   .add({
  //     to: "garyjllil@gmail.com",
  //     replyTo: `${data.email}`,
  //     message: {
  //       subject: `Message from ${data.name}`,
  //       html: `<h5>Name: ${data.name}</>
  //         <h5>Phone: ${data.phone}</>
  //         <h5>Email: ${data.email}</>
  //         <h5>Message: ${data.message}</>
  //         `,
  //     },
  //   });
});
