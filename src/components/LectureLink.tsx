import { FadeIn } from "./FadeIn";
import { ArrowUpRight, BookOpen, Sparkles } from "lucide-react";

export const LectureLink = () => {
  return (
    <section className="py-12 md:py-16 space-y-3 sm:space-y-4">
      <FadeIn delay={1.05}>
        <a
          href="https://class101.net/ko/products/6866869e1749443b50e3082e?utm_campaign=pdp_share&utm_content=share_feature&utm_medium=referral&utm_source=link_share_share&utm_term=6866869e1749443b50e3082e"
          target="_blank"
          rel="noopener noreferrer"
          className="group block p-4 sm:p-6 rounded-xl bg-gradient-primary relative overflow-hidden hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />

          <div className="relative flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
              <Sparkles className="text-white group-hover:rotate-12 transition-transform duration-300" size={20} />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-white/80 text-xs sm:text-sm mb-0.5 sm:mb-1 group-hover:text-white transition-colors duration-300">진행 중인 강의</p>
              <p className="text-white font-semibold text-base sm:text-lg truncate group-hover:tracking-wide transition-all duration-300">
                취업·이직을 위한 커리어 설계 강의
              </p>
            </div>

            <ArrowUpRight
              size={20}
              className="text-white shrink-0 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:scale-125 transition-all duration-300"
            />
          </div>
        </a>
      </FadeIn>

      <FadeIn delay={1.1}>
        <a
          href="https://www.amazingtalker.co.kr/teachers-and-tutors/byeongjin-jeong?page=2&from_tutors_page&language=korean"
          target="_blank"
          rel="noopener noreferrer"
          className="group block p-4 sm:p-6 rounded-xl bg-gradient-primary relative overflow-hidden hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />

          <div className="relative flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
              <span className="text-white font-bold text-xs sm:text-sm group-hover:scale-110 transition-transform duration-300">가<span className="text-[10px] sm:text-xs ml-0.5">A</span></span>
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-white/80 text-xs sm:text-sm mb-0.5 sm:mb-1 group-hover:text-white transition-colors duration-300">진행 중인 강의</p>
              <p className="text-white font-semibold text-base sm:text-lg truncate group-hover:tracking-wide transition-all duration-300">
                Korean Lessons for Foreigners
              </p>
            </div>

            <ArrowUpRight
              size={20}
              className="text-white shrink-0 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:scale-125 transition-all duration-300"
            />
          </div>
        </a>
      </FadeIn>

      <FadeIn delay={1.15}>
        <a
          href="#"
          className="group block p-4 sm:p-6 rounded-xl bg-gradient-primary relative overflow-hidden hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />

          <div className="relative flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
              <BookOpen className="text-white group-hover:-rotate-6 transition-transform duration-300" size={20} />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-white/80 text-xs sm:text-sm mb-0.5 sm:mb-1 group-hover:text-white transition-colors duration-300">
                판매 중인 e북
              </p>
              <p className="text-white font-semibold text-base sm:text-lg truncate group-hover:tracking-wide transition-all duration-300">
                두 아이 아빠의 독일 이민 랩소디
              </p>
            </div>

            <ArrowUpRight
              size={20}
              className="text-white shrink-0 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:scale-125 transition-all duration-300"
            />
          </div>
        </a>
      </FadeIn>
    </section>
  );
};
