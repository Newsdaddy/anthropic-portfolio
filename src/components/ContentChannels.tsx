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

      {/* Slide 1: B2B Sales Flow - PPT Style */}
      <div className="py-12 md:py-16">
        <FadeIn delay={0.95}>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">How I Actually Develop Business with the Leads Collected</h2>
        </FadeIn>
        <FadeIn delay={1.0}>
          {/* Flow Header - Arrow Steps */}
          <div className="grid grid-cols-6 gap-1 mb-4">
            <div className="flex items-center justify-center">
              <span className="px-3 py-2 rounded-full bg-gray-500 text-white text-xs font-bold">Flows</span>
            </div>
            {["Lead Acquisition", "Business Development", "Negotiation & Closing", "Onboarding & Use", "Farming & Upsell"].map((step, idx) => (
              <div key={step} className="flex items-center">
                <div
                  className="w-full py-2 text-xs font-bold text-white text-center"
                  style={{
                    backgroundColor: idx === 4 ? '#1a1a1a' : '#4a4a4a',
                    clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%, 10px 50%)',
                    paddingLeft: '14px',
                    paddingRight: '14px',
                  }}
                >
                  {step}
                </div>
              </div>
            ))}
          </div>

          {/* Clients Row */}
          <div className="grid grid-cols-6 gap-1 mb-1">
            <div className="flex items-start pt-3"><span className="text-sm font-bold" style={{ color: '#D4714A' }}>Clients</span></div>
            {[
              ["Referral from existing clients", "SEO / website inbound", "Demo request", "Reports request"],
              ["Introduce solution to stakeholders", "Meeting with key stakeholders", "Discuss common topics (idioms)", "Value proposition", "Demo presentation", "Q&A session"],
              ["Internal shortlist selection", "Executive report", "Pricing negotiation", "Contract terms", "Contract signing", "Offer pricing consultation"],
              ["Payment processing", "Internal admin setup", "Onboarding training", "Regular check-in meetings", "Usage Q&A support", "New feature info updates"],
              ["Renewal negotiation", "Add-on product proposal", "New feature updates", "Pricing guide", "Discuss common topics (idioms)"],
            ].map((items, idx) => (
              <div key={idx} className="p-2 rounded-lg text-white" style={{ backgroundColor: '#C9735B', fontSize: '10px' }}>
                <ul className="space-y-0.5">
                  {items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Byeongjin Row */}
          <div className="grid grid-cols-6 gap-1">
            <div className="flex items-start pt-3"><span className="text-sm font-bold text-white">Byeongjin</span></div>
            {[
              ["TAM-SAM-SOM analysis & ICP definition", "LinkedIn lead generation", "SalesNavigator cold outreach", "AX based on Claude Code B2B seminar, workshops conduct by me", "Various Joint webinar / seminar"],
              [],
              [],
              [],
              [],
            ].map((items, idx) => (
              <div key={idx} className={`p-2 rounded-lg ${items.length > 0 ? 'text-card-foreground bg-card border border-card-foreground/10' : ''}`} style={{ fontSize: '10px' }}>
                {items.length > 0 && (
                  <ul className="space-y-0.5">
                    {items.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Slide 2: Key Account Internal Mapping - PPT Style */}
      <div className="py-12 md:py-16">
        <FadeIn delay={1.1}>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Key Account Internal Mapping</h2>
        </FadeIn>
        <FadeIn delay={1.15}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: '#C9735B' }}>
                  <th className="text-left py-3 px-4 font-bold text-white">Client</th>
                  <th className="text-left py-3 px-4 font-bold text-white">Department</th>
                  <th className="text-left py-3 px-4 font-bold text-white">Person of Contact</th>
                  <th className="text-left py-3 px-4 font-bold text-white">Notes</th>
                </tr>
              </thead>
              <tbody className="text-card-foreground/80 bg-card">
                <tr className="border-b border-card-foreground/10">
                  <td className="py-4 px-4 font-medium" rowSpan={4}>Auto OEM</td>
                  <td className="py-4 px-4">Product Division<br/>Market Intelligence Planning<br/>MI Planning Team</td>
                  <td className="py-4 px-4">Han○○ Senior Manager<br/>Lee○○ Senior Manager / MI Planning Team</td>
                  <td className="py-4 px-4">Contract since 2024<br/>Professional Account<br/>Consumer Insights (bundle)<br/>AskStatista Light (bundle)</td>
                </tr>
                <tr className="border-b border-card-foreground/10">
                  <td className="py-4 px-4">Electrification Business Dev. HQ<br/>Four-Wheel Strategy Division<br/>ICE Business Unit / ICE Product Planning</td>
                  <td className="py-4 px-4">Sagong ○○ Senior Manager / ICE Product Planning<br/>Ko○○ Manager</td>
                  <td className="py-4 px-4">Contract since 2023<br/>Consumer Insights<br/>AskStatista (upsell)</td>
                </tr>
                <tr className="border-b border-card-foreground/10">
                  <td className="py-4 px-4">Electrification Business Dev. HQ<br/>Four-Wheel Strategy Division<br/>Business Strategy / Market Intelligence</td>
                  <td className="py-4 px-4">Ma○○ Senior Manager<br/>Ji○○ Senior Manager</td>
                  <td className="py-4 px-4">Contract since 2023<br/>Professional Account<br/>Consumer Insights (bundle)<br/>AskStatista (upsell)</td>
                </tr>
                <tr className="border-b border-card-foreground/10">
                  <td className="py-4 px-4">Electrification Business HQ / BEV Dev. Center<br/>Software Dev. Center / SW Dept.<br/>India Mobility Dev. HQ / Data Solutions</td>
                  <td className="py-4 px-4">Lee○○ Senior Manager<br/>Yoo○○ Senior Manager</td>
                  <td className="py-4 px-4">Contract since 2022<br/>Consumer Insights<br/>Company Insights<br/>AskStatista (upsell)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>

      {/* Slide 3: Why Anthropic Needs Byeongjin - PPT Style */}
      <div className="py-12 md:py-16">
        <FadeIn delay={1.2}>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Why Anthropic Needs Byeongjin as BDR in Korea</h2>
        </FadeIn>
        <FadeIn delay={1.25}>
          <div className="space-y-0 overflow-x-auto">
            {/* Market Row */}
            <div className="flex">
              <div className="w-24 shrink-0 bg-black text-white py-3 px-4 font-bold text-sm flex items-center">Market</div>
              <div className="flex-1 bg-white py-3 px-4 text-sm text-card-foreground border-b border-card-foreground/10">
                $900B valuation round in review (surpassing OpenAI's $852B) | $30B ARR (1,400% YoY growth) | Claude Code run-rate $2.5B+
              </div>
            </div>
            {/* Why Now Row */}
            <div className="flex">
              <div className="w-24 shrink-0 bg-black text-white py-3 px-4 font-bold text-sm flex items-center">Why Now</div>
              <div className="flex-1 bg-white py-3 px-4 text-sm text-card-foreground border-b border-card-foreground/10">
                Korea Claude usage: Global Top 5 | Per-capita usage exceeds US | Claude Code weekly active users: 6x growth in 4 months
              </div>
            </div>
            {/* Challenge Row */}
            <div className="flex">
              <div className="w-24 shrink-0 bg-gray-200 text-card-foreground py-3 px-4 font-bold text-sm flex items-center">Challenge</div>
              <div className="flex-1 grid grid-cols-3 gap-0">
                <div className="bg-gray-100 p-4 border-r border-card-foreground/10">
                  <p className="font-bold text-sm mb-2" style={{ color: '#C9735B' }}>💰 Productivity & Cost</p>
                  <ul className="text-xs text-card-foreground/70 space-y-1">
                    <li>• 16-hour timezone gap (KR-SF)</li>
                    <li>• Deal cycle extended 2-3x</li>
                    <li>• English-only support limits reach</li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-4 border-r border-card-foreground/10">
                  <p className="font-bold text-sm mb-2" style={{ color: '#C9735B' }}>⏱️ Time & Speed</p>
                  <ul className="text-xs text-card-foreground/70 space-y-1">
                    <li>• No local references or case studies</li>
                    <li>• Cold outreach success rate: 1-2%</li>
                    <li>• Korean enterprise approval lines unknown</li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-4">
                  <p className="font-bold text-sm mb-2" style={{ color: '#C9735B' }}>🔍 Market Insight</p>
                  <ul className="text-xs text-card-foreground/70 space-y-1">
                    <li>• OpenAI: Seoul office, Samsung/SK deals</li>
                    <li>• Google: Gemini on 800M Galaxy devices</li>
                    <li>• 12-18 month late-mover disadvantage</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Solution Row */}
            <div className="flex">
              <div className="w-24 shrink-0 bg-gray-200 text-card-foreground py-3 px-4 font-bold text-sm flex items-center">Solution</div>
              <div className="flex-1 grid grid-cols-3 gap-0">
                <div className="p-4 border-r border-white/20 text-white" style={{ backgroundColor: '#C9735B' }}>
                  <p className="font-bold text-sm mb-2">in LinkedIn Influencer</p>
                  <ul className="text-xs space-y-1">
                    <li>• Claude use-case in daily works content (3x/week)</li>
                    <li>• 10K+ LinkedIn, Instagram followers, 693 Newsletter subscribers driving inbound leads</li>
                  </ul>
                </div>
                <div className="p-4 border-r border-white/20 text-white" style={{ backgroundColor: '#C9735B' }}>
                  <p className="font-bold text-sm mb-2">🚀 AX Training & Ecosystem Builder</p>
                  <ul className="text-xs space-y-1">
                    <li>• Setup to custom business workflows with Claude Code</li>
                    <li>• Hands-on training sessions with Claude Code</li>
                  </ul>
                </div>
                <div className="p-4 text-white" style={{ backgroundColor: '#C9735B' }}>
                  <p className="font-bold text-sm mb-2">📊 Seasoned Business Developer</p>
                  <ul className="text-xs space-y-1">
                    <li>• Fluent in Value Selling, Challenger Sale, SPICED framework</li>
                    <li>• AI learners network acquisition</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Value Row */}
            <div className="flex">
              <div className="w-24 shrink-0 bg-gray-200 text-card-foreground py-3 px-4 font-bold text-sm flex items-center">Value</div>
              <div className="flex-1 grid grid-cols-3 gap-0">
                <div className="bg-white p-4 border-r border-card-foreground/10">
                  <p className="text-sm text-card-foreground">✓ <strong>'Customers come to you' sales model</strong></p>
                </div>
                <div className="bg-white p-4 border-r border-card-foreground/10">
                  <p className="text-sm text-card-foreground">✓ <strong>Every trainee = Claude Code customer</strong></p>
                  <p className="text-sm text-card-foreground">✓ Real-time competitive monitoring</p>
                </div>
                <div className="bg-white p-4">
                  <p className="text-sm text-card-foreground">✓ <strong>Penetrating B2B Solution to each domains business planning & AX planning in Korea</strong></p>
                  <p className="text-sm text-card-foreground">✓ Create Korea success stories</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
