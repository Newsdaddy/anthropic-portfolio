import { FadeIn } from "./FadeIn";

interface CareerItemProps {
  category: string;
  description: string;
  delay: number;
}

const CareerItem = ({ category, description, delay }: CareerItemProps) => (
  <FadeIn delay={delay}>
    <div className="py-5 border-b divider">
      <span className="text-xs uppercase tracking-wider text-subtle block mb-2">
        {category}
      </span>
      <p className="text-base md:text-lg">
        {description}
      </p>
    </div>
  </FadeIn>
);

export const CareerSection = () => {
  const careers = [
    {
      category: "방송 · 미디어",
      description: "KBS, MBC에서 PD로 시사·교양 프로그램 제작. 다수의 다큐멘터리 연출.",
    },
    {
      category: "콘텐츠 전략",
      description: "스타트업 콘텐츠팀 리드. 브랜드 저널리즘 기획 및 운영.",
    },
    {
      category: "글로벌 B2B",
      description: "미국·유럽 시장 진출 전략 수립. 현지 파트너십 구축 및 세일즈.",
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <FadeIn delay={0.3}>
        <h2 className="text-xs uppercase tracking-wider text-subtle mb-6">
          커리어 요약
        </h2>
      </FadeIn>
      
      <div>
        {careers.map((career, index) => (
          <CareerItem
            key={career.category}
            category={career.category}
            description={career.description}
            delay={0.35 + index * 0.08}
          />
        ))}
      </div>
    </section>
  );
};
