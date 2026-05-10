import { FadeIn } from "./FadeIn";

interface CareerCardProps {
  number: string;
  period: string;
  role: string;
  company: string;
  location: string;
  achievements: string[];
  videoSrc?: string;
  delay: number;
}

const CareerCard = ({ number, period, role, company, location, achievements, videoSrc, delay }: CareerCardProps) => (
  <FadeIn delay={delay}>
    <div className="anthropic-card">
      {/* Video Section - Fixed 16:9 aspect ratio for consistent sizing */}
      {videoSrc && (
        <div className="relative w-full mb-5" style={{ paddingBottom: '56.25%' }}>
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
            onCanPlay={(e) => (e.target as HTMLVideoElement).play()}
          />
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-card-foreground mb-1">
            {role}
          </h3>
          <p className="text-sm text-card-foreground/70">
            {company} · {location}
          </p>
        </div>
        <span className="text-4xl font-bold text-card-foreground/10">
          {number}
        </span>
      </div>

      {/* Divider */}
      <div className="anthropic-divider my-4" />

      {/* Meta */}
      <div className="flex items-center justify-between mb-4">
        <span className="anthropic-label">Period</span>
        <span className="text-sm text-card-foreground/80">{period}</span>
      </div>

      {/* Achievements */}
      <ul className="space-y-2">
        {achievements.map((achievement, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-card-foreground/70">
            <span className="text-primary mt-1 shrink-0">→</span>
            <span className="leading-relaxed">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  </FadeIn>
);

export const CareerSection = () => {
  const careers = [
    {
      number: "01",
      period: "Mar 2026 — Present",
      role: "Lead Instructor & Founder",
      company: "Arche Intelligence",
      location: "Seoul, Korea",
      achievements: [
        "Corporate AX (AI Transformation) workshops using Claude Code for business leaders",
        "Won 2 enterprise training contracts within first 2 months",
        "Audience growth: Instagram +487%, LinkedIn +1,000, Newsletter 686 subscribers",
        "Claude Code Corporate Training: KCIC, Midbar, AGC Asia Pacific",
      ],
    },
    {
      number: "02",
      period: "Mar 2026 — Present",
      role: "Freelance Sales Consultant",
      company: "ECDB (E-commerce Market Intelligence)",
      location: "Remote",
      videoSrc: "/videos/ecdb.mp4",
      achievements: [
        "AI-powered lead generation: 2/year → 30/month (180× improvement) using Claude Code",
        "Full-cycle B2B sales: lead gen → discovery → pitch → close",
        "Leading APAC market expansion strategy",
      ],
    },
    {
      number: "03",
      period: "Jun 2021 — Feb 2026",
      role: "Sr. Business Development Manager",
      company: "Statista GmbH",
      location: "Hamburg, Germany",
      videoSrc: "/videos/statista-webinar.mp4",
      achievements: [
        "Built Korea market from scratch → 5× ARR growth in 4 years",
        "Closed 188 enterprise contracts (LG, Hyundai, Samsung, PwC, KPMG, Deloitte)",
        "Full-cycle sales: prospecting → qualification → demo → negotiation → close",
        "Managed pipeline in Salesforce, drove data-driven sales strategies",
      ],
    },
    {
      number: "04",
      period: "2015 — 2019",
      role: "News Anchor & Live Broadcaster",
      company: "YTN (24hr News Network)",
      location: "Seoul, Korea",
      videoSrc: "/videos/ytn-anchor.mp4",
      achievements: [
        "Daily live news production — high-pressure, real-time communication",
        "Interviewed C-suite executives and government officials",
        "2018 Inter-Korean Summit special coverage anchor",
      ],
    },
    {
      number: "05",
      period: "2016 — 2019",
      role: "Editor-in-Chief",
      company: "BBC Science Korea",
      location: "Seoul, Korea",
      achievements: [
        "Scaled B2B advertising revenue +42% YoY",
        "Led content strategy: 4,700+ articles, 570 BBC translations",
        "Built editorial processes from startup to profitable media outlet",
      ],
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <FadeIn delay={0.5}>
        <p className="anthropic-label mb-6">Career</p>
      </FadeIn>

      <div className="grid gap-4 md:gap-6">
        {careers.map((career, index) => (
          <CareerCard
            key={career.company}
            {...career}
            delay={0.55 + index * 0.08}
          />
        ))}
      </div>
    </section>
  );
};
