import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import StylistShowcase from "@/components/StylistShowcase";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Faqs from "@/components/Faqs";
import BookingBanner from "@/components/BookingBanner";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="space-y-16">
        <Hero />
        <Services />
        <StylistShowcase />
        <Experience />
        <Gallery />
        <Testimonials />
        <Faqs />
        <BookingBanner />
      </main>
      <Footer />
    </div>
  );
}
