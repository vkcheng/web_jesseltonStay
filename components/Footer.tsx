"use client";

import { Phone, Mail, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-teal-900 text-white pt-20 pb-10" id="contact">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Col */}
                    <div className="space-y-4">
                        <h3 className="text-4xl font-bold font-display">
                            Jesselton Stay
                        </h3>
                        <p className="text-teal-100 leading-relaxed">
                            Your warm home in Kota Kinabalu. We provide comfortable stays and unforgettable experiences for travelers from around the world.
                        </p>
                    </div>

                    {/* Links Col */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-sun-yellow">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-teal-100 hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="#rooms" className="text-teal-100 hover:text-white transition-colors">Our Rooms</Link></li>
                            <li><Link href="#amenities" className="text-teal-100 hover:text-white transition-colors">Amenities</Link></li>
                            <li><Link href="#contact" className="text-teal-100 hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Col */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-sun-yellow">Contact Us</h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-teal-100">
                                <Phone size={20} className="text-sun-yellow" />
                                <span>+6012 698 2250</span>
                            </div>
                            <div className="flex items-center gap-3 text-teal-100">
                                <Mail size={20} className="text-sun-yellow" />
                                <span>blisshomesabah@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Social/Action Col */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-sun-yellow">Follow Us</h4>
                        <div className="flex gap-4 mb-8">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sun-yellow hover:text-teal-900 transition-all">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sun-yellow hover:text-teal-900 transition-all">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-teal-800 pt-8 text-center text-teal-400 text-sm">
                    <p>© {new Date().getFullYear()} Jesselton Stay. All rights reserved. | Design and manage by <a href="https://www.sabahclick.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">SabahClick</a></p>
                </div>
            </div>
        </footer>
    );
}
