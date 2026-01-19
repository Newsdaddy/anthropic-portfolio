import { FadeIn } from "./FadeIn";
import { ArrowUpRight, Mail, Linkedin, Youtube } from "lucide-react";

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
    className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-card border border-border hover:border-primary/50 active:scale-[0.98] transition-all duration-300"
  >
    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-secondary flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <span className="font-medium block text-sm sm:text-base">{name}</span>
      <span className="text-xs sm:text-sm text-muted-foreground truncate block">{description}</span>
    </div>
    <ArrowUpRight
      size={16}
      className="text-muted-foreground shrink-0 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
    />
  </a>
);

export const SocialLinks = () => {
  const links = [
    {
      name: "Email",
      url: "mailto:byeongjin.jeong05@gmail.com",
      description: "강의·협업 제안",
      icon: <Mail size={20} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/valueforyourbiz",
      description: "커머스 전략 솔루션 상담",
      icon: <Linkedin size={20} />,
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@newsdaddy?si=MlVd-dM71ypHTvYl",
      description: "나만의 성장 스토리",
      icon: <Youtube size={20} />,
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <FadeIn delay={1.1}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Connect
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
      </FadeIn>
      
      <div className="grid gap-2 sm:gap-3 md:grid-cols-3">
        {links.map((link, index) => (
          <FadeIn key={link.name} delay={1.15 + index * 0.05}>
            <SocialLink {...link} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
