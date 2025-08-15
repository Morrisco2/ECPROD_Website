import localFont from "next/font/local";
import "./globals.css";
import { Lato } from "next/font/google";
import Navbar from "./components/staticComponents/Navbar";
import Footer from "./components/staticComponents/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: "ECPROD",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
