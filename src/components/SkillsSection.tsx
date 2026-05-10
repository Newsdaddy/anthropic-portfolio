import { FadeIn } from "./FadeIn";

interface SkillTagProps {
  label: string;
  delay: number;
}

const SkillTag = ({ label, delay }: SkillTagProps) => (
  <FadeIn delay={delay}>
    <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-card text-card-foreground border border-card-foreground/10 hover:bg-card-foreground/10 transition-colors cursor-default">
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
        <p className="anthropic-label mb-6">Skills & Languages</p>
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
