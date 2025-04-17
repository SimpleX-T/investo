import CompaniesSection from "../components/landing/companies";
import CTASection from "../components/landing/cta";
import FAQSection from "../components/landing/FAQ";
import HeroSection from "../components/landing/hero";
import ReviewsSection from "../components/landing/reviews";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CompaniesSection />
      <CTASection />
      <FAQSection />
      <ReviewsSection />
    </main>
  );
}
