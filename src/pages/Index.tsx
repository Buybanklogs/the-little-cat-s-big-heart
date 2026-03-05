import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ThemesSection from "@/components/ThemesSection";
import GallerySection from "@/components/GallerySection";
import QuoteSection from "@/components/QuoteSection";
import PurchaseSection from "@/components/PurchaseSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ThemesSection />
      <QuoteSection />
      <GallerySection />
      <PurchaseSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-foreground py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-background/70 text-sm">
            © 2026 The Cat Who Thought He Was a Mouse. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
