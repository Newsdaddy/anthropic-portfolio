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
          <p className="text-lg font-bold text-card-foreground mb-2">Filter ICP → Convert to Discovery Meeting</p>
          <p className="text-sm text-card-foreground/60">Filtering qualified leads for high-conversion sales conversations</p>
        </div>
      </FadeIn>

      {/* Slide 1: B2B Sales Flow */}
      <div className="py-12 md:py-16">
        <FadeIn delay={0.95}>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">B2B Sales Flow</h2>
        </FadeIn>
        <FadeIn delay={1.0}>
          <p className="anthropic-label mb-6" style={{ color: '#D4714A' }}>How I Actually Develop Business</p>
        </FadeIn>
        <FadeIn delay={1.05}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { step: "01", title: "Lead Acquisition", items: ["SEO / Website inbound", "Demo request", "Reports request", "Referral from clients"] },
              { step: "02", title: "Business Development", items: ["Discuss common topics", "Value proposition", "Demo presentation", "Q&A session"] },
              { step: "03", title: "Negotiation & Closing", items: ["Offer pricing consultation", "Pricing guide", "Contract negotiation"] },
              { step: "04", title: "Onboarding & Use", items: ["Onboarding training", "Regular check-in meetings", "Usage Q&A support"] },
              { step: "05", title: "Farming & Upsell", items: ["New feature updates", "Expansion opportunities", "Referral program"] },
            ].map((phase, idx) => (
              <div key={phase.step} className="anthropic-card">
                <p className="text-2xl font-bold mb-2" style={{ color: '#D4714A' }}>{phase.step}</p>
                <p className="font-bold text-card-foreground text-sm mb-3">{phase.title}</p>
                <ul className="space-y-1">
                  {phase.items.map((item, i) => (
                    <li key={i} className="text-xs text-card-foreground/60">→ {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Slide 2: Key Account Internal Mapping */}
      <div className="py-12 md:py-16">
        <FadeIn delay={1.1}>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Key Account Internal Mapping</h2>
        </FadeIn>
        <FadeIn delay={1.15}>
          <p className="anthropic-label mb-6" style={{ color: '#D4714A' }}>Map Key Accounts in Detail to Build Sales Strategy</p>
        </FadeIn>
        <FadeIn delay={1.2}>
          <div className="anthropic-card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-card-foreground/10">
                  <th className="text-left py-3 px-2 font-bold text-card-foreground">Client</th>
                  <th className="text-left py-3 px-2 font-bold text-card-foreground">Department</th>
                  <th className="text-left py-3 px-2 font-bold text-card-foreground">Contact</th>
                  <th className="text-left py-3 px-2 font-bold text-card-foreground">Notes</th>
                </tr>
              </thead>
              <tbody className="text-card-foreground/70">
                <tr className="border-b border-card-foreground/5">
                  <td className="py-3 px-2" rowSpan={3}>Auto OEM</td>
                  <td className="py-3 px-2">MI Planning Team</td>
                  <td className="py-3 px-2">Han○○ Senior Manager</td>
                  <td className="py-3 px-2">Contract since 2024, Professional Account</td>
                </tr>
                <tr className="border-b border-card-foreground/5">
                  <td className="py-3 px-2">Electrification HQ</td>
                  <td className="py-3 px-2">Lee○○ Senior Manager</td>
                  <td className="py-3 px-2">Consumer Insights bundle</td>
                </tr>
                <tr className="border-b border-card-foreground/5">
                  <td className="py-3 px-2">ICE Product Planning</td>
                  <td className="py-3 px-2">Ko○○ Manager</td>
                  <td className="py-3 px-2">AskStatista Light bundle</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-card-foreground/40 mt-4 text-center">* Statista Korea case example - multi-department enterprise penetration strategy</p>
          </div>
        </FadeIn>
      </div>

      {/* Slide 3: Why Anthropic Needs Byeongjin */}
      <div className="py-12 md:py-16">
        <FadeIn delay={1.25}>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Why Anthropic Needs Byeongjin as BDR in Korea</h2>
        </FadeIn>
        <FadeIn delay={1.3}>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="anthropic-card">
              <p className="text-lg font-bold mb-3" style={{ color: '#D4714A' }}>Market</p>
              <ul className="space-y-2 text-sm text-card-foreground/70">
                <li>→ $900B valuation round in review</li>
                <li>→ $30B ARR (1,400% YoY growth)</li>
                <li>→ Claude Code run-rate $2.5B+</li>
              </ul>
            </div>
            <div className="anthropic-card">
              <p className="text-lg font-bold mb-3" style={{ color: '#D4714A' }}>Why Now</p>
              <ul className="space-y-2 text-sm text-card-foreground/70">
                <li>→ Korea Claude usage: Global Top 5</li>
                <li>→ Per-capita usage exceeds US</li>
                <li>→ Claude Code weekly active users: 6x</li>
              </ul>
            </div>
            <div className="anthropic-card">
              <p className="text-lg font-bold mb-3" style={{ color: '#D4714A' }}>Value I Bring</p>
              <ul className="space-y-2 text-sm text-card-foreground/70">
                <li>→ Productivity & Cost optimization</li>
                <li>→ Time & Speed to market</li>
                <li>→ Market Insight for Korea</li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
