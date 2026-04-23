import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InfoCards from "@/components/InfoCards";
import BlobGrid from "@/components/BlobGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen relative flex flex-col overflow-x-hidden pt-4 selection:bg-blob-cyan selection:text-black">
      <Header />
      <HeroSection />
      <InfoCards />
      <BlobGrid />
      <Footer />
    </main>
  );
}
