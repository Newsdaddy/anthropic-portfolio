import { FadeIn } from "./FadeIn";

interface HighlightCardProps {
  number: string;
  label: string;
  sublabel?: string;
  delay: number;
}

const HighlightCard = ({ number, label, sublabel, delay }: HighlightCardProps) => (
  <FadeIn delay={delay}>
    <div className="group p-4 sm:p-6 rounded-xl bg-card border border-border hover:border-primary hover:bg-primary/5 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] transition-all duration-300 cursor-default">
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300 origin-left">
        {number}
      </p>
      <p className="text-xs sm:text-sm font-medium text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
        {label}
      </p>
      {sublabel && (
        <p className="text-[10px] sm:text-xs text-muted-foreground mt-1 group-hover:text-foreground/70 transition-colors duration-300">
          {sublabel}
        </p>
      )}
    </div>
  </FadeIn>
);

export const HighlightsSection = () => {
  const highlights = [
    {
      number: "5×",
      label: "ARR Growth",
      sublabel: "Statista Korea (2021-2025)",
    },
    {
      number: "188",
      label: "Enterprise Contracts",
      sublabel: "LG, Hyundai, PwC, KPMG...",
    },
    {
      number: "67%",
      label: "YoY Revenue Growth",
      sublabel: "Highest in APAC team",
    },
    {
      number: "KR/EN",
      label: "Bilingual Native",
      sublabel: "+ German C1",
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <FadeIn delay={0.3}>
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Highlights
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
      </FadeIn>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {highlights.map((item, index) => (
          <HighlightCard
            key={item.label}
            number={item.number}
            label={item.label}
            sublabel={item.sublabel}
            delay={0.35 + index * 0.05}
          />
        ))}
      </div>
    </section>
  );
};
