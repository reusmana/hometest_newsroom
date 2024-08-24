import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./section/Header";
import Hero from "./section/Hero";
import Trending from "./section/Trending";
import Latest from "./section/Latest";
import Footer from "./section/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <Trending />
        <Latest />
      </main>
      <Footer />
    </>
  );
}
