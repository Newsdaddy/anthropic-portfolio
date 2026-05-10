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
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 150);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount >= CLICK_THRESHOLD) {
      setClickCount(0);
      setIsModalOpen(true);
      return;
    }

    timeoutRef.current = setTimeout(() => {
      setClickCount(0);
    }, TIMEOUT_MS);
  }, [clickCount]);

  return (
    <section className="pt-12 pb-8 sm:pt-16 sm:pb-12 md:pt-20 md:pb-16">
      <div className="flex flex-col md:flex-row md:items-center gap-6 sm:gap-8 md:gap-12">
        <FadeIn>
          <div
            className="relative cursor-pointer select-none"
            onClick={handleProfileClick}
          >
            <div
              className={`relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden bg-card transition-transform duration-150 ${
                isAnimating ? "scale-105" : "scale-100"
              }`}
            >
              <img
                src={profileImage}
                alt="Byeongjin Jeong"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </FadeIn>

        <div className="flex-1">
          <FadeIn delay={0.1}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-3">
              Byeongjin Jeong
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed max-w-xl">
              Applying for Business Development Representative at Anthropic
            </p>
          </FadeIn>
        </div>
      </div>

      <AdminLoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
