import { FadeIn } from "./FadeIn";

export const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-20">
      <FadeIn>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
          홍길동
        </h1>
      </FadeIn>
      
      <FadeIn delay={0.1}>
        <p className="text-lg md:text-xl text-subtle mb-6">
          콘텐츠 · 미디어 · 글로벌 비즈니스
        </p>
      </FadeIn>
      
      <FadeIn delay={0.2}>
        <p className="text-base md:text-lg leading-relaxed max-w-lg">
          10년간 콘텐츠를 만들고, 조직을 이끌고, 글로벌 시장에서 비즈니스를 설계했습니다.
        </p>
      </FadeIn>
    </section>
  );
};
