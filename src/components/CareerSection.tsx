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
    <div className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
      <div className="absolute top-4 right-4 text-6xl font-bold text-muted/30 select-none">
        {number}
      </div>
      
      <div className="relative">
        <p className="text-xs font-medium text-primary mb-2">
          {period}
        </p>
        
        <h3 className="text-xl font-bold mb-1">
          {role}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4">
          {company} · {location}
        </p>
        
        <ul className="space-y-2">
          {achievements.map((achievement, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-primary mt-1.5 text-xs">●</span>
              <span>{achievement}</span>
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
        "한국 시장 SaaS 플랫폼 런칭 및 안착",
        "YoY 67%+ 매출 성장 달성",
        "PwC, KPMG, Deloitte 등 컨설팅사 파트너십 구축",
      ],
    },
    {
      number: "02",
      period: "2016 — 2019",
      role: "Editor-in-Chief",
      company: "BBC Science Korea",
      location: "Seoul, Korea",
      achievements: [
        "4,714개 과학 기사 발행 및 편집 총괄",
        "570개 BBC 기사 번역 검수",
        "B2B 광고 시장 개척, YoY 42%+ 매출 성장",
      ],
    },
    {
      number: "03",
      period: "2015 — 2019",
      role: "TV News Anchor",
      company: "YTN",
      location: "Seoul, Korea",
      achievements: [
        "2018 남북정상회담 특집 방송 진행 (15회)",
        "4년간 일일 뉴스 생방송 앵커",
        "2017 대선·탄핵 특집 방송 진행",
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
