import { FadeIn } from "./FadeIn";

interface ExperienceItemProps {
  title: string;
  org: string;
  detail: string;
  delay: number;
}

const ExperienceItem = ({ title, org, detail, delay }: ExperienceItemProps) => (
  <FadeIn delay={delay}>
    <div className="py-5 border-b divider">
      <p className="font-medium mb-1">{title}</p>
      <p className="text-sm text-subtle">{org}</p>
      <p className="text-sm text-muted-foreground mt-2">{detail}</p>
    </div>
  </FadeIn>
);

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "시사 다큐멘터리 연출",
      org: "KBS",
      detail: "한국PD대상 수상. 시청률 12% 기록.",
    },
    {
      title: "콘텐츠 팀 리드",
      org: "테크 스타트업 A사",
      detail: "월 조회수 500만 달성. 팀 10명 빌딩.",
    },
    {
      title: "APAC 세일즈 매니저",
      org: "글로벌 SaaS 기업 B사",
      detail: "신규 시장 매출 $2M 달성. 파트너 20개사 확보.",
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <FadeIn delay={0.55}>
        <h2 className="text-xs uppercase tracking-wider text-subtle mb-6">
          대표 경험
        </h2>
      </FadeIn>
      
      <div>
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={exp.title}
            title={exp.title}
            org={exp.org}
            detail={exp.detail}
            delay={0.6 + index * 0.08}
          />
        ))}
      </div>
    </section>
  );
};
