import { FadeIn } from "./FadeIn";
import { ArrowRight, Bot, Code2, Sparkles } from "lucide-react";

export const AIShowcase = () => {
  return (
    <section className="py-12 md:py-16">
      <FadeIn delay={0.25}>
        <p className="anthropic-label mb-6">Why Anthropic</p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="anthropic-card mb-4">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-card-foreground/10 flex items-center justify-center shrink-0">
              <Bot className="text-card-foreground/70" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">Active Claude User & Builder</h3>
              <p className="text-sm text-card-foreground/70 leading-relaxed">
                I use Claude daily for work and personal projects. From building MCP servers
                to automating workflows with Claude Code — I'm not just passionate about AI,
                I'm shipping with it.
              </p>
            </div>
          </div>

          <div className="anthropic-divider my-5" />

          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href="https://anthropic-portfolio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-4 rounded-xl bg-card-foreground/5 hover:bg-card-foreground/10 transition-colors"
            >
              <Code2 size={20} className="text-card-foreground/60 shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-card-foreground">This Portfolio</p>
                <p className="text-xs text-card-foreground/50">Built with Claude Code</p>
              </div>
              <ArrowRight size={16} className="text-card-foreground/40 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://github.com/Newsdaddy/anthropic-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-4 rounded-xl bg-card-foreground/5 hover:bg-card-foreground/10 transition-colors"
            >
              <Sparkles size={20} className="text-card-foreground/60 shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-card-foreground">MCP Career Advisor</p>
                <p className="text-xs text-card-foreground/50">Custom MCP server for job search</p>
              </div>
              <ArrowRight size={16} className="text-card-foreground/40 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.35}>
        <div className="anthropic-card">
          <p className="anthropic-label mb-3">My Perspective</p>
          <p className="text-sm leading-relaxed text-card-foreground/80">
            After 5 years selling B2B SaaS data products, I see how enterprise buyers
            evaluate AI tools. They need <span className="font-medium text-card-foreground">trust, not just capability</span>.
            Anthropic's focus on safety and interpretability isn't just ethical — it's the winning GTM strategy
            for regulated industries and cautious enterprises. I want to help Korean & APAC
            enterprises adopt Claude safely.
          </p>

          <div className="mt-5">
            <a
              href="mailto:byeongjin.jeong05@gmail.com"
              className="anthropic-btn"
            >
              Let's talk <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};
