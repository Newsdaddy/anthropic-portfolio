import { FadeIn } from "./FadeIn";
import { ArrowUpRight, Sparkles } from "lucide-react";

export const LectureLink = () => {
  return (
    <section className="py-12 md:py-16">
      <FadeIn delay={1.05}>
        <a
          href="https://class101.net"
          target="_blank"
          rel="noopener noreferrer"
          className="group block p-6 rounded-xl bg-gradient-primary relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          
          <div className="relative flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
              <Sparkles className="text-white" size={24} />
            </div>
            
            <div className="flex-1">
              <p className="text-white/80 text-sm mb-1">진행 중인 강의</p>
              <p className="text-white font-semibold text-lg">
                취업·이직을 위한 커리어 설계 강의
              </p>
            </div>
            
            <ArrowUpRight 
              size={24} 
              className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" 
            />
          </div>
        </a>
      </FadeIn>
    </section>
  );
};
