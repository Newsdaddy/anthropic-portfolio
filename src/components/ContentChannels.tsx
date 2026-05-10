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
    <section className="relative">
      {/* Funnel Flow Diagram - extends from above to cards */}
      <FadeIn delay={0.6}>
        <div className="relative">
          <svg
            className="w-full h-80 md:h-96"
            viewBox="0 0 400 280"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
          >
            {/* 3 lines coming down from top (from 3 video cards) */}
            {/* Left card line */}
            <path
              d="M 65 0 L 65 40 Q 65 60 130 70 L 200 80"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-foreground/25"
              strokeLinecap="round"
            />
            {/* Center card line */}
            <path
              d="M 200 0 L 200 80"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-foreground/25"
              strokeLinecap="round"
            />
            {/* Right card line */}
            <path
              d="M 335 0 L 335 40 Q 335 60 270 70 L 200 80"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-foreground/25"
              strokeLinecap="round"
            />

            {/* Convergence point */}
            <circle cx="200" cy="80" r="5" fill="currentColor" className="text-foreground/30" />

            {/* Split to 2 landing pages - long lines reaching cards */}
            {/* To Landing Page 1 (left) */}
            <path
              d="M 200 80 L 200 140 Q 200 170 140 190 L 100 210 L 100 275"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-foreground/25"
              strokeLinecap="round"
            />
            {/* To Landing Page 2 (right) */}
            <path
              d="M 200 80 L 200 140 Q 200 170 260 190 L 300 210 L 300 275"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-foreground/25"
              strokeLinecap="round"
            />

            {/* Arrow heads pointing to cards below */}
            <polygon points="100,280 93,265 107,265" fill="currentColor" className="text-foreground/35" />
            <polygon points="300,280 293,265 307,265" fill="currentColor" className="text-foreground/35" />
          </svg>

          {/* Center label */}
          <div className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="px-4 py-1.5 rounded-full bg-background text-xs text-foreground/50 uppercase tracking-wider border border-foreground/15">
              Leads converge
            </span>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.65}>
        <p className="anthropic-label mb-6" style={{ color: '#D4714A' }}>Where Leads Converge</p>
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

      {/* Convergence Flow - Two lines merging */}
      <FadeIn delay={0.85}>
        <div className="relative">
          <svg
            className="w-full h-32 md:h-40"
            viewBox="0 0 400 120"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
          >
            {/* Left line from Landing Page 1 */}
            <path
              d="M 100 0 L 100 40 Q 100 60 150 70 L 200 80"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-foreground/25"
              strokeLinecap="round"
            />
            {/* Right line from Landing Page 2 */}
            <path
              d="M 300 0 L 300 40 Q 300 60 250 70 L 200 80"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-foreground/25"
              strokeLinecap="round"
            />
            {/* Convergence point */}
            <circle cx="200" cy="80" r="5" fill="currentColor" className="text-foreground/30" />
            {/* Arrow down */}
            <path
              d="M 200 80 L 200 115"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-foreground/25"
              strokeLinecap="round"
            />
            <polygon points="200,120 193,108 207,108" fill="currentColor" className="text-foreground/35" />
          </svg>
        </div>
      </FadeIn>

      {/* ICP Discovery Meeting Card */}
      <FadeIn delay={0.9}>
        <div className="anthropic-card text-center py-6">
          <p className="text-lg font-bold text-card-foreground mb-2">ICP만 선별해 Discovery Meeting 전환</p>
          <p className="text-sm text-card-foreground/60">Filtering qualified leads for high-conversion sales conversations</p>
        </div>
      </FadeIn>
    </section>
  );
};
