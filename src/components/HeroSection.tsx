import { FadeIn } from "./FadeIn";
import profileImage from "@/assets/profile.png";

export const HeroSection = () => {
  return (
    <section className="pt-16 pb-12 md:pt-24 md:pb-16">
      <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
        <FadeIn>
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden bg-secondary glow">
              <img
                src={profileImage}
                alt="정병진 프로필"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-bold">🇰🇷</span>
            </div>
          </div>
        </FadeIn>

        <div className="flex-1">
          <FadeIn delay={0.1}>
            <p className="text-sm font-medium text-primary mb-2 tracking-wide">
              Sr. Business Development Manager
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h1 className="text-display-sm md:text-display font-bold tracking-tight mb-4">
              정병진
              <span className="text-gradient">.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              미디어와 비즈니스를 연결하는 사람.
              <br className="hidden md:block" />
              <span className="text-foreground">10년간 방송, 콘텐츠, B2B SaaS</span>에서 성과를 만들었습니다.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="flex items-center gap-4 mt-6">
              <span className="text-sm text-muted-foreground">Hamburg, Germany</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
              <a 
                href="mailto:editorjin0326@gmail.com" 
                className="text-sm text-primary hover:underline"
              >
                editorjin0326@gmail.com
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
