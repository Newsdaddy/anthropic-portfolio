import { FadeIn } from "./FadeIn";
import { ArrowRight, Search, Bot, BarChart3 } from "lucide-react";

interface VideoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkedinUrl: string;
  videoSrc?: string;
  delay: number;
}

const VideoCard = ({ title, description, icon, linkedinUrl, videoSrc, delay }: VideoCardProps) => (
  <FadeIn delay={delay}>
    <div className="anthropic-card h-full flex flex-col">
      {/* Video Area - Auto-playing */}
      <div className="relative aspect-video rounded-xl overflow-hidden bg-card-foreground/5 mb-4">
        {videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-card-foreground/10">
            <div className="w-10 h-10 rounded-lg bg-card/90 flex items-center justify-center">
              {icon}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-bold text-card-foreground mb-2">{title}</h3>
        <p className="text-sm text-card-foreground/60 leading-relaxed">{description}</p>
      </div>

      {/* CTA */}
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-card-foreground/80 hover:text-card-foreground transition-colors"
      >
        View post <ArrowRight size={14} />
      </a>
    </div>
  </FadeIn>
);

export const AIShowcase = () => {
  const demos = [
    {
      title: "Deep Research in Minutes",
      description: "업무용 심층 리서치 1건에 40분 → Claude로 수 분 만에 완료. 실제 업무 효율화 사례.",
      icon: <Search size={20} className="text-card-foreground/70" />,
      linkedinUrl: "https://www.linkedin.com/posts/valueforyourbiz_%EC%98%88%EC%A0%84%EC%97%94-%EC%97%85%EB%AC%B4%EC%9A%A9-%EB%94%A5%ED%95%9C-%EB%A6%AC%EC%84%9C%EC%B9%98-1%EA%B1%B4%EC%97%90-40%EB%B6%84-%EC%A0%95%EB%8F%84-%EC%8D%BC%EC%8A%B5%EB%8B%88%EB%8B%A4-%EC%A0%9C%EB%AF%B8%EB%82%98%EC%9D%B4-%EC%8B%AC%EC%B8%B5%EB%A6%AC%EC%84%9C%EC%B9%98-ugcPost-7457443494169849858-AQkw",
      videoSrc: "/videos/research-demo.mov"
    },
    {
      title: "AI Agent for B2B Sales",
      description: "B2B 세일즈 딜 전후 작업 25시간 → AI 에이전트로 자동화. 실제 워크플로우 시연.",
      icon: <Bot size={20} className="text-card-foreground/70" />,
      linkedinUrl: "https://www.linkedin.com/posts/valueforyourbiz_1%EB%85%84-%EC%A0%84-%EC%A0%80%EB%8A%94-b2b-%EC%84%B8%EC%9D%BC%EC%A6%88-%EB%94%9C-%ED%95%98%EB%82%98-%EC%A0%84%ED%9B%84-%EC%9E%91%EC%97%85%EC%97%90-25%EC%8B%9C%EA%B0%84%EC%9D%84-%EC%8D%BC%EC%8A%B5%EB%8B%88%EB%8B%A4-ugcPost-7450065105712668672-iM6_",
      videoSrc: "/videos/agent-demo.mov",
    },
    {
      title: "DART Analysis Automation",
      description: "기업 분석에 기업당 20-30분 → Claude로 즉시 분석. 공시 데이터 자동 처리.",
      icon: <BarChart3 size={20} className="text-card-foreground/70" />,
      linkedinUrl: "https://www.linkedin.com/posts/valueforyourbiz_%EA%B3%BC%EA%B1%B0%EC%97%94-%EA%B8%B0%EC%97%85-%EB%B6%84%EC%84%9D%ED%95%A0-%EB%95%8C%EB%A7%88%EB%8B%A4-%EC%97%AC%EA%B8%B0-%EB%93%A4%EC%96%B4%EA%B0%80%EB%8A%90%EB%9D%BC-%EA%B8%B0%EC%97%85%EB%8B%B9-2030%EB%B6%84%EC%9D%84-%EC%8D%BC%EC%96%B4%EC%9A%94-ugcPost-7452111760666292224-U3gv",
      videoSrc: "/videos/dart-demo.mov"
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <FadeIn delay={0.25}>
        <p className="anthropic-label mb-6">How I Use Claude Code for Business Development</p>
      </FadeIn>

      <div className="grid gap-4 md:grid-cols-3">
        {demos.map((demo, index) => (
          <VideoCard
            key={demo.title}
            {...demo}
            delay={0.3 + index * 0.08}
          />
        ))}
      </div>
    </section>
  );
};
