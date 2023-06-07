"use server";

import Mailjet from "node-mailjet";

export default async function barContactHandler(data) {
  const { subject, content, email } = await data;
  //console.log(subject, content, email);

  try {
    const mailjet = new Mailjet({
      apiKey: process.env.MJ_APIKEY_PUBLIC,
      apiSecret: process.env.MJ_APIKEY_PRIVATE,
    });

    const request = mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.MAILJET_SENDER_EMAIL,
            Name: "Website Bar Contact",
          },
          To: [
            {
              Email: process.env.MAILJET_RECIPIENT_EMAIL,
              Name: "Robin",
            },
          ],
          Subject: subject,
          TextPart: `Hello Robin,
            you reveiced a new Message via the Bar Contact Form:
            ________________________________________________
            ${content}
            ________________________________________________
            from ${email}`,
          //   HTMLPart:
          //     '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
        },
      ],
    });
    request
      .then((result) => {
        console.log(result.body);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.error("ERROR:", error);
  }
}
