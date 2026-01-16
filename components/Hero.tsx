"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://huiluiebajsmbrejbnux.supabase.co/storage/v1/object/public/images/JesseltonStay/IMG-20221215-WA0234.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-sand-beige/90 via-transparent to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-6 leading-tight"
                >
                    Your Warm Home <br />
                    <span className="text-sun-yellow">in Kota Kinabalu</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 drop-shadow-md font-medium"
                >
                    Clean, cozy, and perfectly located in the heart of the city.
                    The perfect start to your happy vacation!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col md:flex-row gap-4 justify-center"
                >
                    <button className="bg-sun-yellow hover:bg-yellow-400 text-teal-900 px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-xl flex items-center justify-center gap-2">
                        <span>Explore Rooms</span>
                        {/* Arrow icon could go here */}
                    </button>
                    <Link
                        href="#contact"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/50 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center text-center"
                    >
                        Contact Us
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
