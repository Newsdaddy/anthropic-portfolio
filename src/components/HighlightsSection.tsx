import { FadeIn } from "./FadeIn";

interface HighlightCardProps {
  number: string;
  label: string;
  sublabel?: string;
  delay: number;
}

const HighlightCard = ({ number, label, sublabel, delay }: HighlightCardProps) => (
  <FadeIn delay={delay}>
    <div className="anthropic-card h-full flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
      <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2" style={{ color: '#D4714A' }}>
        {number}
      </p>
      <div>
        <p className="text-sm font-medium text-card-foreground/80 leading-tight">
          {label}
        </p>
        {sublabel && (
          <p className="text-xs text-card-foreground/50 mt-1">
            {sublabel}
          </p>
        )}
      </div>
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
      number: "3",
      label: "Languages",
      sublabel: "KR (Native) · EN · DE",
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <FadeIn delay={0.3}>
        <p className="anthropic-label mb-6">Highlights</p>
      </FadeIn>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-fr">
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
