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
  description:
    "ECPROD Nig Ltd delivers expert civil works, engineering, environmental management, training, and project solutions for Nigeria’s sustainable growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.className} pt-5`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
