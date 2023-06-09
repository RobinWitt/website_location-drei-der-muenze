import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import "./globals.css";
import { Inter, Neuton } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const neuton = Neuton({
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"],
});

export const metadata = {
  title: "Drei Der Münze - Café • Bar • Tattoo",
  description: "Drei Der Münze - Café • Bar • Tattoo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Header />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
