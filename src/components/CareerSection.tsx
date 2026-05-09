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
    <div className="group relative p-4 sm:p-6 rounded-xl bg-card border border-border hover:border-primary hover:shadow-xl hover:-translate-y-1 active:translate-y-0 active:shadow-md transition-all duration-300 cursor-default">
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-4xl sm:text-6xl font-bold text-muted/30 select-none group-hover:text-primary/20 group-hover:scale-110 transition-all duration-300">
        {number}
      </div>

      <div className="relative">
        <p className="text-[10px] sm:text-xs font-medium text-primary mb-1 sm:mb-2 group-hover:tracking-wider transition-all duration-300">
          {period}
        </p>

        <h3 className="text-lg sm:text-xl font-bold mb-1 pr-8 sm:pr-12 group-hover:text-primary transition-colors duration-300">
          {role}
        </h3>

        <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 group-hover:text-foreground/70 transition-colors duration-300">
          {company} · {location}
        </p>

        <ul className="space-y-1.5 sm:space-y-2">
          {achievements.map((achievement, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
              <span className="text-primary text-[10px] sm:text-xs shrink-0 group-hover:scale-125 transition-transform duration-300">●</span>
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
      period: "2021 — 2025",
      role: "Sr. Business Development Manager",
      company: "Statista GmbH",
      location: "Hamburg, Germany",
      achievements: [
        "Built Korea market from scratch → 5× ARR growth in 4 years",
        "Closed 188 enterprise contracts (LG, Hyundai, Samsung, PwC, KPMG, Deloitte)",
        "Full-cycle sales: prospecting → qualification → demo → negotiation → close",
        "Managed pipeline in Salesforce, drove data-driven sales strategies",
      ],
    },
    {
      number: "02",
      period: "2015 — 2019",
      role: "News Anchor & Live Broadcaster",
      company: "YTN (24hr News Network)",
      location: "Seoul, Korea",
      achievements: [
        "Daily live news production — high-pressure, real-time communication",
        "Interviewed C-suite executives and government officials",
        "2018 Inter-Korean Summit special coverage anchor",
      ],
    },
    {
      number: "03",
      period: "2016 — 2019",
      role: "Editor-in-Chief",
      company: "BBC Science Korea",
      location: "Seoul, Korea",
      achievements: [
        "Scaled B2B advertising revenue +42% YoY",
        "Led content strategy: 4,700+ articles, 570 BBC translations",
        "Built editorial processes from startup to profitable media outlet",
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
