import { FadeIn } from "./FadeIn";

interface SkillTagProps {
  label: string;
  delay: number;
}

const SkillTag = ({ label, delay }: SkillTagProps) => (
  <FadeIn delay={delay}>
    <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-secondary text-secondary-foreground border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-md active:scale-95 transition-all duration-200 cursor-default">
      {label}
    </span>
  </FadeIn>
);

export const SkillsSection = () => {
  const skills = [
    "B2B SaaS Sales",
    "Enterprise Sales",
    "Lead Qualification",
    "Pipeline Management",
    "Salesforce",
    "HubSpot",
    "Outbound Prospecting",
    "Account-Based Selling",
    "API/SaaS Products",
    "Data Analytics",
    "AI/ML Enthusiast",
    "Claude API User",
    "Korean (Native)",
    "English (Fluent)",
    "German (C1)",
  ];

  return (
    <section className="py-12 md:py-16">
      <FadeIn delay={0.95}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Skills & Languages
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
      </FadeIn>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <SkillTag
            key={skill}
            label={skill}
            delay={1.0 + index * 0.02}
          />
        ))}
      </div>
    </section>
  );
};
