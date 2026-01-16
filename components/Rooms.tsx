"use client";

import { motion } from "framer-motion";
import { Users, Maximize, Wifi } from "lucide-react";

export default function Rooms() {
    const rooms = [
        {
            name: "Corner Unit",
            capacity: "4-6 Pax",
            size: "900 sqft",
            price: "RM 320",
            image: "https://huiluiebajsmbrejbnux.supabase.co/storage/v1/object/public/images/JesseltonStay/IMG-20221215-WA0214-1.jpg",
        },
        {
            name: "Intermediate Unit",
            capacity: "4-6 Pax",
            size: "800 sqft",
            price: "RM 250",
            image: "https://huiluiebajsmbrejbnux.supabase.co/storage/v1/object/public/images/JesseltonStay/IMG-20221215-WA0200.jpg",
        },
    ];

    return (
        <section className="py-20 bg-sand-beige/50" id="rooms">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-tropical-teal font-bold uppercase tracking-wider">Our Rooms</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
                        Stay in Comfort
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {rooms.map((room, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="h-64 bg-gray-200 relative overflow-hidden">
                                <img src={room.image} alt={room.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-teal-900">
                                    {room.price} / night
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{room.name}</h3>
                                <div className="flex justify-between items-center text-gray-600 mb-6 border-b border-gray-100 pb-6">
                                    <div className="flex items-center gap-2">
                                        <Users size={18} />
                                        <span className="text-sm">{room.capacity}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Maximize size={18} />
                                        <span className="text-sm">{room.size}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Wifi size={18} />
                                        <span className="text-sm">Free</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
