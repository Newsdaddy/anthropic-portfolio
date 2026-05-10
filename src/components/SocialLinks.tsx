import { FadeIn } from "./FadeIn";
import { ArrowRight, Mail, Linkedin, Newspaper } from "lucide-react";

interface SocialLinkProps {
  name: string;
  url: string;
  description: string;
  icon: React.ReactNode;
}

const SocialLink = ({ name, url, description, icon }: SocialLinkProps) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group anthropic-card flex items-center gap-4 hover:scale-[1.02] transition-transform"
  >
    <div className="w-10 h-10 rounded-xl bg-card-foreground/10 flex items-center justify-center text-card-foreground/70 shrink-0">
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <span className="font-medium block text-card-foreground">{name}</span>
      <span className="text-sm text-card-foreground/60 truncate block">{description}</span>
    </div>
    <ArrowRight
      size={16}
      className="text-card-foreground/40 shrink-0 group-hover:translate-x-1 transition-transform"
    />
  </a>
);

export const SocialLinks = () => {
  const links = [
    {
      name: "Email",
      url: "mailto:byeongjin.jeong05@gmail.com",
      description: "Schedule next steps",
      icon: <Mail size={20} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/valueforyourbiz",
      description: "Full career history",
      icon: <Linkedin size={20} />,
    },
    {
      name: "Newsletter",
      url: "https://maily.so/newsdaddyai",
      description: "AI insights & business content",
      icon: <Newspaper size={20} />,
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <FadeIn delay={1.1}>
        <p className="anthropic-label mb-6" style={{ color: '#D4714A' }}>Connect</p>
      </FadeIn>

      <div className="grid gap-3 md:grid-cols-3">
        {links.map((link, index) => (
          <FadeIn key={link.name} delay={1.15 + index * 0.05}>
            <SocialLink {...link} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
