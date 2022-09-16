import nodemailer from "nodemailer";

export async function sendLoginEmail({
  email,
  url,
  token,
}: {
  email: string;
  url: string;
  token: string;
}) {
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: "stellence.developer@stellence.com",
      pass: `N9/.f.NYke0o`,
    },
  });

  const info = await transporter.sendMail({
    from: "do-not-reply@stellence.com",
    to: email,
    subject: "Login to your account",
    html: `Login by clicking <a href="${url}/login#token=${token}">here</a>`,
  });

  console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
}
