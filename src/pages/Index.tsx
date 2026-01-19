import { HeroSection } from "@/components/HeroSection";
import { CareerSection } from "@/components/CareerSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { LectureLink } from "@/components/LectureLink";
import { SocialLinks } from "@/components/SocialLinks";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="container max-w-2xl px-6 md:px-8">
        <HeroSection />
        <div className="border-t divider" />
        <CareerSection />
        <ExperienceSection />
        <LectureLink />
        <SocialLinks />
        
        <footer className="py-12 md:py-16 text-center">
          <p className="text-xs text-muted-foreground">
            © 2024
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
