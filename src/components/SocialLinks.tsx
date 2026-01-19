import { FadeIn } from "./FadeIn";
import { ArrowUpRight } from "lucide-react";

interface SocialLinkProps {
  name: string;
  url: string;
  handle: string;
}

const SocialLink = ({ name, url, handle }: SocialLinkProps) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center justify-between py-4 border-b divider hover-surface px-3 -mx-3 transition-colors duration-150"
  >
    <div>
      <span className="font-medium">{name}</span>
      <span className="text-sm text-subtle ml-3">{handle}</span>
    </div>
    <ArrowUpRight 
      size={16} 
      className="text-subtle group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" 
    />
  </a>
);

export const SocialLinks = () => {
  const links = [
    { name: "YouTube", url: "https://youtube.com", handle: "@username" },
    { name: "Threads", url: "https://threads.net", handle: "@username" },
    { name: "LinkedIn", url: "https://linkedin.com", handle: "/in/username" },
  ];

  return (
    <section className="py-12 md:py-16">
      <FadeIn delay={0.9}>
        <h2 className="text-xs uppercase tracking-wider text-subtle mb-6">
          소셜
        </h2>
      </FadeIn>
      
      <div>
        {links.map((link, index) => (
          <FadeIn key={link.name} delay={0.95 + index * 0.05}>
            <SocialLink name={link.name} url={link.url} handle={link.handle} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
