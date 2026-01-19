import { FadeIn } from "./FadeIn";

interface CareerCardProps {
  number: string;
  period: string;
  role: string;
  company: string;
  location: string;
  achievements: string[];
  delay: number;
}

const CareerCard = ({ number, period, role, company, location, achievements, delay }: CareerCardProps) => (
  <FadeIn delay={delay}>
    <div className="group relative p-4 sm:p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-4xl sm:text-6xl font-bold text-muted/30 select-none">
        {number}
      </div>

      <div className="relative">
        <p className="text-[10px] sm:text-xs font-medium text-primary mb-1 sm:mb-2">
          {period}
        </p>

        <h3 className="text-lg sm:text-xl font-bold mb-1 pr-8 sm:pr-12">
          {role}
        </h3>

        <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
          {company} · {location}
        </p>

        <ul className="space-y-1.5 sm:space-y-2">
          {achievements.map((achievement, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <span className="text-primary text-[10px] sm:text-xs shrink-0">●</span>
              <span className="leading-relaxed">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </FadeIn>
);

export const CareerSection = () => {
  const careers = [
    {
      number: "01",
      period: "2021 — 2026",
      role: "Sr. Business Development Manager",
      company: "Statista GmbH",
      location: "Hamburg, Germany",
      achievements: [
        "국내 기업 Market Intelligence 솔루션 컨설팅·계약 클로저",
        "YoY 67%+ 매출 성장 달성",
        "LG그룹, 현대차그룹 및 PwC, KPMG, Deloitte 등 컨설팅사 파트너십 계약 총괄",
      ],
    },
    {
      number: "02",
      period: "2015 — 2019",
      role: "News Anchor",
      company: "YTN",
      location: "Seoul, Korea",
      achievements: [
        "데일리 생방송 종합뉴스 제작·진행",
        "2018 남북정상회담 특집 방송 진행",
        "2017 대선·탄핵 특집 방송 진행",
      ],
    },
    {
      number: "03",
      period: "2016 — 2019",
      role: "Editor-in-Chief",
      company: "BBC Science Korea(이웃집과학자)",
      location: "Seoul, Korea",
      achievements: [
        "4,714개 과학 기사 발행 및 편집 총괄",
        "570개 BBC 기사 번역 검수",
        "B2B 광고 시장 개척, YoY 42%+ 매출 성장",
      ],
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <FadeIn delay={0.5}>
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Career
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
      </FadeIn>

      <div className="grid gap-4 md:gap-6">
        {careers.map((career, index) => (
          <CareerCard
            key={career.company}
            {...career}
            delay={0.55 + index * 0.08}
          />
        ))}
      </div>
    </section>
  );
};
