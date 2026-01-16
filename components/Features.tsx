"use client";

import { motion } from "framer-motion";
import { MapPin, Wifi, Palmtree, Utensils, ShoppingBag, Waves } from "lucide-react";

export default function Features() {
    const features = [
        {
            icon: MapPin,
            title: "Prime Location",
            desc: "Located in the heart of KK, walking distance to everything.",
            color: "bg-tropical-teal",
        },
        {
            icon: Waves,
            title: "Clean & Comfortable",
            desc: "Spacious rooms with comfortable beds for a good night's sleep.",
            color: "bg-ocean-blue",
        },
        {
            icon: Wifi,
            title: "Free Wi-Fi",
            desc: "Stay connected with high-speed internet during your stay.",
            color: "bg-sun-yellow text-teal-900", // Yellow needs dark text
        },
        {
            icon: Palmtree,
            title: "Island hopping",
            desc: "Walking to KK Jetty exploring beautiful islands of Sabah",
            color: "bg-orange-400",
        },
        {
            icon: Utensils,
            title: "Food Paradise",
            desc: "Surrounded by local delicacies, seafood, and night markets.",
            color: "bg-red-400",
        },
        {
            icon: ShoppingBag,
            title: "Shopping & Fun",
            desc: "Close to malls, massage parlors, and entertainment spots.",
            color: "bg-purple-400",
        },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section className="py-20 bg-sand-beige" id="amenities">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We provide everything you need for a hassle-free and enjoyable holiday.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-tropical-teal/20"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                                <feature.icon size={32} className={feature.color.includes("text-teal-900") ? "text-teal-900" : "text-white"} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
