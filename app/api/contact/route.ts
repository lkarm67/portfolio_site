import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "fsdkl04@gmail.com",
      subject: `New message from ${name}`,
      html: `
        <h2>New message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p>${message}</p>
      `,
    });

    console.log("RESEND RESULT:", result);

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false }, { status: 500 });
  }
}