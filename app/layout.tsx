import type { Metadata } from "next";
import { Outfit, Noto_Sans_SC } from "next/font/google"; // Import Outfit and Noto Sans SC
import "./globals.css";
import { clsx } from 'clsx'; // Assuming clsx is installed, or just use className string interpolation. I installed clsx.

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Add specific weights if needed
});

export const metadata: Metadata = {
  title: "Jesselton Stay | Your Warm Home in Kota Kinabalu",
  description: "Experience a perfect vacation in Kota Kinabalu with Jesselton Stay. Comfortable, cozy, and convenient homestays in the city center.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          outfit.variable,
          notoSansSC.variable,
          "antialiased bg-sand-beige text-gray-800"
        )}
      >
        {children}
      </body>
    </html>
  );
}
