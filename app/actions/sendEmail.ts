"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const tel = formData.get("tel") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !tel || !message) {
        return { success: false, error: "Please fill in all fields." };
    }

    try {
        const { data, error } = await resend.emails.send({
            from: "Jesselton Stay <jesseltonstay@sabahclick.com>",
            to: ["blisshomesabah@gmail.com"],
            subject: `New Contact Form Submission from ${name}`,
            replyTo: email,
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #0d9488;">New Inquiry - Jesselton Stay</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${tel}</p>
                    <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
                    <p><strong>Message:</strong></p>
                    <p style="white-space: pre-wrap;">${message}</p>
                </div>
            `,
        });

        if (error) {
            console.error("Resend error:", error);
            return { success: false, error: error.message };
        }

        return { success: true, data };
    } catch (err: any) {
        console.error("Email sending failed:", err);
        return { success: false, error: err.message || "Failed to send email." };
    }
}
