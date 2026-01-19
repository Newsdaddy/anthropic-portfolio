import { FadeIn } from "./FadeIn";
import { ArrowUpRight } from "lucide-react";

export const LectureLink = () => {
  return (
    <section className="py-12 md:py-16">
      <FadeIn delay={0.8}>
        <h2 className="text-xs uppercase tracking-wider text-subtle mb-6">
          진행 중인 강의
        </h2>
      </FadeIn>
      
      <FadeIn delay={0.85}>
        <a
          href="https://class101.net"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 py-3 text-base hover-surface rounded px-3 -mx-3 transition-colors duration-150"
        >
          <span>취업·이직을 위한 커리어 설계 강의</span>
          <ArrowUpRight 
            size={16} 
            className="text-subtle group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" 
          />
        </a>
        <p className="text-sm text-muted-foreground mt-2 pl-3 -ml-3">
          Class101에서 진행 중
        </p>
      </FadeIn>
    </section>
  );
};
