import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nom, prenom, ecole, email, phone } = req.body;

    console.log("In the submit-form.js file");

    console.log(process.env.EMAIL_USER);
    console.log(process.env.EMAIL_PASS);

    // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // your Gmail password or app-specific password
      },
    });

    try {
      // Send email
      await transporter.sendMail({
        from: '"Your Website" <your-email@gmail.com>', // sender address
        to: "recipient@example.com", // list of receivers
        subject: "New Form Submission", // Subject line
        text: `
          Nom: ${nom}
          Prénom: ${prenom}
          École: ${ecole}
          ${email ? `Email: ${email}` : `Téléphone: ${phone}`}
        `, // plain text body
        html: `
          <h1>New Form Submission</h1>
          <p><strong>Nom:</strong> ${nom}</p>
          <p><strong>Prénom:</strong> ${prenom}</p>
          <p><strong>École:</strong> ${ecole}</p>
          <p><strong>${email ? 'Email' : 'Téléphone'}:</strong> ${email || phone}</p>
        `, // html body
      });

      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error submitting form' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}