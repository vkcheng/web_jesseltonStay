"use client";

import { motion } from "framer-motion";
import { Bed, Bath, Maximize, Wifi, Waves } from "lucide-react";

export default function Rooms() {
    const rooms = [
        {
            name: "Corner Unit",
            details: [
                { icon: Bed, text: "2 Beds" },
                { icon: Bath, text: "2 Baths" },
                { icon: Maximize, text: "700 sqft" },
                { icon: Waves, text: "Seaview" },
                { icon: Wifi, text: "Free Wi-Fi" },
            ],
            amenities: "Washer + Dryer included",
            price: "RM 320",
            image: "https://huiluiebajsmbrejbnux.supabase.co/storage/v1/object/public/images/JesseltonStay/IMG-20221215-WA0214-1.jpg",
        },
        {
            name: "Intermediate Unit",
            details: [
                { icon: Bed, text: "2 Beds" },
                { icon: Bath, text: "1 Bath" },
                { icon: Maximize, text: "500 sqft" },
                { icon: Waves, text: "Seaview / Cityview" },
                { icon: Wifi, text: "Free Wi-Fi" },
            ],
            amenities: "Washer + Dryer included",
            price: "RM 250",
            image: "https://huiluiebajsmbrejbnux.supabase.co/storage/v1/object/public/images/JesseltonStay/IMG-20221215-WA0200.jpg",
        },
    ];

    return (
        <section className="py-20 bg-sand-beige/50 scroll-mt-24" id="rooms">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-tropical-teal font-bold uppercase tracking-wider">Our Rooms</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
                        Stay in Comfort
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {rooms.map((room, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
                        >
                            <div className="h-72 bg-gray-200 relative overflow-hidden">
                                <img src={room.image} alt={room.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-base font-bold text-teal-900 shadow-sm">
                                    {room.price} / night
                                </div>
                            </div>
                            <div className="p-8 flex-grow">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">{room.name}</h3>
                                <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-6 border-b border-gray-100 pb-6">
                                    {room.details.map((detail, dIndex) => (
                                        <div key={dIndex} className="flex items-center gap-3 text-gray-600">
                                            <detail.icon size={20} className="text-tropical-teal" />
                                            <span className="text-sm font-medium">{detail.text}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center gap-3 text-tropical-teal font-semibold text-sm">
                                    <div className="w-2 h-2 rounded-full bg-sun-yellow" />
                                    {room.amenities}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
