import { FadeIn } from "./FadeIn";

interface ExperienceItemProps {
  period: string;
  role: string;
  company: string;
  highlight: string;
  delay: number;
}

const ExperienceItem = ({ period, role, company, highlight, delay }: ExperienceItemProps) => (
  <FadeIn delay={delay}>
    <div className="flex flex-col gap-1.5 sm:gap-2 md:flex-row md:items-center md:gap-6 py-3 sm:py-4 border-b border-border group hover:bg-card hover:border-primary/30 hover:shadow-sm hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 -mx-4 px-4 rounded-lg cursor-default">
      <span className="text-[10px] sm:text-xs font-medium text-muted-foreground md:w-28 shrink-0 group-hover:text-primary transition-colors duration-300">
        {period}
      </span>
      <div className="flex-1">
        <span className="font-medium text-sm sm:text-base group-hover:text-primary transition-colors duration-300">{role}</span>
        <span className="text-muted-foreground mx-1.5 sm:mx-2">·</span>
        <span className="text-muted-foreground text-sm sm:text-base group-hover:text-foreground/70 transition-colors duration-300">{company}</span>
      </div>
      <span className="text-xs sm:text-sm text-primary font-medium group-hover:scale-105 group-hover:tracking-wide transition-all duration-300">
        {highlight}
      </span>
    </div>
  </FadeIn>
);

export const ExperienceSection = () => {
  const experiences = [
    {
      period: "2012 — 2014",
      role: "Announcer",
      company: "Busan MBC",
      highlight: "생방송 뉴스 앵커, DJ, MC",
    },
    {
      period: "2011 — 2012",
      role: "News Anchor",
      company: "Maeil Business TV",
      highlight: "증시 분석, 경제 뉴스 진행",
    },
    {
      period: "2008",
      role: "Soldier",
      company: "Zaytun Division, Iraq",
      highlight: "평화재건작전 투입, 한영 통역",
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <FadeIn delay={0.8}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Earlier Experience
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
      </FadeIn>

      <div>
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={exp.company}
            {...exp}
            delay={0.85 + index * 0.05}
          />
        ))}
      </div>
    </section>
  );
};
