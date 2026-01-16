"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { sendEmail } from "@/app/actions/sendEmail";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    async function handleSubmit(formData: FormData) {
        setStatus("sending");
        try {
            const result = await sendEmail(formData);
            if (result.success) {
                setStatus("success");
                setMessage("Thank you! Your message has been sent.");
                (document.getElementById("contact-form") as HTMLFormElement).reset();
            } else {
                setStatus("error");
                setMessage(result.error || "Something went wrong. Please try again.");
            }
        } catch (err) {
            console.error("Form submission error:", err);
            setStatus("error");
            setMessage("An unexpected error occurred. Please check console for details.");
        }
    }

    return (
        <section className="py-24 bg-white" id="contact-form-section">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-tropical-teal font-bold uppercase tracking-wider">Contact Us</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
                        Have Questions? <span className="text-sun-yellow">Get In Touch</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We're here to help you plan your perfect stay in Kota Kinabalu. Send us a message and we'll get back to you soon.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-sand-beige/30 p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-sand-beige"
                >
                    <form id="contact-form" action={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="John Doe"
                                    className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-tropical-teal outline-none transition-all bg-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="john@example.com"
                                    className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-tropical-teal outline-none transition-all bg-white"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="tel" className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                            <input
                                required
                                type="tel"
                                name="tel"
                                id="tel"
                                placeholder="+60 123 456789"
                                className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-tropical-teal outline-none transition-all bg-white"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-bold text-gray-700 ml-1">Message</label>
                            <textarea
                                required
                                name="message"
                                id="message"
                                rows={5}
                                placeholder="Tell us about your plans or any special requests..."
                                className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-tropical-teal outline-none transition-all bg-white resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="w-full bg-teal-900 text-white font-bold py-5 rounded-2xl hover:bg-tropical-teal transition-all flex items-center justify-center gap-3 disabled:opacity-70 shadow-lg shadow-teal-900/20"
                        >
                            {status === "sending" ? (
                                <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <Send size={20} />
                            )}
                            {status === "sending" ? "Sending..." : "Send Message"}
                        </button>

                        {status !== "idle" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex items-center gap-3 p-4 rounded-xl ${status === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                                    }`}
                            >
                                {status === "success" ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                                <span className="text-sm font-medium">{message}</span>
                            </motion.div>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
