import { FadeIn } from "./FadeIn";

interface HighlightCardProps {
  number: string;
  label: string;
  sublabel?: string;
  delay: number;
}

const HighlightCard = ({ number, label, sublabel, delay }: HighlightCardProps) => (
  <FadeIn delay={delay}>
    <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors duration-300">
      <p className="text-3xl md:text-4xl font-bold text-gradient mb-2">
        {number}
      </p>
      <p className="text-sm font-medium text-foreground">
        {label}
      </p>
      {sublabel && (
        <p className="text-xs text-muted-foreground mt-1">
          {sublabel}
        </p>
      )}
    </div>
  </FadeIn>
);

export const HighlightsSection = () => {
  const highlights = [
    {
      number: "14+",
      label: "Years in Media & Business",
      sublabel: "방송, 콘텐츠, B2B",
    },
    {
      number: "67%",
      label: "YoY Revenue Growth",
      sublabel: "Statista Korea",
    },
    {
      number: "4,714",
      label: "Articles Published",
      sublabel: "BBC Science Korea",
    },
    {
      number: "3",
      label: "Languages",
      sublabel: "KR · EN · DE",
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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
