"use client"
import Header from "./components/header";
import Section2 from "./components/section2";
import Section1 from "./components/section1";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import { FC } from "react";
import Section5 from "./components/section5";
import Section6 from "./components/section6";
import Footer from "./components/footer";


const  Home:FC = () => {
  return (
    <main className="relative font-Satoshi_B ">
      <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Footer />
    </main>
  );
};

export default Home;
