const admin = require("firebase-admin");
const functions = require("firebase-functions");

admin.initializeApp();

exports.contactMe = functions.https.onCall((data, context) => {
  admin
    .firestore()
    .collection("mail")
    .add({
      to: "camillerweber@gmail.com",
      replyTo: `${data.email}`,
      message: {
        subject: `Message from ${data.name}`,
        html: `<h5>Name: ${data.name}</>
          <h5>Phone: ${data.phone}</>
          <h5>Email: ${data.email}</>
          <h5>Message: ${data.message}</>
          `,
      },
    });
});
