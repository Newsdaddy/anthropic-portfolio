import { FadeIn } from "./FadeIn";
import { ArrowUpRight, Mail, Linkedin, FileText } from "lucide-react";

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
    className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
  >
    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
      {icon}
    </div>
    <div className="flex-1">
      <span className="font-medium block">{name}</span>
      <span className="text-sm text-muted-foreground">{description}</span>
    </div>
    <ArrowUpRight 
      size={18} 
      className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" 
    />
  </a>
);

export const SocialLinks = () => {
  const links = [
    { 
      name: "Email", 
      url: "mailto:editorjin0326@gmail.com", 
      description: "editorjin0326@gmail.com",
      icon: <Mail size={20} />,
    },
    { 
      name: "LinkedIn", 
      url: "https://linkedin.com/in/byeongjin-jeong", 
      description: "Professional network",
      icon: <Linkedin size={20} />,
    },
    { 
      name: "Resume", 
      url: "#", 
      description: "Download PDF",
      icon: <FileText size={20} />,
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
