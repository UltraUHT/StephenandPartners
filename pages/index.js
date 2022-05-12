import Head from "next/head";
import Image from "next/image";
import Difference from "../components/Difference";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Services from "../components/Services";

export default function Home() {
  return (
    <div className="bg-black overflow-hidden">
      <Head>
        <title>Stephen and Partners</title>
        <meta name="description" content=" Stephen and Partners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Hero />
      <Difference />
      <Services />
      <Footer />
    </div>
  );
}
