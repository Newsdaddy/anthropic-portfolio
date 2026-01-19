import { FadeIn } from "./FadeIn";

interface SkillTagProps {
  label: string;
  delay: number;
}

const SkillTag = ({ label, delay }: SkillTagProps) => (
  <FadeIn delay={delay}>
    <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-secondary text-secondary-foreground border border-border hover:border-primary/30 transition-colors">
      {label}
    </span>
  </FadeIn>
);

export const SkillsSection = () => {
  const skills = [
    "B2B SaaS Sales",
    "Content Strategy",
    "Editorial Management",
    "Live Broadcasting",
    "Korean Copywriting",
    "Fact-checking",
    "Salesforce",
    "WordPress CMS",
    "Korean (Native)",
    "English (TOEIC 915)",
    "German (Telc C1)",
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
