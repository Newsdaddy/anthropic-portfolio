import { FadeIn } from "./FadeIn";
import profileImage from "@/assets/profile.png";

export const HeroSection = () => {
  return (
    <section className="pt-8 pb-6 sm:pt-12 sm:pb-8 md:pt-16 md:pb-12 relative">
      {/* Spline 3D - Dedicated Section */}
      <FadeIn delay={0.3}>
        <div className="w-full h-[280px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden mb-8 sm:mb-10 md:mb-12">
          <iframe
            src="https://my.spline.design/claritystream-wNLLGZz7kmO8goHlJ3UpH79v/"
            frameBorder="0"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="3D Background"
          />
        </div>
      </FadeIn>

      <div className="flex flex-col md:flex-row md:items-center gap-6 sm:gap-8 md:gap-12">
        <FadeIn>
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 via-primary/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden bg-secondary glow group-hover:scale-105 group-hover:shadow-2xl transition-all duration-300">
              <img
                src={profileImage}
                alt="정병진 프로필"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </FadeIn>

        <div className="flex-1">
          <FadeIn delay={0.1}>
            <h1 className="text-3xl sm:text-display-sm md:text-display font-bold tracking-tight mb-3 sm:mb-4 group">
              <span className="inline-block hover:scale-105 transition-transform duration-200 cursor-default">정병진</span>
              <span className="text-gradient animate-pulse-slow">.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              타인과 함께 성장하는 자유로운 경계인
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
