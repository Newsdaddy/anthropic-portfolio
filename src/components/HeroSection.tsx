import { FadeIn } from "./FadeIn";
import profileImage from "@/assets/profile.png";

export const HeroSection = () => {
  return (
    <section className="pt-12 pb-10 sm:pt-16 sm:pb-12 md:pt-24 md:pb-16">
      <div className="flex flex-col md:flex-row md:items-center gap-6 sm:gap-8 md:gap-12">
        <FadeIn>
          <div className="relative">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden bg-secondary glow">
              <img
                src={profileImage}
                alt="정병진 프로필"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </FadeIn>

        <div className="flex-1">
          <FadeIn delay={0.1}>
            <h1 className="text-3xl sm:text-display-sm md:text-display font-bold tracking-tight mb-3 sm:mb-4">
              정병진
              <span className="text-gradient">.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              미디어와 비즈니스를 연결하는 사람.
              <br className="hidden sm:block" />
              <span className="text-foreground">10년간 B2B 세일즈, 언론, 콘텐츠</span>에서 성과를 만들었습니다.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-4 sm:mt-6">
              <span className="text-xs sm:text-sm text-muted-foreground">Hamburg, Germany</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
              <a
                href="mailto:byeongjin.jeong05@gmail.com"
                className="text-xs sm:text-sm text-primary hover:underline break-all"
              >
                byeongjin.jeong05@gmail.com
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
