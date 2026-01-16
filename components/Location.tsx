"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Location() {
    return (
        <section className="py-20 bg-white" id="location">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-tropical-teal font-bold uppercase tracking-wider">Location</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
                        Eat, Drink, & Play <br />
                        <span className="text-sun-yellow">Just Steps Away</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Chinese, Japanese, Korean, Western, and local delicacies are all around you! Laundromats, massage parlors, bars, and convenience stores are all within walking distance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop')" }} // Food
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                        <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-2xl font-bold text-white mb-1">Food Paradise</h3>
                            <p className="text-white/80">Local & International Cuisine</p>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=1000&auto=format&fit=crop')" }} // Shopping/Street
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                        <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-2xl font-bold text-white mb-1">City Center</h3>
                            <p className="text-white/80">Shopping & Entertainment</p>
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1000&auto=format&fit=crop')" }} // Sunset/Beach
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                        <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-2xl font-bold text-white mb-1">Sunset Views</h3>
                            <p className="text-white/80">Famous KK Sunset</p>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-12 text-center">
                    <button className="inline-flex items-center gap-2 text-tropical-teal font-bold hover:text-tropical-teal-600 transition-colors">
                        <MapPin size={20} />
                        View on Google Maps
                    </button>
                </div>
            </div>
        </section>
    );
}
