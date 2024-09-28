import { Inter } from "next/font/google";
import '@styles/globals.css';
import Navbar from "@components/NavBar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Communities | Mujagu Ug",
  description: "A freelance platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
        <div className="w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        </div>
        <div className="bg-slate-100 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            {children}
        </div>
        </body>
    </html>
  );
}
