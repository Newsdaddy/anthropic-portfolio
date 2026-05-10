import { HeroSection } from "@/components/HeroSection";
import { HighlightsSection } from "@/components/HighlightsSection";
import { CareerSection } from "@/components/CareerSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { AIShowcase } from "@/components/AIShowcase";
import { ContentChannels } from "@/components/ContentChannels";
import { SocialLinks } from "@/components/SocialLinks";
import { FadeIn } from "@/components/FadeIn";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="container max-w-4xl px-4 sm:px-6 md:px-8">
        <HeroSection />
        <HighlightsSection />
        <AIShowcase />
        <ContentChannels />
        <CareerSection />
        <ExperienceSection />
        <SkillsSection />
        <SocialLinks />
        
        <FadeIn delay={1.3}>
          <footer className="py-12 md:py-16 text-center">
            <p className="text-xs text-foreground/40">
              © 2026 Byeongjin Jeong · Built with Claude Code
            </p>
          </footer>
        </FadeIn>
      </div>
    </main>
  );
};

export default Index;
