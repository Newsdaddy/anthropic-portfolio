import { FadeIn } from "./FadeIn";
import { ArrowUpRight, Sparkles } from "lucide-react";

export const LectureLink = () => {
  return (
    <section className="py-12 md:py-16 space-y-3 sm:space-y-4">
      <FadeIn delay={1.05}>
        <a
          href="https://class101.net"
          target="_blank"
          rel="noopener noreferrer"
          className="group block p-4 sm:p-6 rounded-xl bg-gradient-primary relative overflow-hidden active:scale-[0.98] transition-transform"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

          <div className="relative flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
              <Sparkles className="text-white" size={20} />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-white/80 text-xs sm:text-sm mb-0.5 sm:mb-1">진행 중인 강의</p>
              <p className="text-white font-semibold text-base sm:text-lg truncate">
                취업·이직을 위한 커리어 설계 강의
              </p>
            </div>

            <ArrowUpRight
              size={20}
              className="text-white shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
            />
          </div>
        </a>
      </FadeIn>

      <FadeIn delay={1.1}>
        <a
          href="https://www.amazingtalker.co.kr/teachers-and-tutors/byeongjin-jeong?page=2&from_tutors_page&language=korean"
          target="_blank"
          rel="noopener noreferrer"
          className="group block p-4 sm:p-6 rounded-xl bg-gradient-primary relative overflow-hidden active:scale-[0.98] transition-transform"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

          <div className="relative flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-xs sm:text-sm">가<span className="text-[10px] sm:text-xs ml-0.5">A</span></span>
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-white/80 text-xs sm:text-sm mb-0.5 sm:mb-1">진행 중인 강의</p>
              <p className="text-white font-semibold text-base sm:text-lg truncate">
                Korean Lessons for Foreigners
              </p>
            </div>

            <ArrowUpRight
              size={20}
              className="text-white shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
            />
          </div>
        </a>
      </FadeIn>
    </section>
  );
};
