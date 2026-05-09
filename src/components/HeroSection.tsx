import { useState, useRef, useCallback } from "react";
import { FadeIn } from "./FadeIn";
import { AdminLoginModal } from "./AdminLoginModal";
import profileImage from "@/assets/profile.png";

const CLICK_THRESHOLD = 10;
const TIMEOUT_MS = 3000;

export const HeroSection = () => {
  const [clickCount, setClickCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleProfileClick = useCallback(() => {
    // Trigger scale animation
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 150);

    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const newCount = clickCount + 1;
    setClickCount(newCount);

    // Check if threshold reached
    if (newCount >= CLICK_THRESHOLD) {
      setClickCount(0);
      setIsModalOpen(true);
      return;
    }

    // Set timeout to reset count after 3 seconds of inactivity
    timeoutRef.current = setTimeout(() => {
      setClickCount(0);
    }, TIMEOUT_MS);
  }, [clickCount]);

  const isNearThreshold = clickCount === CLICK_THRESHOLD - 1; // 9th click

  return (
    <section className="pt-8 pb-6 sm:pt-12 sm:pb-8 md:pt-16 md:pb-12 relative">
      {/* Spline 3D - Dedicated Section */}
      <FadeIn delay={0.3}>
        <div className="w-full h-[280px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden mb-8 sm:mb-10 md:mb-12 relative bg-secondary/50">
          <iframe
            src="https://my.spline.design/claritystream-wNLLGZz7kmO8goHlJ3UpH79v/"
            frameBorder="0"
            width="100%"
            height="100%"
            style={{ border: 'none', display: 'block', background: 'transparent', pointerEvents: 'none' }}
            title="3D Background"
            allow="fullscreen"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </FadeIn>

      <div className="flex flex-col md:flex-row md:items-center gap-6 sm:gap-8 md:gap-12">
        <FadeIn>
          <div 
            className="relative group cursor-pointer select-none"
            onClick={handleProfileClick}
          >
            {/* Purple glow on 9th click */}
            <div 
              className={`absolute -inset-3 rounded-3xl blur-xl transition-all duration-500 ${
                isNearThreshold 
                  ? 'opacity-60 bg-purple-500/40' 
                  : 'opacity-0 bg-gradient-to-r from-primary/30 via-primary/20 to-transparent group-hover:opacity-100'
              }`} 
            />
            <div 
              className={`relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden bg-secondary glow transition-all duration-150 ${
                isAnimating ? 'scale-110' : 'scale-100'
              } ${isNearThreshold ? 'ring-2 ring-purple-500/50' : ''} group-hover:shadow-2xl`}
            >
              <img
                src={profileImage}
                alt="정병진 프로필"
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  isAnimating ? 'scale-105' : 'group-hover:scale-110'
                }`}
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
              B2B Sales · AI Enthusiast · Bilingual (KR/EN)
            </p>
          </FadeIn>
        </div>
      </div>

      <AdminLoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
