"use client";

import { Inter } from "next/font/google";
import "@styles/globals.css";
import Navbar from "../components/NavBar/Navbar";
import { AuthProvider } from "../context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Mujagu Ug",
//   description: "A freelance platform",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
