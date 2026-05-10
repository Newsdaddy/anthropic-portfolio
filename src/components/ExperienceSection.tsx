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
    <div className="anthropic-card flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
      <span className="anthropic-label sm:w-28 shrink-0">
        {period}
      </span>
      <div className="flex-1">
        <span className="font-medium text-card-foreground">{role}</span>
        <span className="text-card-foreground/50 mx-2">·</span>
        <span className="text-card-foreground/70">{company}</span>
      </div>
      <span className="text-sm text-card-foreground/60">
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
      highlight: "Daily news, financial broadcasting",
    },
    {
      period: "2011 — 2012",
      role: "Business News Anchor",
      company: "Maeil Business TV",
      highlight: "Market analysis, financial reporting",
    },
    {
      period: "2008",
      role: "Soldier",
      company: "Zaytun Division, Iraq",
      highlight: "Heavy vehicle operator, interpreter",
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <FadeIn delay={0.8}>
        <p className="anthropic-label mb-6" style={{ color: '#D4714A' }}>Earlier Experience</p>
      </FadeIn>

      <div className="space-y-3">
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
