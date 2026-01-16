"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Home, Bed, Coffee, Phone } from "lucide-react";
import { clsx } from "clsx";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/", icon: Home },
        { name: "Rooms", href: "#rooms", icon: Bed },
        { name: "Amenities", href: "#amenities", icon: Coffee },
        { name: "Contact", href: "#contact", icon: Phone },
    ];

    return (
        <header
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/80 backdrop-blur-md shadow-md py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link
                    href="/"
                    className={clsx(
                        "text-3xl font-bold transition-colors duration-300",
                        scrolled ? "text-tropical-teal" : "text-white drop-shadow-lg"
                    )}
                >
                    Jesselton Stay
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                "font-medium transition-colors duration-300 flex items-center gap-2",
                                scrolled ? "text-gray-700 hover:text-tropical-teal" : "text-white/90 hover:text-white"
                            )}
                        >
                            <link.icon size={18} />
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={clsx(
                        "md:hidden transition-colors duration-300",
                        scrolled ? "text-gray-700" : "text-white"
                    )}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 overflow-hidden"
                    >
                        <nav className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-700 hover:text-tropical-teal font-medium flex items-center gap-3 text-lg"
                                >
                                    <link.icon size={20} />
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
