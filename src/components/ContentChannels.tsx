import { FadeIn } from "./FadeIn";
import { ArrowRight, Globe, Mail } from "lucide-react";

interface ChannelCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  url: string;
  label: string;
  delay: number;
}

const ChannelCard = ({ title, description, icon, url, label, delay }: ChannelCardProps) => (
  <FadeIn delay={delay}>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="anthropic-card h-full flex flex-col group hover:scale-[1.02] transition-transform duration-300"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-card-foreground/10 flex items-center justify-center shrink-0 group-hover:bg-card-foreground/20 transition-colors">
          {icon}
        </div>
        <div className="flex-1">
          <p className="anthropic-label mb-1">{label}</p>
          <h3 className="font-bold text-card-foreground text-lg">{title}</h3>
        </div>
      </div>

      <p className="text-sm text-card-foreground/60 leading-relaxed flex-1">
        {description}
      </p>

      <div className="flex items-center gap-2 mt-4 text-sm font-medium text-card-foreground/80 group-hover:text-card-foreground transition-colors">
        Visit <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </a>
  </FadeIn>
);

export const ContentChannels = () => {
  const channels = [
    {
      title: "E-commerce Market Data Hub",
      description: "Resource landing page for B2B leads from LinkedIn & Instagram. Captures qualified prospects through valuable market insights. Enables natural service exposure and lead qualification at scale.",
      icon: <Globe size={24} className="text-card-foreground/70" />,
      url: "https://ecommerce-market-data.vercel.app/resources",
      label: "Landing Page 1",
    },
    {
      title: "Newsdaddy AI Newsletter",
      description: "Curated AI insights and business development content. Direct channel to push service updates and nurture leads. Builds trust through consistent value delivery before the sales conversation.",
      icon: <Mail size={24} className="text-card-foreground/70" />,
      url: "https://maily.so/newsdaddyai",
      label: "Landing Page 2",
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <FadeIn delay={0.65}>
        <p className="anthropic-label mb-6">Where Leads Converge</p>
      </FadeIn>

      <div className="grid gap-4 md:grid-cols-2">
        {channels.map((channel, index) => (
          <ChannelCard
            key={channel.title}
            {...channel}
            delay={0.7 + index * 0.08}
          />
        ))}
      </div>
    </section>
  );
};
