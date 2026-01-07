import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t, language } = useLanguage();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bediz Teknik",
    description: t.meta.description,
    url: "https://bediteknik.com",
    telephone: "+90XXXXXXXXXX",
    email: "hello@bediteknik.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Istanbul",
      addressCountry: "TR",
    },
    areaServed: {
      "@type": "City",
      name: "Istanbul",
    },
    priceRange: "₺₺",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "20:00",
      },
    ],
    sameAs: ["https://linkedin.com/in/placeholder"],
  };

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <meta
          name="keywords"
          content="IT services Istanbul, network installation, CCTV installation Istanbul, Wi-Fi setup, website development Turkey, Google Business Profile setup"
        />
        <link rel="canonical" href="https://bediteknik.com" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bediteknik.com" />
        <meta property="og:title" content={t.meta.ogTitle} />
        <meta property="og:description" content={t.meta.ogDescription} />
        <meta property="og:locale" content={language === "tr" ? "tr_TR" : "en_US"} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.meta.ogTitle} />
        <meta name="twitter:description" content={t.meta.ogDescription} />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <ServicesSection />
          <ProcessSection />
          <ProjectsSection />
          <PricingSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
