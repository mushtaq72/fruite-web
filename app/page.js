import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components.js/Navbar";
import Main from "./components.js/Main";
import Main2 from "./components.js/Main2";
import HeroSection from "./components.js/HeroSection";
import Footer from "./components.js/Footer";

export default function Home() {
  return (
    <main >
     <Navbar/>
     <Main/>
     <Main2/>
     <HeroSection/>
     <Footer/>
    </main>
  );
}
