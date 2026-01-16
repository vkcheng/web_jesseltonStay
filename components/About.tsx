"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section className="py-20 bg-white" id="about">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="https://huiluiebajsmbrejbnux.supabase.co/storage/v1/object/public/images/JesseltonStay/IMG-20221215-WA0221.jpg"
                                alt="JesseltonStay Interior"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="rounded-2xl overflow-hidden shadow-lg -rotate-1 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="https://huiluiebajsmbrejbnux.supabase.co/storage/v1/object/public/images/JesseltonStay/IMG-20221215-WA0282.jpg"
                                    alt="JesseltonStay Room"
                                    className="w-full h-40 object-cover"
                                />
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-lg rotate-1 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="https://huiluiebajsmbrejbnux.supabase.co/storage/v1/object/public/images/JesseltonStay/IMG-20221215-WA0211.jpg"
                                    alt="JesseltonStay Amenities"
                                    className="w-full h-40 object-cover"
                                />
                            </div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sun-yellow/20 rounded-full blur-2xl -z-10" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-tropical-teal/20 rounded-full blur-2xl -z-10" />
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 text-center lg:text-left"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Comfortable & Warm <br />
                            <span className="text-tropical-teal">Stay in Kota Kinabalu</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            If you are looking for a perfect vacation experience and want to leave beautiful memories, you've come to the right place! Let us arrange a comfortable stay for you that offers great value for money.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Our homestay is clean and warmly decorated, giving you a "feeling of home" as soon as you walk in. Whether it's a short break or a long holiday, this is a great choice for you to relax and unwind.
                        </p>

                        <div className="grid grid-cols-2 gap-6 text-left">
                            <div className="bg-sand-beige p-4 rounded-xl">
                                <h3 className="font-bold text-gray-900 text-lg mb-1">Clean & Tidy</h3>
                                <p className="text-sm text-gray-600">Spotless environments for peace of mind.</p>
                            </div>
                            <div className="bg-ocean-blue/10 p-4 rounded-xl">
                                <h3 className="font-bold text-gray-900 text-lg mb-1">Warm Decor</h3>
                                <p className="text-sm text-gray-600">Designed to make you feel right at home.</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
