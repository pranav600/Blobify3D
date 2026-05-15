import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InfoCards from "@/components/InfoCards";
import BlobGrid from "@/components/BlobGrid";
import Footer from "@/components/Footer";

// Home: Assembles all major sections of the Blobify3D landing page in order
export default function Home() {
  return (
    // Full-page container with horizontal overflow guard and text selection styling
    <main className="w-full min-h-screen relative flex flex-col overflow-x-hidden pt-4 selection:bg-blob-cyan selection:text-black">
      <Header />
      <HeroSection />
      <InfoCards />
      <BlobGrid />
      <Footer />
    </main>
  );
}
